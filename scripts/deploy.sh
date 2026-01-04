#!/bin/bash

# AwaniPro Deployment Script
# Performs clean cache deployment to Cloudflare Pages
# Usage: npm run deploy (or ./scripts/deploy.sh)

set -e

echo "🚀 Starting clean cache deployment..."
echo ""

# Step 1: Clean build
echo "📦 Step 1: Cleaning and building..."
rm -rf dist
npm run build

# Step 2: Deploy to Cloudflare Pages
echo ""
echo "🌍 Step 2: Deploying to Cloudflare Pages..."
wrangler pages deploy dist --commit-dirty=true

echo ""
echo "✅ Deployment complete!"
echo "🔗 Preview: Check Cloudflare Pages dashboard for live URL"
