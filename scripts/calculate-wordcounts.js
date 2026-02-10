#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';
import vm from 'vm';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_DIR = path.join(__dirname, '../src/data/posts');
const POSTS_INDEX = path.join(__dirname, '../src/data/posts.ts');

// Strip HTML tags using jsdom
function stripHtmlTags(html) {
  if (!html || html.trim().length === 0) return '';
  const dom = new JSDOM(html);
  return dom.window.document.body.textContent || '';
}

// Count words from plain text
function getWordCount(text) {
  if (!text || text.trim().length === 0) return 0;
  return text.trim().split(/\s+/).length;
}

async function calculateWordCounts() {
  console.log('📊 Calculating word counts for blog posts...\n');

  // Read the index file to get the import order
  const indexContent = await fs.readFile(POSTS_INDEX, 'utf-8');

  // Extract import lines to get slugs in order
  const importRegex = /import \w+ from '\.\/posts\/([^']+)';/g;
  const slugs = [];
  let m;
  while ((m = importRegex.exec(indexContent)) !== null) {
    slugs.push(m[1]);
  }

  console.log(`Found ${slugs.length} posts\n`);

  let updatedCount = 0;

  for (const slug of slugs) {
    const filePath = path.join(POSTS_DIR, `${slug}.ts`);
    let content = await fs.readFile(filePath, 'utf-8');

    // Extract the post object
    const match = content.match(/const post:\s*Post\s*=\s*(\{[\s\S]*\});/);
    if (!match) {
      console.log(`  ${slug}: Skipping (could not parse)`);
      continue;
    }

    const objCode = match[1];
    let post;
    try {
      post = vm.runInNewContext(`(${objCode})`);
    } catch (e) {
      console.log(`  ${slug}: Skipping (eval error: ${e.message})`);
      continue;
    }

    // Skip posts with empty content but manually set wordCount
    if ((!post.content || post.content.trim() === '') && post.wordCount) {
      console.log(
        `  Post ${post.id} (${slug}): Skipping (empty content with manual wordCount: ${post.wordCount})`
      );
      continue;
    }

    if (!post.content || post.content.trim() === '') {
      console.log(`  Post ${post.id} (${slug}): Skipping (empty content)`);
      continue;
    }

    // Calculate word count
    const plainText = stripHtmlTags(post.content);
    const wordCount = getWordCount(plainText);

    const existingCount = post.wordCount;

    if (existingCount !== undefined) {
      if (existingCount !== wordCount) {
        console.log(
          `  Post ${post.id} (${slug}): Updating wordCount ${existingCount} → ${wordCount}`
        );

        // Update the file - replace the wordCount value
        content = content.replace(
          /wordCount:\s*\d+/,
          `wordCount: ${wordCount}`
        );
        await fs.writeFile(filePath, content, 'utf-8');
      } else {
        console.log(
          `  Post ${post.id} (${slug}): wordCount unchanged (${wordCount})`
        );
      }
    } else {
      console.log(
        `  Post ${post.id} (${slug}): Adding wordCount: ${wordCount}`
      );
      // Insert wordCount before tags line
      content = content.replace(/(\s*tags:)/, `  wordCount: ${wordCount},\n$1`);
      await fs.writeFile(filePath, content, 'utf-8');
    }

    updatedCount++;
  }

  console.log(`\n📝 Processed ${updatedCount} posts`);
  console.log('✅ Word counts calculated successfully!\n');
}

calculateWordCounts().catch((err) => {
  console.error('❌ Error:', err);
  process.exit(1);
});
