import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logo from '../assets/fitness_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // State to control navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Exercises', to: '/exercises' },
    { name: 'About Us', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  // Function to handle active link styling
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? 'text-red-500 scale-110 transition-all duration-200 font-bold'
      : 'text-white hover:text-red-500 transition-all duration-200';

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }} // Hide navbar by moving it up
      transition={{ duration: 0.3 }} // Smooth transition
      className="fixed w-full left-0 top-0 z-50 bg-red-950 py-2 px-5 md:px-14 flex justify-between items-center"
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white text-2xl font-bold"
        >
          <img src={logo} width={80} alt="logo" />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-xl">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) => getNavLinkClass({ isActive })}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Profile and Sign In / Sign Up */}
        <div className="hidden md:flex items-center space-x-5">
          <NavLink to="/login" className="text-white hover:text-red-500">
            Sign in
          </NavLink>
          <button
            type="button"
            onClick={() => navigate('/signUp')}
            className="btn"
          >
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute  top-24 left-0 right-0 bg-red-950 p-5 rounded-lg shadow-lg md:hidden"
        >
          <div className="flex flex-col items-center  space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) => getNavLinkClass({ isActive })}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}

            <div className="flex flex-col items-center space-y-4">
              <NavLink
                to="/login"
                className="text-white mb-2 hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </NavLink>
              <button
                type="button"
                onClick={() => navigate('/signUp')}
                className="btn"
              >
                Sign up
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;