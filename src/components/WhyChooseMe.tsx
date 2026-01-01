export function WhyChooseMe() {
  const advantages = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast",
      description: "Quick response times, rapid onboarding, and fast problem resolution. No waiting for team meetings or approvals.",
      highlight: "24-hour response guarantee"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Highly Adaptive",
      description: "Quickly learn your tech stack, understand your business needs, and adapt solutions to fit your unique requirements.",
      highlight: "Fast skill acquisition"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Truly Agile",
      description: "Iterative approach, continuous feedback, and rapid adjustments. No lengthy planning cycles or rigid processes.",
      highlight: "Flexible engagement"
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-slate-900 dark:to-indigo-900/20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-cyan-600 to-pink-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
            Why Choose a One-Person Consultancy?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Direct access, immediate responses, and zero bureaucracy. Get enterprise-grade DevOps expertise without the overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, idx) => (
            <div
              key={idx}
              className="relative bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 group"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{advantage.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{advantage.description}</p>
              
              {/* Highlight badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-indigo-100 to-cyan-100 dark:from-indigo-900/30 dark:to-cyan-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {advantage.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Direct Access Promise */}
        <div className="bg-gradient-to-r from-indigo-600 via-cyan-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Direct Access Advantage</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Work directly with a 20+ year DevOps expert, no communication delays, no lost context.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">No Delays</div>
              <div className="opacity-80">Direct decision making</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">No Overhead</div>
              <div className="opacity-80">Just pure expertise</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">Boundless Innovation</div>
              <div className="opacity-80">Focus on results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
