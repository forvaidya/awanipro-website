# GTM and SEO Optimization Task for awanipro-website

## Context
I have a DevOps consulting website built with Hono + Vite + React + Tailwind CSS, deployed on Cloudflare Pages. The site needs GTM integration and essential SEO elements (robots.txt, sitemap, meta tags, structured data).

Repository: https://github.com/forvaidya/awanipro-website
Live sites: 
- Beta: https://beta.awanipto.com
- Production (future): https://awanipro.com

## Important Constraints
- DO NOT add any social media meta tags (Open Graph, Twitter Cards) - already handled
- DO NOT add LinkedIn or social links - already configured
- Focus ONLY on: GTM, robots.txt, sitemap.xml, basic SEO meta tags, and structured data
- All additions should be invisible to users (no UI changes)

---

## Your Task

### 1. Add Google Tag Manager (GTM) to `index.html`

**Add this immediately after the opening `<head>` tag:**

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

**Add this immediately after the opening `<body>` tag:**

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

**Note:** Replace `GTM-XXXXXXX` with actual GTM ID once obtained from https://tagmanager.google.com

---

### 2. Create `public/robots.txt`

```txt
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://beta.awanipto.com/sitemap.xml
Sitemap: https://awanipro.com/sitemap.xml

# Block admin/build artifacts if needed in future
# Disallow: /admin/
```

---

### 3. Create `public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://beta.awanipto.com/</loc>
    <lastmod>2025-01-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- About Section -->
  <url>
    <loc>https://beta.awanipto.com/#about</loc>
    <lastmod>2025-01-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Services Section -->
  <url>
    <loc>https://beta.awanipto.com/#services</loc>
    <lastmod>2025-01-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Contact Section -->
  <url>
    <loc>https://beta.awanipto.com/#contact</loc>
    <lastmod>2025-01-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

---

### 4. Update `index.html` - Add Essential SEO Meta Tags

**Add/update these meta tags in the `<head>` section (skip if already present):**

```html
<!-- Essential SEO Meta Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AwaniPro - DevOps & Cloud Consulting | Bangalore, India</title>
<meta name="description" content="Expert DevOps and Cloud consulting services in Bangalore. Specializing in Kubernetes, AWS, Azure, CI/CD, Infrastructure as Code, and cloud migration.">
<meta name="keywords" content="DevOps, Cloud Consulting, Kubernetes, AWS, Azure, GCP, CI/CD, Bangalore, India, Infrastructure as Code, Cloud Migration, Docker, Terraform, Ansible, Jenkins, GitLab">
<meta name="author" content="Mahesh Vaidya">
<meta name="robots" content="index, follow">
<meta name="language" content="English">

<!-- Canonical URL -->
<link rel="canonical" href="https://beta.awanipto.com/">
```

---

### 5. Add Structured Data (JSON-LD) to `index.html`

**Add this script before the closing `</head>` tag:**

```html
<!-- Structured Data for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "AwaniPro",
  "alternateName": "AwaniPro Private Limited",
  "description": "DevOps and Cloud Consulting Services specializing in Kubernetes, AWS, Azure, CI/CD, and Infrastructure as Code",
  "url": "https://beta.awanipto.com",
  "logo": "https://beta.awanipto.com/logo.svg",
  "email": "mahesh.vaidya@awanipro.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.9716",
    "longitude": "77.5946"
  },
  "founder": {
    "@type": "Person",
    "name": "Mahesh Vaidya",
    "jobTitle": "Founder & DevOps Consultant"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "DevOps Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Infrastructure Management",
          "description": "AWS, Azure, and GCP infrastructure design and management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kubernetes & Container Orchestration",
          "description": "Container orchestration, deployment, and management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "CI/CD Pipeline Development",
          "description": "Automated build, test, and deployment pipelines"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Infrastructure as Code",
          "description": "Terraform, Ansible, and CloudFormation implementation"
        }
      }
    ]
  }
}
</script>
```

---

### 6. Create `public/site.webmanifest`

```json
{
  "name": "AwaniPro - DevOps Consulting",
  "short_name": "AwaniPro",
  "description": "Expert DevOps and Cloud consulting services",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0066cc",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

## Commit Instructions

After making all changes, commit with this message:

```
feat: Add GTM integration and essential SEO elements

- Add Google Tag Manager (GTM) script to index.html
- Create robots.txt for search engine crawling
- Create sitemap.xml with all site pages
- Add essential SEO meta tags (title, description, keywords)
- Add structured data (JSON-LD) for rich search results
- Add site.webmanifest for PWA support
- Add canonical URL

All changes are invisible to users (no UI modifications)
```

---

## Important Notes

### What to Update After Task Completion:

1. **GTM Container ID**: Replace `GTM-XXXXXXX` with your actual GTM ID from https://tagmanager.google.com
   - Create GTM account
   - Create container for "awanipro.com" or "beta.awanipto.com"
   - Get container ID (format: GTM-XXXXXXX)
   - Replace in both `<head>` and `<body>` GTM scripts

2. **Icons for Web Manifest**: Generate these favicon files and add to `public/`:
   - android-chrome-192x192.png
   - android-chrome-512x512.png
   - Use https://realfavicongenerator.net/

### Testing After Deployment:

1. **robots.txt**: `https://beta.awanipto.com/robots.txt`
2. **sitemap.xml**: `https://beta.awanipto.com/sitemap.xml`
3. **GTM**: Check browser console for GTM dataLayer
4. **Structured Data**: https://search.google.com/test/rich-results
5. **Lighthouse SEO**: Chrome DevTools → Lighthouse → SEO audit

---

## Verification Checklist

After completing the task, verify:

- [ ] GTM script added to `<head>` immediately after opening tag
- [ ] GTM noscript added to `<body>` immediately after opening tag
- [ ] `public/robots.txt` created and accessible
- [ ] `public/sitemap.xml` created and valid XML
- [ ] Essential meta tags present in `<head>`
- [ ] Structured data (JSON-LD) added before `</head>`
- [ ] `public/site.webmanifest` created
- [ ] Canonical URL tag present
- [ ] No UI/visual changes to the website
- [ ] All files committed to repository
- [ ] Changes pushed to main branch

---

## Success Criteria

✅ GTM loads successfully (check browser Network tab for gtm.js)
✅ robots.txt returns 200 status code
✅ sitemap.xml is valid XML and accessible
✅ Structured data passes Rich Results Test
✅ Lighthouse SEO score improves
✅ No console errors
✅ No visual changes to website
✅ All files committed and pushed

---

## Additional Context

- This is a single-page React application (SPA)
- Built with Vite, so all `public/` files are served as static assets
- Cloudflare Pages automatically serves files from `public/` directory
- GTM container will be used for Google Analytics, event tracking, and conversion tracking in the future

Complete all tasks, commit the changes, and push to the main branch.