#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';
import prettier from 'prettier';
import vm from 'vm';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_FILE = path.join(__dirname, '../src/data/posts.ts');

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

  // Read posts.ts file
  const fileContent = await fs.readFile(POSTS_FILE, 'utf-8');

  // Extract the posts array by evaluating it in a safe context
  // Remove the import and export statements, keep just the array
  const arrayMatch = fileContent.match(
    /const postsData: PostsData = (\[[\s\S]*\]);/
  );

  if (!arrayMatch) {
    throw new Error('Could not find posts data array in file');
  }

  // Safely evaluate the array
  const arrayCode = arrayMatch[1];
  const posts = vm.runInNewContext(arrayCode);

  console.log(`Found ${posts.length} posts\n`);

  let updatedCount = 0;

  // Process each post
  for (const post of posts) {
    const postId = post.id;

    // Skip posts with empty content but manually set wordCount
    if ((!post.content || post.content.trim() === '') && post.wordCount) {
      console.log(
        `  Post ${postId}: Skipping (empty content with manual wordCount: ${post.wordCount})`
      );
      continue;
    }

    if (!post.content || post.content.trim() === '') {
      console.log(`  Post ${postId}: Skipping (empty content)`);
      continue;
    }

    // Calculate word count
    const plainText = stripHtmlTags(post.content);
    const wordCount = getWordCount(plainText);

    const existingCount = post.wordCount;

    if (existingCount !== undefined) {
      if (existingCount !== wordCount) {
        console.log(
          `  Post ${postId}: Updating wordCount ${existingCount} → ${wordCount}`
        );
      } else {
        console.log(`  Post ${postId}: wordCount unchanged (${wordCount})`);
      }
    } else {
      console.log(`  Post ${postId}: Adding wordCount: ${wordCount}`);
    }

    // Update the post object
    post.wordCount = wordCount;
    updatedCount++;
  }

  console.log(`\n📝 Updated ${updatedCount} posts\n`);

  // Generate new TypeScript file content
  console.log('🔨 Generating new posts.ts file...');

  const newContent = `import type { PostsData } from './types/posts.types';

const postsData: PostsData = ${JSON.stringify(posts, null, 2)};

export default postsData;
`;

  // Format with Prettier
  console.log('🎨 Formatting with Prettier...');
  const prettierConfig = await prettier.resolveConfig(POSTS_FILE);
  const formattedContent = await prettier.format(newContent, {
    ...prettierConfig,
    filepath: POSTS_FILE,
  });

  // Write back to file
  await fs.writeFile(POSTS_FILE, formattedContent, 'utf-8');

  console.log('✅ Word counts calculated successfully!\n');
}

calculateWordCounts().catch((err) => {
  console.error('❌ Error:', err);
  process.exit(1);
});
