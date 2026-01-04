#!/usr/bin/env node

/**
 * Image Optimization Script
 * Creates properly sized variants of large images
 * Reduces bandwidth waste from oversized images
 */

import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PUBLIC_DIR = path.join(__dirname, '../public/media');
const OPTIMIZATIONS = [
  {
    source: 'mahesh-profile.jpg',
    variants: [
      { name: 'mahesh-profile-sm.jpg', width: 128, height: 128, quality: 85 }, // For mobile/tablet (1.5x for retina)
      { name: 'mahesh-profile-md.jpg', width: 192, height: 192, quality: 85 }, // For desktop (2x for retina)
    ],
  },
];

async function optimizeImages() {
  console.log('🎨 Optimizing images with properly sized variants...\n');

  for (const optimization of OPTIMIZATIONS) {
    const sourcePath = path.join(PUBLIC_DIR, optimization.source);

    if (!fs.existsSync(sourcePath)) {
      console.error(`❌ Source image not found: ${sourcePath}`);
      continue;
    }

    console.log(`📦 Processing ${optimization.source}...`);

    for (const variant of optimization.variants) {
      const outputPath = path.join(PUBLIC_DIR, variant.name);

      try {
        await sharp(sourcePath)
          .resize(variant.width, variant.height, {
            fit: 'cover',
            position: 'center',
          })
          .jpeg({ quality: variant.quality, progressive: true, mozjpeg: true })
          .toFile(outputPath);

        const stats = fs.statSync(outputPath);
        const sizeKb = (stats.size / 1024).toFixed(1);

        console.log(`  ✓ ${variant.name} - ${variant.width}x${variant.height}px - ${sizeKb}KB`);
      } catch (error) {
        console.error(`  ❌ Failed to create ${variant.name}: ${error.message}`);
      }
    }
  }

  console.log('\n✨ Image optimization complete!');
  console.log('\n💡 Usage in components:');
  console.log('   <img srcSet="/media/mahesh-profile-sm.jpg 128w, /media/mahesh-profile-md.jpg 192w"');
  console.log('        src="/media/mahesh-profile.jpg"');
  console.log('        sizes="(max-width: 768px) 128px, 192px"');
  console.log('        alt="..." />');
}

try {
  await optimizeImages();
} catch (error) {
  console.error('Fatal error:', error);
  process.exit(1);
}
