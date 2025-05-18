
import { useState } from 'react';
import { Search } from 'lucide-react';
import LightboxModal from './LightboxModal';

const PortfolioSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const portfolioImages = [
    "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90f1?q=80&w=1760&auto=format&fit=crop", // kitchen
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1887&auto=format&fit=crop", // living room
    "https://images.unsplash.com/photo-1595514535415-8fec1f92a3c8?q=80&w=1939&auto=format&fit=crop", // bathroom
    "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1770&auto=format&fit=crop", // façade
    "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1770&auto=format&fit=crop", // bedroom
    "https://images.unsplash.com/photo-1604014438553-1cd5e2f44d56?q=80&w=1770&auto=format&fit=crop", // home office
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioImages.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + portfolioImages.length) % portfolioImages.length);
  };

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-dark">Портфоліо</h2>
          <div className="w-20 h-1 bg-company-yellow mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Приклади наших робіт, які ми виконали на замовлення наших клієнтів. 
            Кожен проект є унікальним та виконаним з урахуванням всіх побажань замовника.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <div 
              key={index} 
              className="portfolio-item rounded-lg shadow-sm overflow-hidden cursor-pointer aspect-[4/3]"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image} 
                alt={`Приклад роботи ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="overlay">
                <div className="text-white p-2 rounded-full bg-company-yellow">
                  <Search className="text-company-dark" size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <LightboxModal
          images={portfolioImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={goToNextImage}
          onPrev={goToPrevImage}
        />
      )}
    </section>
  );
};

export default PortfolioSection;
