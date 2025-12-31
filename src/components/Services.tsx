const services = [
  {
    title: "Version Control Systems",
    description: "Git, GitLab, GitHub setup, migration, agents/runners setup & maintenance. Branch administration, access control, pull request management.",
    icon: "📦"
  },
  {
    title: "AWS & GCP Administration",
    description: "Cloud onboarding, data residency, GDPR/HIPAA compliance. Network design, CDN, Zero Trust, core infrastructure, monitoring, and billing management.",
    icon: "☁️"
  },
  {
    title: "Kubernetes & Container Services",
    description: "AWS EKS, ECS, GKE, and on-prem Kubernetes deployment. Cluster management, helm charts, operators, and monitoring setup.",
    icon: "⚙️"
  },
  {
    title: "DNS & SSL Administration",
    description: "Cloudflare, Route 53, Google Cloud DNS management. Let's Encrypt and commercial SSL providers with automation.",
    icon: "🔒"
  },
  {
    title: "CI/CD Orchestration",
    description: "GitHub Actions, GitLab pipelines, Jenkins, ArgoCD/Flux GitOps. Complete build and deployment automation.",
    icon: "🚀"
  },
  {
    title: "GenAI & MLOps",
    description: "ML pipeline setup, training, inference, monitoring. AI agents, LLM-based applications, RAG systems.",
    icon: "🤖"
  },
  {
    title: "Programming Services",
    description: "Full-stack: Python (FastAPI, NumPy, Pandas), TypeScript, Java, Kotlin, Flutter. Linux administration & hardening.",
    icon: "💻"
  }
];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-32 bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 dark:opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 dark:opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-cyan-600 to-pink-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">Our Core Competencies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Enterprise-grade expertise across DevOps, cloud infrastructure, and modern application development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative p-6 rounded-xl border border-gray-300 dark:border-slate-700 hover:border-indigo-500 transition-all duration-300 overflow-hidden cursor-pointer bg-white dark:bg-slate-800/50"
            >
              {/* Gradient background that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300 -z-10"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 dark:group-hover:from-cyan-400 group-hover:to-pink-600 dark:group-hover:to-indigo-400 group-hover:bg-clip-text transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
