# Cloudflare Pages Configuration Guide

## Issue: Wrong Deploy Command

Your Cloudflare Pages build is failing because of an incorrect **Deploy command**.

## ✅ Correct Cloudflare Pages Settings

Go to: **Cloudflare Dashboard** → **Pages** → **awanipro-website** → **Settings** → **Build configuration**

Set these fields EXACTLY:

| Field | Value |
|-------|-------|
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Deploy command** | `npx wrangler pages deploy ./dist --project-name awanipro-website` |
| **Node.js version** | 18.20.0+ |

## Important: Build Output Directory

**Make sure it's set to: `dist`**
- NOT `/` (root folder)
- NOT `./dist`
- Just: `dist`

## 🚀 How It Works

1. GitHub → Cloudflare detects changes
2. Runs: `npm run build`
3. Output goes to: `dist/` folder
4. **Cloudflare automatically deploys** to your domain ✅

## ✨ Save & Redeploy

1. Clear the "Deploy command" field
2. Click **Save**
3. Go to **Deployments** tab
4. Click **Trigger deployment** (or wait for auto-trigger)

**That's it! Your site will be live! 🎉**
