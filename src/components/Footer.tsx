
const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Trusted Support Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Trusted Support</h3>
            <p className="text-blue-100 leading-relaxed">
              We provide secure and certified remote support services for Windows devices worldwide.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-blue-100 hover:text-white transition-colors duration-200 block py-1"
                >
                  Network Scan
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-blue-100 hover:text-white transition-colors duration-200 block py-1"
                >
                  ConnectWise
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-blue-100 hover:text-white transition-colors duration-200 block py-1"
                >
                  Call Support
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Trust Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Support & Trust</h3>
            <p className="text-blue-100 leading-relaxed">
              Our site follows best Support practices to help users find genuine, secure Windows PC support services.
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-blue-700 pt-6">
          <p className="text-center text-blue-100 text-sm">
            © 2025 Windows Remote Support — Secure Help You Can Trust
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;