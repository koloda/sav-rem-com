
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1932&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Якісний ремонт інтер'єру та екстер'єру під ключ
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Надійно. Швидко. Професійно.
        </p>
        <Button 
          onClick={scrollToContact} 
          className="bg-company-yellow hover:bg-company-yellow/90 text-company-dark font-medium py-3 px-8 text-lg"
        >
          Отримати консультацію
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
