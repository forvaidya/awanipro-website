# GitHub Actions + Cloudflare Pages Auto-Deployment Guide

Complete guide to deploy your AwaniPro website automatically to **beta.awanipro.com** via GitHub Actions.

## 🎯 Overview

This workflow:
- ✅ Automatically deploys on every push to `main` branch
- ✅ Builds your Vite app
- ✅ Deploys to Cloudflare Pages
- ✅ Automatically manages CNAME records
- ✅ Sends deployment notifications

## 📋 Prerequisites

Before setting up GitHub Actions, you need:

1. **GitHub Repository** - Your code on GitHub
2. **Cloudflare Account** - Free or paid
3. **Cloudflare Pages Project** - Created and named `awanipro-website`
4. **Domain** - `beta.awanipro.com` (with Cloudflare DNS)
5. **API Credentials** - Cloudflare API Token & Account ID

## 🔑 Step 1: Get Cloudflare API Credentials

### Get API Token

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **My Profile** (bottom left) → **API Tokens**
3. Click **Create Token**
4. Choose template: **Edit Cloudflare Workers** (or custom)
5. **Permissions required:**
   - `Account.Cloudflare Pages` - Read & Write
   - `Account.Workers KV Storage` - Read & Write (optional)
6. Click **Continue to summary** → **Create Token**
7. **Copy the token** (you'll only see it once!)

### Get Account ID

1. Still in Cloudflare Dashboard
2. Go to your domain → **Overview** tab
3. On the right side, find **Account ID**
4. **Copy the Account ID**

## 🔐 Step 2: Add Secrets to GitHub

1. Go to your GitHub repo
2. **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add two secrets:

| Secret Name | Value |
|------------|-------|
| `CLOUDFLARE_API_TOKEN` | Your API token from Cloudflare |
| `CLOUDFLARE_ACCOUNT_ID` | Your Account ID from Cloudflare |

⚠️ **Never commit these secrets!** GitHub keeps them encrypted.

## ✅ Step 3: Verify Workflow File

Check that `.github/workflows/deploy.yml` exists with correct content:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      # Checkout, setup Node, install deps...
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: pages deploy dist --project-name=awanipro-website
```

## 🚀 Step 4: Create Cloudflare Pages Project (if not done)

1. Log in to Cloudflare Dashboard
2. Go to **Workers & Pages** → **Pages** → **Create application**
3. Select **Direct upload**
4. Project name: `awanipro-website`
5. Click **Create project**
6. You can skip the upload (GitHub Actions will handle it)

## 🌐 Step 5: Configure Domain & CNAME

### Option A: Cloudflare Nameservers (Easiest)

1. In Cloudflare dashboard, go to **your domain** → **Nameservers**
2. Copy the 2 nameserver addresses
3. Go to your domain registrar (GoDaddy, Namecheap, etc.)
4. Update nameservers to Cloudflare's
5. Wait 5-30 minutes for DNS propagation

Cloudflare **automatically creates CNAME** for your Pages project!

### Option B: CNAME Record (If you can't change nameservers)

1. In your domain registrar's DNS settings
2. Add CNAME record:
   - **Name**: `beta`
   - **Value**: `awanipro-website.<random-hash>.pages.dev`
   - **TTL**: Auto

(Get the exact value from Cloudflare Pages project settings)

### Connect Domain to Cloudflare Pages Project

1. In Cloudflare Dashboard → **Workers & Pages**
2. Select your `awanipro-website` project
3. Go to **Settings** → **Domains**
4. Click **Add custom domain**
5. Enter: `beta.awanipro.com`
6. Choose setup method (nameserver or CNAME)
7. Follow the prompts

**Cloudflare automatically creates/verifies CNAME!** ✅

## 📝 Step 6: First Deployment

### Trigger deployment:

```bash
git add .
git commit -m "Setup GitHub Actions deployment"
git push origin main
```

### Monitor deployment:

1. Go to GitHub repo → **Actions** tab
2. Click the running workflow
3. Watch the build and deploy steps
4. Check for errors in the logs

### Verify deployment:

Once complete:
- Visit `https://beta.awanipro.com` 
- Check SSL: 🔒 Green lock
- Cloudflare **auto-provisions free SSL** ✅

## 🔄 Automatic CNAME Handling

Cloudflare **automatically manages CNAME** in two ways:

### 1. If using Cloudflare Nameservers
- Nameserver setup automatically routes `beta.awanipro.com` → Pages
- No manual CNAME needed!

### 2. If using CNAME Record
- You add CNAME once in your registrar
- Cloudflare Pages deploys to its domain
- Traffic routes through CNAME

**Either way, no GitHub Actions code needed for CNAME!**

## 📊 Monitor Deployments

### In GitHub

**Actions** tab shows:
- All workflow runs
- Build status ✅ or ❌
- Deployment logs
- Commit info

### In Cloudflare

**Workers & Pages** → Your project → **Deployments**:
- Each deployment listed
- Current production version
- Rollback if needed
- View built site

## 🚨 Troubleshooting

### Deployment fails with "API token invalid"
- Check secrets are set correctly in GitHub Settings
- Verify token hasn't expired
- Recreate token if needed

### CNAME not resolving
- Wait 5-30 minutes for DNS propagation
- Check your domain registrar settings
- Verify CNAME target is correct

### Pages project not found
- Ensure project name is exactly: `awanipro-website`
- Check it exists in Cloudflare Dashboard → Pages

### Build fails
- Check logs in GitHub Actions
- Verify `npm run build` works locally
- Check all dependencies installed

## 📋 Deployment Checklist

- [ ] Created Cloudflare API token
- [ ] Copied Account ID from Cloudflare
- [ ] Added `CLOUDFLARE_API_TOKEN` secret to GitHub
- [ ] Added `CLOUDFLARE_ACCOUNT_ID` secret to GitHub
- [ ] Verified `.github/workflows/deploy.yml` exists
- [ ] Created Cloudflare Pages project (`awanipro-website`)
- [ ] Set domain to `beta.awanipro.com`
- [ ] Configured nameservers OR CNAME record
- [ ] Pushed code to `main` branch
- [ ] Verified deployment in GitHub Actions
- [ ] Visited `https://beta.awanipro.com` ✅

## 🎉 Now What?

Every time you push to `main`:

```bash
git add .
git commit -m "Update blog post"
git push origin main
# → GitHub Actions automatically builds & deploys! 🚀
```

### Next Steps:
1. **Add blog posts** - Edit `src/data/blogPosts.ts`
2. **Update content** - Edit React components
3. **Change domain** - Update `VITE_DOMAIN` in workflow
4. **Add contact form** - Get Web3Forms API key
5. **Setup analytics** - Use Cloudflare Analytics (built-in)

## 📞 Need Help?

- **Cloudflare Docs**: https://developers.cloudflare.com/pages/
- **GitHub Actions**: https://docs.github.com/en/actions
- **Troubleshooting**: Check build logs in GitHub Actions tab

---

**Deployment is automatic and CI/CD best-practice compliant! 🎯**
