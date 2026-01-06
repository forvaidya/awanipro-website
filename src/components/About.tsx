import { businessConfig } from '../config/business';
import { useLazyLoad } from '../hooks/useLazyLoad';

export function About() {
  const { company, founder, stats } = businessConfig;
  const { elementRef: profileImageRef, isVisible: isProfileImageVisible } = useLazyLoad<HTMLImageElement>();

  return (
    <section id="about" className="relative section-spacing bg-gray-50 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 right-0 w-96 h-96 blur-orb-orange"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 blur-orb-amber" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="gradient-text-heading-orange mb-6">About {company.shortName}</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                {company.description}
              </p>
              <p className="text-lg leading-relaxed">
                Founded by {founder.name}, a seasoned DevOps professional and Flipkart alumni, {company.shortName} brings deep technical expertise, proven execution capabilities, and a commitment to delivering solutions that drive business transformation through technology.
              </p>
              <p className="text-lg leading-relaxed">
                {company.mission}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="card-hover p-4 rounded-lg hover-glow relative z-10 group">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>{stat.value}</div>
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 rounded-2xl blur opacity-20 dark:opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl p-8 text-gray-900 dark:text-white">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">{founder.title}</h3>
              <div className="mb-6">
                <div className="relative inline-block mb-4">
                  <img
                    ref={profileImageRef}
                    srcSet={isProfileImageVisible ? "/media/mahesh-profile-sm.jpg 128w, /media/mahesh-profile-md.jpg 192w" : ""}
                    src={isProfileImageVisible ? "/media/mahesh-profile-md.jpg" : ""}
                    sizes="(max-width: 768px) 128px, 192px"
                    alt={founder.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-orange-500 group-hover:border-amber-500 transition-all duration-500 grayscale group-hover:grayscale-0"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">{founder.name}</h4>
                <p className="text-orange-600 dark:text-amber-400">{founder.title}</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                {founder.bio}
              </p>

              <div className="mt-6 pt-6 border-t border-gray-300 dark:border-slate-700">
                <p className="text-sm text-gray-700 dark:text-gray-400 mb-3">Connect with us:</p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <a href={`mailto:${founder.email}`} className="text-orange-600 dark:text-transparent dark:hover:bg-gradient-to-r dark:hover:from-amber-400 dark:hover:to-orange-400 dark:hover:bg-clip-text hover:text-orange-700 transition-all">
                    {founder.email}
                  </a>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">{founder.location}</p>
                <a
                  href={founder.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 transition-all duration-300 font-semibold"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.34c0-.77.62-1.4 1.4-1.4a1.4 1.4 0 0 1 1.4 1.4v4.34h2.5M7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 10v-8.5H5.5v8.5h3z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
