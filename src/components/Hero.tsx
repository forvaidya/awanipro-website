export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900 dark:to-indigo-900 py-20 sm:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-cyan-600 to-pink-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-pink-400 bg-clip-text text-transparent mb-6 leading-tight">
            Expert DevOps & Cloud Solutions
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            With 20+ years of hands-on expertise in cloud infrastructure, Kubernetes, CI/CD, and AWS/GCP administration, AwaniPro delivers enterprise-grade solutions tailored to your unique business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="btn-primary"
            >
              Get Started
            </button>
            <a
              href="#about"
              className="btn-secondary"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
