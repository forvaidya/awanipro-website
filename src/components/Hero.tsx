import React from 'react';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-white dark:bg-slate-950 section-spacing">
      {/* Subtle animated background elements - minimal Anthropic style */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 blur-orb-orange dark:opacity-10" style={{background: 'radial-gradient(circle, rgba(234, 88, 12, 0.1) 0%, transparent 70%)'}}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 blur-orb-orange dark:opacity-10" style={{animationDelay: '2s', background: 'radial-gradient(circle, rgba(234, 88, 12, 0.05) 0%, transparent 70%)'}}></div>
      </div>

      {/* Professional background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto text-center">

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Transform Your Infrastructure with Expert DevOps
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              <strong className="text-gray-900 dark:text-white">Reduce deployment time by 80%</strong> and achieve enterprise-grade reliability.
              20+ years of hands-on expertise in cloud infrastructure, Kubernetes, CI/CD, and AWS/GCP administration.
            </p>

            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-6 mb-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">99.9%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Uptime SLA</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-orange-600 dark:bg-orange-500 text-white rounded-lg font-semibold text-lg hover:bg-orange-700 dark:hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
              </button>
              <a
                href="#services"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 text-center"
              >
                View Our Services
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 max-w-md mx-auto">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Trusted by leading companies</p>
              <div className="flex items-center gap-6 opacity-60 justify-center flex-wrap">
                <div className="text-gray-400 dark:text-gray-500 font-semibold text-sm">AWS</div>
                <div className="text-gray-400 dark:text-gray-500 font-semibold text-sm">GCP</div>
                <div className="text-gray-400 dark:text-gray-500 font-semibold text-sm">Kubernetes</div>
                <div className="text-gray-400 dark:text-gray-500 font-semibold text-sm">Docker</div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
