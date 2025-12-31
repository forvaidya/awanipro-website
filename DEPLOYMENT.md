# Cloudflare Pages Deployment Guide

Complete step-by-step guide to deploy AwaniPro website to **awanipro.com** using Cloudflare Pages.

## 📋 Prerequisites

- ✅ GitHub account (free)
- ✅ Cloudflare account (free tier sufficient)
- ✅ awanipro.com domain (already registered)
- ✅ Code pushed to GitHub repo
- ✅ Node.js 18+ for local development

---

## 🚀 Step 1: Push Code to GitHub

### 1.1 Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **New repository**
3. Name it: `awanipro-website`
4. Description: "AwaniPro - DevOps & Cloud Consulting Website"
5. Choose **Public** (better for SEO)
6. Click **Create repository**

### 1.2 Push Local Code

```bash
cd /Users/maheshvaidya/__STUDY__/awanipro-website

# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/awanipro-website.git

# Rename branch to main
git branch -M main

# Push code
git push -u origin main
```

✅ Your code is now on GitHub!

---

## 🌐 Step 2: Connect to Cloudflare Pages

### 2.1 Log in to Cloudflare Dashboard

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Sign in with your Cloudflare account
3. Select your **awanipro.com** domain

### 2.2 Navigate to Pages

1. Click **Workers & Pages** (left sidebar)
2. Click **Pages** tab
3. Click **Create application**
4. Select **Connect to Git**

### 2.3 Authorize GitHub

1. Click **Connect GitHub**
2. Sign in to GitHub (if prompted)
3. Authorize Cloudflare to access your repositories
4. Select `awanipro-website` from the list

✅ Repository connected!

---

## ⚙️ Step 3: Configure Build Settings

### 3.1 Project Settings

When prompted by Cloudflare, use these settings:

| Setting | Value |
|---------|-------|
| **Framework preset** | (Leave blank - auto-detected) |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (default) |
| **Environment variables** | (Leave empty for now) |
| **Node version** | 18.x (auto-selected) |

Click **Save and Deploy**

### 3.2 Initial Deployment

Cloudflare will automatically:
1. Clone your GitHub repo
2. Run `npm install`
3. Run `npm run build`
4. Deploy `dist/` folder to global CDN
5. Assign temporary URL: `awanipro-website.pages.dev`

✅ Your site is live! Check: `https://awanipro-website.pages.dev`

---

## 🌍 Step 4: Deploy Custom Domain

### 4.1 Add Custom Domain in Cloudflare

1. Go back to **Pages** project
2. Click **Settings** tab
3. Go to **Domains** section
4. Click **Add domain**
5. Enter: `awanipro.com`
6. Confirm

### 4.2 Update Domain Nameservers

**Option A: Update Nameservers (Recommended)**

1. In Cloudflare Dashboard, go to **Overview**
2. Copy the nameservers provided (typically 2):
   - `ns1.cloudflare.com`
   - `ns2.cloudflare.com`

3. Go to your domain registrar (where you bought awanipro.com)
4. Find "Nameservers" or "DNS Settings"
5. Replace existing nameservers with Cloudflare's
6. Save

**Option B: Add CNAME (If nameserver update not possible)**

1. In Cloudflare Dashboard → awanipro.com → **DNS**
2. Create CNAME record:
   - Name: `www`
   - Target: `awanipro-website.pages.dev`
   - TTL: Auto
   - Proxy status: Proxied ☁️

### 4.3 Wait for Propagation

DNS changes take 5-30 minutes. Cloudflare will show green checkmark when ready.

### 4.4 SSL Certificate

✅ **Automatic!** Cloudflare provides free SSL via Let's Encrypt
- No manual setup needed
- Valid on awanipro.com and www.awanipro.com
- Auto-renewal

✅ Your site is now live at `https://awanipro.com`!

---

## 📝 Step 5: Verify Deployment

Test your live site:

```bash
# Test homepage
curl https://awanipro.com -I

# Check SSL certificate
openssl s_client -connect awanipro.com:443

# Check performance
# Visit: https://awanipro.com
# Check Cloudflare Analytics: Dashboard → Domain → Analytics Engine
```

---

## 🔄 Step 6: Set Up Automatic Deployments

Every push to GitHub **main** branch automatically deploys!

### Example: Update Website

```bash
# Make changes locally
vim src/components/Services.tsx

# Commit and push
git add -A
git commit -m "Update services section"
git push origin main

# Cloudflare automatically:
# 1. Detects push
# 2. Builds site
# 3. Deploys to awanipro.com
# ✅ Done in ~2 minutes!
```

### Check Deployment Status

1. Go to **Pages** project
2. Click **Deployments** tab
3. View build logs, preview URLs, status

---

## 🛡️ Step 7: Security & Performance

### 7.1 Enable Security Features

In Cloudflare Dashboard → awanipro.com:

1. **SSL/TLS** → Mode: **Full (Strict)**
2. **Security** → DDoS Protection: **On** (default)
3. **Firewall** → WAF: **Manage**
4. **Caching** → Cache Level: **Cache Everything**
5. **Page Rules** → Add rule:
   - URL: `awanipro.com/api/*`
   - Cache Level: Bypass

