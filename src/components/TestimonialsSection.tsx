
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getTestimonialsContent } from "../utils/contentLoader";

const TestimonialsSection = () => {
  const testimonialsContent = getTestimonialsContent();
  const { testimonials } = testimonialsContent;
  
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-dark">{testimonialsContent.title}</h2>
          <div className="w-20 h-1 bg-company-yellow mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            {testimonialsContent.description}
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
