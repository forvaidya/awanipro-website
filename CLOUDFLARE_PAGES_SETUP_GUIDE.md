# Cloudflare Pages Setup Guide

## Step-by-Step Instructions to Create "awanipro-website" Project

### 1. Navigate to Cloudflare Dashboard
1. Go to [https://dash.cloudflare.com](https://dash.cloudflare.com)
2. Sign in to your Cloudflare account
3. Click on **"Pages"** in the left sidebar

### 2. Create New Project
1. Click **"Create a project"** button
2. Choose **"Connect to Git"** (recommended for automatic deployments)
3. You'll be redirected to GitHub to authorize Cloudflare access

### 3. Connect GitHub Repository
1. **Authorize Cloudflare** to access your GitHub account
2. Find and select the repository: **forvaidya/awanipro-website**
3. Click **"Begin setup"**

### 4. Configure Project Settings
**Fill in these exact settings:**

- **Project name**: `awanipro-website`
- **Production branch**: `main` (or your preferred branch)
- **Root directory**: (leave empty)
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Environment variables**: (we'll add this next)

### 5. Set Environment Variables
After creating the project:
1. Go to **Settings** → **Environment variables**
2. Add the following variable:
   - **Variable name**: `VITE_WEB3FORMS_KEY`
   - **Value**: `6be5f6a6-c4ae-40bf-bc5d-38778cbdd171`
   - **Environment**: Production (and Preview if you want)

### 6. Deploy
1. Click **"Save and Deploy"**
2. Wait for the build to complete (usually 2-5 minutes)
3. Once deployed, you'll get a URL like: `awanipro-website.pages.dev`

### 7. Test Wrangler Connection
After the project is created and deployed, run this command:
```bash
wrangler pages deployment list --project-name=awanipro-website
```

This should now work without errors!

## Current Project Configuration

Your `wrangler.toml` is already perfectly configured:
- Project name: `awanipro-website`
- Build output: `dist`
- Environment variables ready
- Cloudflare Pages compatible

## Troubleshooting

**If deployment fails:**
- Check build logs in Cloudflare Dashboard
- Ensure all dependencies are in `package.json`
- Verify `npm run build` works locally first

**If Wrangler still shows errors:**
- Wait 2-3 minutes after deployment for project to be fully created
- Ensure project name matches exactly: `awanipro-website`

## Next Steps After Setup

Once the project is created:
1. ✅ Wrangler will work without asking for project selection
2. ✅ You can use `wrangler pages deployment list` 
3. ✅ Future deployments will be automatic via GitHub
4. ✅ You can also deploy manually with `wrangler pages deploy dist`

---

**Your configuration is ready - just follow these steps to create the Cloudflare project!**
