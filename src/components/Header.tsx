
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { title: "Про нас", id: "about" },
    { title: "Послуги", id: "services" },
    { title: "Портфоліо", id: "portfolio" },
    { title: "Відгуки", id: "testimonials" },
    { title: "Контакти", id: "contact" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className={`text-company-dark text-xl md:text-2xl font-bold ${scrolled ? '' : 'md:text-white'}`}>
            БУДРЕМ<span className="text-company-yellow">СЕРВІС</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => scrollToSection(link.id)} 
              className={`font-medium hover:text-company-yellow transition-colors ${scrolled ? 'text-company-dark' : 'text-white'}`}
            >
              {link.title}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-company-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white p-4 flex flex-col mt-16">
            <div className="flex flex-col space-y-4 py-8">
              {navLinks.map((link) => (
                <button 
                  key={link.id} 
                  onClick={() => scrollToSection(link.id)} 
                  className="text-company-dark font-medium text-lg py-2 hover:text-company-yellow transition-colors"
                >
                  {link.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
