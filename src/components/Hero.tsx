export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 sm:py-32">
      <div className="container-max">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Expert DevOps & Cloud Solutions
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
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
