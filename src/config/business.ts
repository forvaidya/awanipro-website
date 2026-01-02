/**
 * Business Configuration
 * Centralized configuration for company information, founder details, and business settings
 * Update this file instead of modifying components when business information changes
 */

export const businessConfig = {
  // Company information
  company: {
    name: 'Awanipro digital technologies private limited',
    shortName: 'AwaniPro',
    email: 'mahesh.vaidya@awanipro.com',
    phone: '+91-9740500144',
    location: 'Bangalore, India',
    registeredOffice: '2086, Prestige Parkview, Hope Farm Whitefield Bangalore.',
    description:
      'Awanipro digital technologies private Limited is a specialized DevOps and Cloud consulting company based in Bangalore, India, with over 20 years of hands-on expertise in enterprise infrastructure and cloud technologies.',
    mission:
      'We specialize in helping organizations navigate complex cloud migrations, build robust CI/CD pipelines, implement container orchestration, and establish modern DevOps practices that improve time-to-market and operational efficiency.',
  },

  // Founder information
  founder: {
    name: 'Mahesh Vaidya',
    title: 'Founder & Director',
    email: 'mahesh.vaidya@awanipro.com',
    location: 'Bangalore, India',
    avatarSeed: 'mahesh',
    bio: 'Serial entrepreneur with proven track record. 20+ years of hands-on DevOps and cloud infrastructure experience. Ex Platform Engineer at Flipkart CPG with deep expertise in scaling cloud operations.',
    linkedinUrl: 'https://www.linkedin.com/in/gitbangalore/',
  },

  // Contact form configuration
  form: {
    subjectLine: 'New Contact Form Submission from AwaniPro Website',
    senderName: 'AwaniPro Website',
    placeholders: {
      name: 'Your name',
      email: 'your@email.com',
      message: 'Tell us about your project...',
    },
    labels: {
      name: 'Your Name',
      email: 'Email Address',
      message: 'Message',
    },
  },

  // Legal and compliance information
  legal: {
    cin: 'U63999KA2024PTC187047',
    gstin: '29ABACA4737C1ZW',
  },

  // Company statistics and key metrics
  stats: [
    {
      value: '20+',
      label: 'Years Experience',
      gradient: 'from-indigo-600 via-cyan-600 to-pink-600 dark:from-cyan-400 dark:to-indigo-400',
    },
    {
      value: '1:1',
      label: 'Personal Service',
      gradient: 'from-pink-600 via-indigo-600 to-cyan-600 dark:from-pink-400 dark:to-indigo-400',
    },
  ],

  // Blog configuration
  blog: {
    defaultAuthor: 'Mahesh Vaidya',
    sectionTitle: 'DevOps & Cloud Blog',
    sectionDescription:
      'Stay ahead of the curve with expert insights on Kubernetes, AWS, Git workflows, cloud infrastructure, and DevOps best practices. From CI/CD pipelines to cost optimization strategies, we explore the technologies and methodologies that drive modern software delivery at scale.',
    // Markdown component styling (Tailwind classes)
    markdownStyles: {
      h1: 'text-3xl font-bold my-6 text-gray-900 dark:text-white',
      h2: 'text-2xl font-bold my-5 text-gray-900 dark:text-white mt-8',
      h3: 'text-xl font-bold my-4 text-gray-900 dark:text-white',
      h4: 'text-lg font-bold my-3 text-gray-900 dark:text-white',
      p: 'my-4 leading-relaxed',
      ul: 'list-disc list-inside my-4 space-y-2',
      ol: 'list-decimal list-inside my-4 space-y-2',
      li: 'ml-4',
      blockquote: 'border-l-4 border-indigo-500 pl-4 italic my-4 text-gray-600 dark:text-gray-400',
      code_inline: 'bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono',
      code_block: 'bg-gray-100 dark:bg-gray-800 p-4 rounded block my-4 text-sm font-mono overflow-x-auto',
      pre: 'bg-gray-100 dark:bg-gray-800 p-4 rounded my-4 overflow-x-auto',
      table: 'border-collapse border border-gray-300 dark:border-gray-700 my-4 w-full',
      th: 'border border-gray-300 dark:border-gray-700 p-2 bg-gray-100 dark:bg-gray-800 text-left',
      td: 'border border-gray-300 dark:border-gray-700 p-2',
    },
  },

  // Hero section configuration
  hero: {
    headline: {
      line1: 'Transform Your Infrastructure with',
      line2: 'Expert DevOps',
      gradient: 'from-indigo-600 via-cyan-600 to-pink-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-pink-400',
    },
    subheadline: {
      boldText: 'Reduce deployment time by 80%',
      regularText:
        ' and achieve enterprise-grade reliability. 20+ years of hands-on expertise in cloud infrastructure, Kubernetes, CI/CD, and AWS/GCP administration.',
    },
    metrics: [
      {
        value: '20+',
        label: 'Years Experience',
        gradient: 'from-cyan-600 to-pink-600',
      },
      {
        value: '99.9%',
        label: 'Uptime SLA',
        gradient: 'from-pink-600 to-indigo-600',
      },
    ],
    trustBadges: [
      {
        text: 'Enterprise Ready',
        bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
        textColor: 'text-indigo-700 dark:text-indigo-300',
      },
      {
        text: 'SOC 2 Compliant',
        bgColor: 'bg-cyan-100 dark:bg-cyan-900/30',
        textColor: 'text-cyan-700 dark:text-cyan-300',
      },
    ],
    cta: {
      primary: {
        text: 'Get Free Consultation',
        action: 'scrollToContact',
      },
      secondary: {
        text: 'View Our Services',
        href: '#services',
      },
    },
    socialProof: {
      text: 'Trusted by leading companies',
      companies: ['AWS', 'GCP', 'Kubernetes', 'Docker'],
    },
    techImages: ['/media/tech-infrastructure-1.svg', '/media/tech-infrastructure-2.svg', '/media/tech-infrastructure-3.svg'],
    imageCycleInterval: 180000, // 3 minutes in milliseconds
  },

  // Navigation configuration
  navigation: {
    items: [
      { id: 'about', label: 'About' },
      { id: 'services', label: 'Services' },
      { id: 'blog', label: 'Blog' },
      { id: 'contact', label: 'Contact Us' },
    ],
  },
};
