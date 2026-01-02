import { config } from '../config';
import { businessConfig } from '../config/business';
import { getVersionInfo } from '../utils/version';

export function Footer() {
  const { company, legal } = businessConfig;
  const buildInfo = getVersionInfo();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h4 className="font-bold mb-4">{company.shortName}</h4>
            <p className="text-gray-400 text-sm">
              Expert DevOps & Cloud Consulting for enterprise-grade infrastructure.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition">Cloud Solutions</a></li>
              <li><a href="#services" className="hover:text-white transition">DevOps</a></li>
              <li><a href="#services" className="hover:text-white transition">Kubernetes</a></li>
              <li><a href="#services" className="hover:text-white transition">CI/CD</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">
              <a href={`mailto:${company.email}`} className="hover:text-white transition">
                {company.email}
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              {company.location}
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href={config.assets.registrationCertificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Registration Certificate
                </a>
              </li>
              <li>
                <a
                  href={config.assets.gstCertificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  GST Certificate
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Responsive layout */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
            {/* Copyright and Tech Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-gray-400 text-xs sm:text-sm">
              <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} AwaniPro Private Limited. All rights reserved.</p>
              <p className="hidden sm:inline">Built with Hono + Vite for Cloudflare Pages</p>
              <a
                href={buildInfo.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Built: ${new Date(buildInfo.timestamp).toLocaleString()}`}
                className="text-blue-400 hover:text-blue-300 transition font-mono text-xs"
              >
                {buildInfo.sha}
              </a>
            </div>

            {/* Legal IDs - Responsive stacking */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <span className="font-medium">CIN:</span>
                <a
                  href={config.assets.registrationCertificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition whitespace-nowrap text-xs sm:text-sm"
                >
                  {legal.cin}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">GSTIN:</span>
                <a
                  href={config.assets.gstCertificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition whitespace-nowrap text-xs sm:text-sm"
                >
                  {legal.gstin}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
