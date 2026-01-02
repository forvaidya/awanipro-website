# Configuration Guide

This guide explains how to configure the AwaniPro website for different deployment environments.

## Environment Variables

### VITE_BASE_URL
Controls the base URL for static assets like PDFs.

**Default**: Empty string (uses root-relative paths)

**Usage**:
- Leave empty for root-relative paths (`/gst-certificate.pdf`) - works on any domain
- Set to full domain URL for absolute paths (`https://your-domain.com/gst-certificate.pdf`)

**Examples**:
```bash
# For root-relative paths (recommended)
VITE_BASE_URL=

# For absolute URLs
VITE_BASE_URL=https://your-domain.com
```

### VITE_WEB3FORMS_KEY
API key for Web3Forms contact form integration.

**Required**: Yes (for contact form to work)
**Source**: https://web3forms.com

## Configuration Files

### wrangler.toml
Cloudflare Pages configuration with environment variables.

```toml
name = "awanipro-website"
compatibility_date = "2025-12-31"

[env.production.vars]
# Uncomment and set for absolute URLs
# VITE_BASE_URL = "https://your-domain.com"

[vars]
VITE_WEB3FORMS_KEY = "your_actual_key_here"
```

### src/config.ts
Centralized configuration object used throughout the application.

## Deployment Instructions

### For Different Domains

1. **Set VITE_BASE_URL** in your environment:
   - Cloudflare Pages: Dashboard → Pages → Your Project → Settings → Environment variables
   - Local development: `.env` file

2. **Certificate Links**: Will automatically use the configured base URL

3. **Rebuild and Deploy**: Changes require a new build to take effect

### Examples

#### Current Setup (beta.awanipro.com)
```bash
VITE_BASE_URL=
```
Certificate URLs: `/gst-certificate.pdf`, `/registration-certificate.pdf`

#### New Domain (your-domain.com)
```bash
VITE_BASE_URL=https://your-domain.com
```
Certificate URLs: `https://your-domain.com/gst-certificate.pdf`, `https://your-domain.com/registration-certificate.pdf`

## Testing Configuration

After deployment, verify:
- Certificate download links work correctly
- Contact form submits successfully
- All assets load properly
