export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">About AwaniPro</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                AwaniPro Private Limited is a specialized DevOps and Cloud consulting company based in Bangalore, India, with over 20 years of hands-on expertise in enterprise infrastructure and cloud technologies.
              </p>
              <p className="text-lg leading-relaxed">
                Founded by Mahesh Vaidya, a seasoned DevOps professional and former Flipkart alumni, AwaniPro brings deep technical expertise, proven execution capabilities, and a commitment to delivering solutions that drive business transformation through technology.
              </p>
              <p className="text-lg leading-relaxed">
                We specialize in helping organizations navigate complex cloud migrations, build robust CI/CD pipelines, implement container orchestration, and establish modern DevOps practices that improve time-to-market and operational efficiency.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">20+</div>
                <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100+</div>
                <p className="text-gray-600 dark:text-gray-300">Projects Delivered</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Founder & Director</h3>
            <div className="mb-6">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=mahesh" 
                alt="Mahesh Vaidya" 
                className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-white"
              />
              <h4 className="text-xl font-bold">Mahesh Vaidya</h4>
              <p className="text-blue-100">Founder & Director</p>
            </div>
            <p className="text-blue-50 leading-relaxed">
              Serial entrepreneur with proven track record. 20+ years of hands-on DevOps and cloud infrastructure experience. Former Flipkart alumni with deep expertise in scaling cloud operations.
            </p>

            <div className="mt-6 pt-6 border-t border-blue-400">
              <p className="text-sm text-blue-100 mb-2">Connect with us:</p>
              <p className="text-blue-50">
                <a href="mailto:mahesh.vaidya@awanipro.com" className="hover:text-white transition">
                  mahesh.vaidya@awanipro.com
                </a>
              </p>
              <p className="text-blue-50">Bangalore, India</p>
              <p className="text-blue-50 mt-3">
                <a 
                  href="https://www.linkedin.com/in/gitbangalore/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-white transition"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.34c0-.77.62-1.4 1.4-1.4a1.4 1.4 0 0 1 1.4 1.4v4.34h2.5M7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 10v-8.5H5.5v8.5h3z"/>
                  </svg>
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
