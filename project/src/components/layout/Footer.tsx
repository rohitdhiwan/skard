import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-primary-500 dark:text-primary-400">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
              </svg>
              <span className="text-xl font-display font-medium">Suparna Khanna</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Creative content creator passionate about sharing authentic stories and inspiring others through digital media.
            </p>
            
            {/* Social Links */}
            <div className="flex mt-6 space-x-4">
              <a href="https://www.instagram.com/suparnakhanna05/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Instagram size={18} />
              </a>
              <a href="https://www.youtube.com/@SuparnaKhanna" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Youtube size={18} />
              </a>
              <a href="mailto:suparnakhanna05@gmail.com" className="social-icon">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  Book a Session
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">Content Creation</li>
              <li className="text-gray-600 dark:text-gray-400">Social Media Management</li>
              <li className="text-gray-600 dark:text-gray-400">Brand Collaborations</li>
              <li className="text-gray-600 dark:text-gray-400">Photography</li>
              <li className="text-gray-600 dark:text-gray-400">Video Production</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-500 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400">New Delhi, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-500" />
                <span className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-500" />
                <a href="mailto:suparnakhanna05@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  suparnakhanna05@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Suparna Khanna. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-gray-600 dark:text-gray-400 flex space-x-4">
            <Link to="/privacy" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;