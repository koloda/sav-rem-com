
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Helena Kowalska',
      role: 'Właścicielka mieszkania',
      text: "Jestem bardzo zadowolona z jakości remontu naszego mieszkania. Wszystkie prace zostały wykonane na czas i na wysokim poziomie. Szczególnie imponująca jest dbałość o detale i gotowość do pomocy przy wyborze materiałów.",
      avatar: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?q=80&w=1160&auto=format&fit=crop',
    },
    {
      name: 'Jan Nowak',
      role: 'Dyrektor centrum biurowego',
      text: "Współpraca z firmą była bardzo przyjemna. Wyremontowali nasze biuro w rekordowo krótkim czasie, co pozwoliło nam szybko wrócić do pracy. Jakość prac na najwyższym poziomie!",
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop',
    },
    {
      name: 'Maria Wiśniewska',
      role: 'Właścicielka sklepu',
      text: "Doskonała praca przy remoncie lokalu handlowego. Zespół pracował szybko i sprawnie. Projekt wnętrza przerósł moje oczekiwania. Będę polecać was wszystkim znajomym!",
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=922&auto=format&fit=crop',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-company-lightgray">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-dark">Opinie</h2>
          <div className="w-20 h-1 bg-company-yellow mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Co mówią o nas nasi klienci, którzy już skorzystali z naszych usług 
            i byli zadowoleni z rezultatu.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-md p-8 md:p-10">
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-company-yellow">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-700 text-lg md:text-xl italic mb-6">
                "{testimonials[currentIndex].text}"
              </p>
              <h3 className="text-xl font-bold text-company-dark">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-600">{testimonials[currentIndex].role}</p>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-gray-200 hover:bg-company-yellow transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} className="text-company-dark" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setAutoplay(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-company-yellow' : 'bg-gray-300'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
              
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-gray-200 hover:bg-company-yellow transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} className="text-company-dark" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
