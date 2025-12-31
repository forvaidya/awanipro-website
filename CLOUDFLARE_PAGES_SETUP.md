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
| **Deploy command** | **(LEAVE EMPTY - delete any content)** |
| **Node.js version** | 18.20.0+ (default) |

## ✨ Important Notes

- **Deploy command:** Delete/clear this field completely
- **Build output directory:** Must be `dist` (NOT `/` or `./dist`)
- Cloudflare Pages will automatically serve files from `dist` folder

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
