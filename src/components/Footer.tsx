export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h4 className="font-bold mb-4">AwaniPro</h4>
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
              <a href="mailto:mahesh.vaidya@awanipro.com" className="hover:text-white transition">
                mahesh.vaidya@awanipro.com
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              Bangalore, India
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                CIN:{' '}
                <a 
                  href="registration-certificate.pdf" 
                  download 
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  U63999KA2024PTC187047
                </a>
              </li>
              <li>
                GSTIN:{' '}
                <a 
                  href="gst-certificate.pdf" 
                  download 
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  29ABACA4737C1ZW
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} AwaniPro Private Limited. All rights reserved.</p>
          <p className="mt-2">Built with Hono + Vite for Cloudflare Pages</p>
        </div>
      </div>
    </footer>
  );
}
