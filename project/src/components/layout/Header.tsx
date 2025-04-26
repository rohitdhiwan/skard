import { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';

interface HeaderProps {
  scrollProgress: number;
}

const Header = ({ scrollProgress }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Check if page is scrolled for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-black dark:text-white">
            <span className="text-3xl md:text-4xl calligraphic-text font-bold tracking-tight">Suparna Khanna</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
              About
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
              Contact
            </NavLink>
            <NavLink to="/booking" className="btn-primary ml-3 py-2 px-4 rounded-lg">
              Book Now
            </NavLink>

            {/* Social Icons */}
            <div className="flex items-center ml-4 gap-2">
              <a href="https://www.instagram.com/suparnakhanna05/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@SuparnaKhanna" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme} 
              className="p-2 ml-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-3">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none" 
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <motion.div 
        className="h-0.5 bg-primary-500 absolute bottom-0 left-0"
        style={{ width: `${scrollProgress * 100}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress * 100}%` }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-3">
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
                About
              </NavLink>
              <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
                Portfolio
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
                Contact
              </NavLink>
              <NavLink to="/booking" className="btn-primary text-center py-2 rounded-lg">
                Book Now
              </NavLink>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                <a href="https://www.instagram.com/suparnakhanna05/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://www.youtube.com/@SuparnaKhanna" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;