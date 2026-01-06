# CNAME & Domain Troubleshooting Guide

## Issue: CNAME Added But Site Shows Error/Blank Page

Here's how to fix it step by step:

## 🔍 Step 1: Verify Cloudflare Pages Domain Configuration

1. **Cloudflare Dashboard** → **Pages** → **awanipro-website**
2. Go to **Settings** → **Domains**
3. Check the status of `www.awanipro.com`
4. Should show: ✅ **Active** or similar status

**If showing error:**
- Click the domain
- Follow Cloudflare's verification steps
- This usually involves updating DNS records

## 🔗 Step 2: Verify CNAME Value

**The CNAME should point to your Cloudflare Pages deployment URL:**

Get the correct value:
1. In Cloudflare Pages project settings → **Domains**
2. Look for the deployment URL (something like: `awanipro-website.<hash>.pages.dev`)
3. Your CNAME record at registrar should be:
   - **Name/Host:** `beta`
   - **Value:** `awanipro-website.<hash>.pages.dev`
   - **TTL:** Auto or 3600

## ⏳ Step 3: DNS Propagation

DNS changes can take:
- **Usually:** 5-30 minutes
- **Maximum:** Up to 48 hours

**Check if DNS is propagated:**
```bash
nslookup www.awanipro.com
```

Should show the CNAME pointing to Cloudflare Pages.

## 🔒 Step 4: SSL Certificate

- Cloudflare automatically issues SSL certificates
- May take 5-30 minutes after domain is added
- Until ready, you might see HTTPS errors

## ✅ Common Fixes

1. **Clear browser cache** (Ctrl+Shift+Delete or Cmd+Shift+Delete)
2. **Try private/incognito window** to bypass cache
3. **Wait 30 minutes** for DNS/SSL to propagate
4. **Check domain status** in Cloudflare Pages settings
5. **Verify CNAME value** matches exactly

## 🚨 If Still Not Working

1. **Go to:** Cloudflare Dashboard → **awanipro.com** domain
2. **Check:** DNS records for `beta` subdomain
3. **Verify:** CNAME points to `awanipro-website.<hash>.pages.dev`
4. **Look for:** Any other `beta` records that might conflict

## 💡 Alternative: Use Cloudflare Nameservers

If you control your domain registrar, you can use **Cloudflare nameservers** instead of CNAME:

1. Get Cloudflare nameservers from Dashboard
2. Update your domain registrar's nameservers
3. Wait for propagation (5-48 hours)
4. Cloudflare automatically routes the domain

This is **easier and more reliable** than CNAME if you control the registrar!

---

**Once DNS propagates:** Visit `https://www.awanipro.com` and your site will be live! 🚀
