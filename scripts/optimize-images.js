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
  full: { width: 1920, quality: 90 }
};

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

async function optimizeImage(inputPath, filename) {
  const ext = path.extname(filename).toLowerCase();
  const name = path.basename(filename, ext);
  
  // Skip GIFs (they need special handling)
  if (ext === '.gif') {
    console.log(`Skipping GIF: ${filename}`);
    return;
  }

  console.log(`Processing: ${filename}`);

  for (const [sizeName, config] of Object.entries(SIZES)) {
    const outputPath = path.join(OUTPUT_DIR, sizeName, `${name}.webp`);
    await ensureDir(path.dirname(outputPath));

    try {
      await sharp(inputPath)
        .resize(config.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: config.quality })
        .toFile(outputPath);

      const stats = await fs.stat(outputPath);
      console.log(`  ✓ ${sizeName}: ${(stats.size / 1024).toFixed(1)}KB`);
    } catch (err) {
      console.error(`  ✗ ${sizeName}: ${err.message}`);
    }
  }
}

async function main() {
  console.log('🖼️  Optimizing blog images...\n');

  // Ensure output directories exist
  for (const sizeName of Object.keys(SIZES)) {
    await ensureDir(path.join(OUTPUT_DIR, sizeName));
  }

  // Get all images
  const files = await fs.readdir(INPUT_DIR);
  const imageFiles = files.filter(f => 
    /\.(jpg|jpeg|png|webp)$/i.test(f)
  );

  console.log(`Found ${imageFiles.length} images to process\n`);

  // Process images in parallel (4 at a time)
  const CONCURRENCY = 4;
  for (let i = 0; i < imageFiles.length; i += CONCURRENCY) {
    const batch = imageFiles.slice(i, i + CONCURRENCY);
    await Promise.all(
      batch.map(filename => 
        optimizeImage(path.join(INPUT_DIR, filename), filename)
      )
    );
  }

  // Generate manifest
  const manifest = {};
  for (const filename of imageFiles) {
    const ext = path.extname(filename);
    const name = path.basename(filename, ext);
    
    if (ext === '.gif') {
      manifest[filename] = {
        original: `/images/blog/${filename}`,
        sizes: {}
      };
    } else {
      manifest[filename] = {
        original: `/images/blog/${filename}`,
        sizes: {}
      };
      
      for (const sizeName of Object.keys(SIZES)) {
        manifest[filename].sizes[sizeName] = `/images/optimized/${sizeName}/${name}.webp`;
      }
    }
  }

  await fs.writeFile(
    path.join(OUTPUT_DIR, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );

  console.log(`\n✅ Optimization complete! Manifest written to ${OUTPUT_DIR}/manifest.json`);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
