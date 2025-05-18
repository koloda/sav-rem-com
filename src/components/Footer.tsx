
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-company-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">
              SAV<span className="text-company-yellow">-REM</span>
            </h2>
            <p className="text-gray-400">
              Wysokiej jakości remonty wnętrz i elewacji
            </p>
          </div>
          
          <div className="text-center mb-6 md:mb-0 flex flex-col items-center">
            <p className="text-gray-400 mb-2">
              © {new Date().getFullYear()} SAV-REM. Wszelkie prawa zastrzeżone
            </p>
            <Link 
              to="/admin" 
              className="text-company-yellow hover:text-white text-sm transition-colors"
            >
              Panel administracyjny
            </Link>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-company-yellow text-company-dark p-3 rounded-full hover:bg-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
