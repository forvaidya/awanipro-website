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
    <section id="services" className="py-20 sm:py-32 bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Core Competencies</h2>
          <p className="section-subtitle">
            Enterprise-grade expertise across DevOps, cloud infrastructure, and modern application development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="card p-6 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
