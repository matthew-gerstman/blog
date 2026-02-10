#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, '../public/images/blog');
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');

const SIZES = {
  thumbnail: { width: 400, quality: 70 },
  medium: { width: 800, quality: 80 },
  large: { width: 1200, quality: 85 },
  full: { width: 1920, quality: 90 },
};

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

async function getAllImages(dir, baseDir = dir) {
  const images = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Recursively get images from subdirectories
      images.push(...(await getAllImages(fullPath, baseDir)));
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
      // Get relative path from base blog directory
      const relativePath = path.relative(baseDir, fullPath);
      images.push({ fullPath, relativePath });
    }
  }

  return images;
}

async function optimizeImage(inputPath, relativePath) {
  const ext = path.extname(relativePath).toLowerCase();
  const nameWithPath = relativePath.replace(ext, '');

  // Skip GIFs (they need special handling)
  if (ext === '.gif') {
    console.log(`Skipping GIF: ${relativePath}`);
    return null;
  }

  console.log(`Processing: ${relativePath}`);

  const result = {
    original: `/images/blog/${relativePath}`,
    sizes: {},
  };

  for (const [sizeName, config] of Object.entries(SIZES)) {
    const outputPath = path.join(OUTPUT_DIR, sizeName, `${nameWithPath}.webp`);
    await ensureDir(path.dirname(outputPath));

    try {
      await sharp(inputPath)
        .resize(config.width, null, {
          withoutEnlargement: true,
          fit: 'inside',
        })
        .webp({ quality: config.quality })
        .toFile(outputPath);

      const stats = await fs.stat(outputPath);
      console.log(`  ✓ ${sizeName}: ${(stats.size / 1024).toFixed(1)}KB`);

      result.sizes[sizeName] =
        `/images/optimized/${sizeName}/${nameWithPath}.webp`;
    } catch (err) {
      console.error(`  ✗ ${sizeName}: ${err.message}`);
    }
  }

  return { relativePath, result };
}

function generateManifestTs(manifest) {
  const entries = Object.entries(manifest)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => {
      const sizesEntries = Object.entries(value.sizes)
        .map(([sizeName, sizePath]) => {
          // Check if the path is long enough to need line breaks
          const line = `      ${sizeName}: '${sizePath}',`;
          if (line.length > 80) {
            return `      ${sizeName}:\n        '${sizePath}',`;
          }
          return line;
        })
        .join('\n');

      return `  '${key}': {
    original: '${value.original}',
    sizes: {
${sizesEntries}
    },
  },`;
    })
    .join('\n');

  return `import type { ImageManifest } from '../../../src/data/types/manifest.types';

const imageManifest: ImageManifest = {
${entries}
};

export default imageManifest;
`;
}

async function main() {
  console.log('🖼️  Optimizing blog images...\n');

  // Ensure output directories exist
  for (const sizeName of Object.keys(SIZES)) {
    await ensureDir(path.join(OUTPUT_DIR, sizeName));
  }

  // Get all images recursively
  const images = await getAllImages(INPUT_DIR);
  console.log(`Found ${images.length} images to process\n`);

  // Process images in parallel (4 at a time)
  const CONCURRENCY = 4;
  const manifest = {};

  for (let i = 0; i < images.length; i += CONCURRENCY) {
    const batch = images.slice(i, i + CONCURRENCY);
    const results = await Promise.all(
      batch.map(({ fullPath, relativePath }) =>
        optimizeImage(fullPath, relativePath)
      )
    );

    // Add to manifest
    for (const item of results) {
      if (item) {
        manifest[item.relativePath] = item.result;
      }
    }
  }

  // Also handle GIFs
  for (const { fullPath, relativePath } of images) {
    if (path.extname(relativePath).toLowerCase() === '.gif') {
      manifest[relativePath] = {
        original: `/images/blog/${relativePath}`,
        sizes: {},
      };
    }
  }

  // Write manifest.json
  await fs.writeFile(
    path.join(OUTPUT_DIR, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );

  // Generate manifest.ts from the JSON output
  const manifestTs = generateManifestTs(manifest);
  await fs.writeFile(path.join(OUTPUT_DIR, 'manifest.ts'), manifestTs);

  console.log(`\n✅ Optimization complete!`);
  console.log(`   Processed ${images.length} images`);
  console.log(`   Manifest written to ${OUTPUT_DIR}/manifest.json`);
  console.log(`   TypeScript manifest written to ${OUTPUT_DIR}/manifest.ts`);
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
