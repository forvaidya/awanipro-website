// Configuration constants for the application
export const config = {
  // Base URL for assets - can be overridden via environment variable
  baseUrl: import.meta.env.VITE_BASE_URL || '',

  // API keys and external services
  web3forms: {
    key: import.meta.env.VITE_WEB3FORMS_KEY,
  },

  // Asset paths
  assets: {
    gstCertificate: `${import.meta.env.VITE_BASE_URL || ''}/gst-certificate.pdf`,
    registrationCertificate: `${import.meta.env.VITE_BASE_URL || ''}/registration-certificate.pdf`,
  },
};
