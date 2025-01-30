import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">About</h3>
            <p className="text-sm">
              We provide high-quality content and services to help you grow and
              learn.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-blue-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-blue-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-blue-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Facebook className="hover:text-blue-600" />
              <Twitter className="hover:text-blue-400" />
              <Instagram className="hover:text-pink-700" />
              <Linkedin className="hover:text-blue-500" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
