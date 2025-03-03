import { useState, useEffect, useRef } from 'react';
import { FaSun, FaMoon, FaBars, FaSearch, FaPlane, FaHotel, FaInfoCircle, FaEnvelope, FaUser, FaCreditCard, FaCar, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AuthModal from './Authentication/AuthModal';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../Context/ThemeContext';

interface HeaderProps {
  onAuthClick: () => void;
}

function Header({ onAuthClick }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const darkMode = theme === 'dark';
  const toggleDarkMode = () => toggleTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showSearch && !(event.target as Element).closest('.search-container')) {
        setShowSearch(false);
      }
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (showUserMenu && userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSearch, isMenuOpen, showUserMenu]);

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
    onAuthClick();
  };

  const handleCloseAuth = () => {
    setShowAuthModal(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality here
  };

  const navItems = [
    { to: "/", icon: <FaHome />, text: "Home" },
    { to: "/about", icon: <FaInfoCircle />, text: "About" },
    { to: "/hotellisting", icon: <FaHotel />, text: "Hotels" },
    { to: "/contact-us", icon: <FaEnvelope />, text: "Contact" },
    { to: "/flightlisting", icon: <FaPlane />, text: "Flights" },
    { to: "/carlisting", icon: <FaCar />, text: "Cars" }
  ];

  const userMenuItems = [
    { to: "/accountinfo", icon: <FaUser />, text: "User Account" },
    { to: "/paymentmethod", icon: <FaCreditCard />, text: "Payment Method" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-200 bg-opacity-90 backdrop-filter backdrop-blur-lg dark:bg-gray-950 dark:bg-opacity-80'
            : 'bg-gradient-to-r from-purple-400 to-pink-500 dark:from-gray-800 dark:to-gray-900'
        } shadow-lg mb-8`}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center flex-shrink-0"
            >
              <div className="text-2xl font-bold">
                <span className="text-white dark:text-purple-400 hover:text-purple-200 dark:hover:text-purple-300 transition-colors duration-300">ExploreEase </span>
              </div>
            </motion.div>
            <div className="hidden lg:block flex-grow">
              <div className="ml-10 flex items-center justify-center space-x-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.to}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={item.to} className="text-white dark:text-gray-300 hover:bg-purple-500 hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center space-x-2">
                      {item.icon}
                      <span>{item.text}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 rounded-full bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-colors duration-300"
              >
                <FaSearch className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-colors duration-300"
              >
                {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
              </motion.button>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="p-2 rounded-full bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-colors duration-300"
                >
                  <FaUser className="w-5 h-5" />
                </button>
                {showUserMenu && (
                  <motion.div
                    ref={userMenuRef}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10"
                  >
                    {userMenuItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                      >
                        <span className="flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.text}</span>
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAuthClick("signup")}
                className="bg-white text-purple-600 px-4 py-2 rounded-md hover:bg-purple-100 transition-colors duration-300 shadow-md"
              >
                Sign up
              </motion.button>
            </div>
            <div className="lg:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-300"
              >
                <span className="sr-only">Open main menu</span>
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white dark:bg-gray-800 rounded-b-lg shadow-lg overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <Link key={item.to} to={item.to} className="text-gray-700 dark:text-gray-300 hover:bg-purple-500 hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 flex items-center space-x-2">
                    {item.icon}
                    <span>{item.text}</span>
                  </Link>
                ))}
                {userMenuItems.map((item) => (
                  <Link key={item.to} to={item.to} className="text-gray-700 dark:text-gray-300 hover:bg-purple-500 hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 flex items-center space-x-2">
                    {item.icon}
                    <span>{item.text}</span>
                  </Link>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-300 dark:border-gray-700">
                <div className="flex items-center justify-between px-5 space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAuthClick("signup")}
                    className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300 w-full text-center"
                  >
                    Sign Up
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-50 px-4 py-4"
          >
            <form onSubmit={handleSearch} className="search-container max-w-3xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:bg-opacity-20 text-gray-900 dark:text-gray-100"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors duration-300"
                >
                  <FaSearch className="w-4 h-4" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAuthModal && (
          <AuthModal
            mode={authMode}
            onClose={handleCloseAuth}
            onSwitchMode={(mode) => setAuthMode(mode)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
