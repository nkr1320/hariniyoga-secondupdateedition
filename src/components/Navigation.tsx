import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (destination: string) => {
    if (destination.startsWith('/')) {
      navigate(destination);
    } else if (destination === 'hero') {
      navigate('/');
    } else {
      // For about, why-site, donate, contact - navigate to individual pages
      if (destination === 'about') {
        navigate('/about');
      } else if (destination === 'why-site') {
        navigate('/why-site');
      } else if (destination === 'donate') {
        navigate('/donate');
      } else if (destination === 'contact') {
        navigate('/contact');
      } else {
        // For other sections, scroll if on home page
        if (window.location.pathname !== '/') {
          navigate('/');
          // Wait for navigation then scroll
          setTimeout(() => {
            document.getElementById(destination)?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          document.getElementById(destination)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', destination: 'hero' },
    { label: 'About', destination: 'about' },
    { label: 'Why This Site', destination: 'why-site' },
    { label: 'Classes & Workshops', destination: '/classes' },
    { label: 'Articles', destination: '/articles' },
    { label: 'Past Events', destination: '/events' },
    { label: 'Recordings', destination: '/recordings' },
    { label: 'Donate', destination: 'donate' },
    { label: 'Contact', destination: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('hero')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-krishna-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">ॐ</span>
            </div>
            <span className={`font-bold text-xl tracking-wide transition-colors ${
              isScrolled ? 'text-dharma-brown' : 'text-white'
            }`}>
              HARINI YOGA
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.destination)}
                className={`font-medium transition-colors hover:text-krishna-primary text-xs px-2 py-1 ${
                  isScrolled ? 'text-dharma-brown' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => handleNavigation('/offers')}
              className="btn-divine ml-2"
              size="sm"
            >
              Offers
            </Button>
          </div>

          {/* Tablet Menu with Dropdown */}
          <div className="hidden lg:flex xl:hidden items-center space-x-3">
            {navItems.slice(0, 4).map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.destination)}
                className={`font-medium transition-colors hover:text-krishna-primary text-sm ${
                  isScrolled ? 'text-dharma-brown' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="relative group">
              <button className={`font-medium transition-colors hover:text-krishna-primary text-sm ${
                isScrolled ? 'text-dharma-brown' : 'text-white'
              }`}>
                More ↓
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {navItems.slice(4).map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavigation(item.destination)}
                    className="block w-full text-left px-4 py-2 text-dharma-brown hover:text-krishna-primary transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <Button 
              onClick={() => handleNavigation('/offers')}
              className="btn-divine"
              size="sm"
            >
              Offers
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-dharma-brown' : 'text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.destination)}
                className="block w-full text-left px-4 py-2 text-dharma-brown hover:text-krishna-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button 
                onClick={() => handleNavigation('/offers')}
                className="btn-divine w-full"
                size="sm"
              >
                Offers
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;