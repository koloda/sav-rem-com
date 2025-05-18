
import { useState, useEffect } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

interface LightboxModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const LightboxModal = ({ 
  images, 
  currentIndex, 
  onClose,
  onNext,
  onPrev
}: LightboxModalProps) => {
  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent scrolling

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-white"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>
      
      <button 
        onClick={onPrev} 
        className="absolute left-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
        aria-label="Previous image"
      >
        <ArrowLeft size={24} />
      </button>
      
      <div className="w-full h-full flex items-center justify-center p-4">
        <img 
          src={images[currentIndex]} 
          alt={`Portfolio item ${currentIndex + 1}`} 
          className="max-w-full max-h-full object-contain"
        />
      </div>
      
      <button 
        onClick={onNext} 
        className="absolute right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
        aria-label="Next image"
      >
        <ArrowRight size={24} />
      </button>
      
      <div className="absolute bottom-4 text-white text-sm font-medium">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default LightboxModal;
