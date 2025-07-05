
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['about', 'experience', 'skills', 'portfolio', 'education'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-primary transition-colors duration-200 capitalize font-medium"
              >
                {item === 'about' ? 'Sobre' : 
                 item === 'experience' ? 'Experiência' :
                 item === 'skills' ? 'Habilidades' :
                 item === 'portfolio' ? 'Portfólio' : 'Educação'}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-gray-800 rounded-lg shadow-lg">
            {['about', 'experience', 'skills', 'portfolio', 'education'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-primary hover:bg-gray-700 transition-colors duration-200 capitalize"
              >
                {item === 'about' ? 'Sobre' : 
                 item === 'experience' ? 'Experiência' :
                 item === 'skills' ? 'Habilidades' :
                 item === 'portfolio' ? 'Portfólio' : 'Educação'}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