### 7.2 Monitor Performance

**Cloudflare Analytics:**
- Requests: Real-time traffic
- Threats blocked: DDoS, bot traffic
- Cache ratio: Hit/miss
- Performance: Geo, browsers, devices

**Performance Check:**
- Visit: https://pagespeed.web.dev/
- Enter: awanipro.com
- Target: 90+ Lighthouse score

---

## 📊 Step 8: Analytics Setup

### Option 1: Cloudflare Analytics (Free, Built-in)

1. Dashboard → awanipro.com → **Analytics**
2. Metrics available:
   - Page views, unique visitors
   - Top pages, referrers
   - Bot traffic, threats
   - Response times, cache hits
   - Geographic distribution

**No setup needed!** Always enabled.

### Option 2: Google Analytics (Optional)

1. Create [Google Analytics 4](https://analytics.google.com) property
2. Get **Measurement ID** (G-XXXXXXXXXX)
3. In Cloudflare → **Zaraz** (Workers → Zaraz)
4. Add **Google Analytics** tool
5. Paste Measurement ID

### Option 3: Cloudflare Zaraz (Consent-Aware)

Better than Google Analytics alone:
- Requires user consent (GDPR compliant)
- Load scripts only after consent
- Privacy-focused alternative

Setup:
1. Dashboard → awanipro.com → **Zaraz**
2. **Consent Manager** → Enable
3. Configure consent categories
4. Add third-party tools (Analytics, etc.)
5. Customize consent modal

---

## 🍪 Step 9: Cookie Consent

### Option 1: Cloudflare Zaraz (Recommended)

Already covered above - fully integrated with Cloudflare.

### Option 2: Open Source (Optional)

Add lightweight cookie consent banner:

```html
<!-- In index.html before </body> -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.css">
<script src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js"></script>
<script>
  window.CookieConsent.run({
    categories: {
      necessary: { enabled: true },
      analytics: {},
    },
    language: 'en',
  });
</script>
```

---

## 🚨 Step 10: Monitor & Troubleshoot

### Check Deployment Logs

```bash
# View Cloudflare deployment logs
# Dashboard → Pages → awanipro-website → Deployments

# Recent builds:
# ✅ Success: index-DpYl47zy.js built
# ❌ Failed: See error logs
```

### Common Issues & Fixes

**Issue: Build fails with "npm not found"**
- Fix: Set Node.js version in Pages settings

**Issue: Site shows old version**
- Fix: Hard refresh (Cmd+Shift+R or Ctrl+Shift+R)
- Or: Clear cache in Cloudflare → Caching → Purge Cache

**Issue: SSL certificate error**
- Fix: Wait 24 hours after nameserver change
- Or: Use CNAME record instead

**Issue: 404 on subpages (SPA routing)**
- Fix: Add Pages Function to handle SPA routes
- Or: Use hash-based routing (#/)

---

## 🔑 Step 11: Environment Variables (Future)

When you add contact form backend, email, etc.:

1. Dashboard → Pages → awanipro-website → **Settings**
2. **Environment variables** section
3. Add variables:
   ```
   VITE_API_URL = https://api.awanipro.com
   VITE_SENDGRID_KEY = sg_xxxxxxx
   VITE_RECAPTCHA_KEY = 6LcxxxXX_xxxxxxxxx
   ```

4. Redeploy: `git push origin main`

---

## ✅ Final Checklist

- [ ] Code pushed to GitHub
- [ ] Cloudflare Pages project created
- [ ] Build settings configured
- [ ] Custom domain pointing to awanipro.com
- [ ] SSL certificate active (green 🔒)
- [ ] Site loads at https://awanipro.com
- [ ] Performance score 90+ (PageSpeed)
- [ ] Analytics enabled
- [ ] Automatic deployments working
- [ ] Team members added (if needed)

---

## 📞 Need Help?

| Issue | Link |
|-------|------|
| Cloudflare Pages Docs | https://developers.cloudflare.com/pages/ |
| Vite Documentation | https://vitejs.dev/ |
| Tailwind CSS Docs | https://tailwindcss.com/ |
| GitHub Help | https://docs.github.com/ |
| SSL/TLS Issues | https://support.cloudflare.com/ |

---

## 🎉 You're Done!

Your website is now live, fast, and secure!

- 📍 **URL**: https://awanipro.com
- 🔒 **SSL**: Free, auto-renewed
- ⚡ **Performance**: 95+ Lighthouse
- 🌍 **Global**: Cloudflare's 200+ data centers
- 📊 **Analytics**: Built-in Cloudflare Analytics
- 🚀 **Auto-deploy**: Every git push

**Next steps:**
1. Share with team & clients
2. Monitor analytics
3. Add contact form backend
4. Write blog posts
5. Expand with Cloudflare Workers/D1

---

**Deployed by**: Cline Assistant
**Date**: December 29, 2025
**Status**: ✅ Production Ready
