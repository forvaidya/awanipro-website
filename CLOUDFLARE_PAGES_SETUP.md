# Cloudflare Pages Configuration Guide

## Issue: Wrong Deploy Command

Your Cloudflare Pages build is failing because of an incorrect **Deploy command**.

## ✅ Correct Cloudflare Pages Settings

Go to: **Cloudflare Dashboard** → **Pages** → **awanipro-website** → **Settings** → **Build configuration**

Set these fields:

| Field | Value | Status |
|-------|-------|--------|
| **Build command** | `npm run build` | ✅ Correct |
| **Build output directory** | `dist` | ✅ Correct |
| **Deploy command** | **LEAVE EMPTY** | ❌ Remove the wrangler command |
| **Node.js version** | 18.20.0+ | ✅ Default |

## ❌ What NOT to Do

DO NOT use these deploy commands:
- `npx wrangler deploy` ❌
- `npx wrangler pages deploy` ❌
- `wrangler deploy` ❌

Cloudflare Pages handles deployment automatically after building!

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
