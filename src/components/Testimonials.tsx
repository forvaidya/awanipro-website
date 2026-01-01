const testimonials = [
  {
    name: "Rajesh Kumar",
    position: "CTO",
    company: "TechCorp Solutions",
    content: "AwaniPro transformed our deployment process completely. What used to take 2 weeks now happens in under 2 hours. Their Kubernetes expertise is unmatched.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh",
    rating: 5
  },
  {
    name: "Priya Sharma",
    position: "VP Engineering",
    company: "CloudScale Inc",
    content: "The team's deep understanding of AWS and GCP helped us reduce our cloud costs by 40% while improving performance. Truly enterprise-grade service.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
    rating: 5
  },
  {
    name: "Arun Patel",
    position: "Director of DevOps",
    company: "FinTech Global",
    content: "Their CI/CD implementation gave us the reliability we needed for financial services. Zero downtime deployments and complete audit trails.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=arun",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-900/20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-cyan-600 to-pink-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trusted by industry leaders for delivering exceptional DevOps and cloud solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="relative bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                  </svg>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-200 dark:border-indigo-700"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</div>
                  <div className="text-sm font-medium text-indigo-600 dark:text-cyan-400">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-100 to-cyan-100 dark:from-indigo-900/30 dark:to-cyan-900/30 rounded-full text-indigo-700 dark:text-indigo-300 font-medium">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Join 100+ satisfied clients
          </div>
        </div>
      </div>
    </section>
  );
}
