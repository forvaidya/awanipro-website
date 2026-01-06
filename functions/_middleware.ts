/**
 * Cloudflare Pages Function - Middleware
 * Handles redirects from preview URLs to production domain
 */

export const onRequest: PagesFunction = async (context) => {
  const { request } = context;
  const url = new URL(request.url);

  // Redirect naked domain to www subdomain
  if (url.hostname === 'awanipro.com') {
    return Response.redirect(`https://www.awanipro.com${url.pathname}${url.search}`, 301);
  }

  // Redirect preview URLs to production domain
  if (url.hostname.endsWith('.awanipro-website.pages.dev') || url.hostname === 'awanipro-website.pages.dev') {
    return Response.redirect(`https://www.awanipro.com${url.pathname}${url.search}`, 301);
  }

  // Continue to next middleware/route handler
  return context.next();
};
