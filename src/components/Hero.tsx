export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-900 py-20 sm:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Professional background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Enterprise Ready
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                SOC 2 Compliant
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-cyan-800 dark:from-white dark:via-cyan-100 dark:to-indigo-100 bg-clip-text text-transparent mb-6 leading-tight">
              Transform Your Infrastructure with
              <span className="block bg-gradient-to-r from-indigo-600 via-cyan-600 to-pink-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-pink-400 bg-clip-text text-transparent">
                Expert DevOps
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              <strong className="text-gray-900 dark:text-white">Reduce deployment time by 80%</strong> and achieve enterprise-grade reliability.
              20+ years of hands-on expertise in cloud infrastructure, Kubernetes, CI/CD, and AWS/GCP administration.
            </p>

            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">99.9%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Uptime SLA</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 via-cyan-600 to-indigo-700 hover:from-indigo-700 hover:via-cyan-700 hover:to-indigo-800 text-white rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Get Free Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <a
                href="#services"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 text-center"
              >
                View Our Services
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Trusted by leading companies</p>
              <div className="flex items-center gap-6 opacity-60">
                <div className="text-gray-400 dark:text-gray-500 font-semibold text-sm">AWS</div>
                <div className="text-gray-400 dark:text-gray-500 font-semibold text-sm">GCP</div>
                <div className="text-gray-400 dark:text-gray-500 font-semibold text-sm">Kubernetes</div>
                <div className="text-gray-400 dark:text-gray-500 font-semibold text-sm">Docker</div>
              </div>
            </div>
          </div>

          {/* Hero visual - simplified to avoid build issues */}
          <div className="relative lg:block hidden">
            <div className="relative">
              <div className="w-full h-96 relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 dark:from-slate-800 dark:via-orange-900/10 dark:to-amber-900/10">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-4">DevOps</div>
                    <div className="text-xl text-gray-600 dark:text-gray-300">Expert Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
