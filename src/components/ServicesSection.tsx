
import { Home, Wrench, CheckCircle, Edit, Image, Map } from "lucide-react";

const ServicesSection = () => {
  const services = [
    { 
      title: "Remonty mieszkań", 
      description: "Kompleksowe remonty pomieszczeń mieszkalnych pod klucz",
      icon: <Home className="w-10 h-10 text-company-yellow mb-4" />
    },
    { 
      title: "Wykańczanie elewacji", 
      description: "Zewnętrzne prace związane z ocieplaniem i dekorowaniem elewacji budynków",
      icon: <Image className="w-10 h-10 text-company-yellow mb-4" />
    },
    { 
      title: "Układanie płytek", 
      description: "Profesjonalne układanie płytek ceramicznych, mozaiki i gresu",
      icon: <Map className="w-10 h-10 text-company-yellow mb-4" />
    },
    { 
      title: "Prace malarskie", 
      description: "Wysokiej jakości malowanie, szpachlowanie i gruntowanie powierzchni",
      icon: <Edit className="w-10 h-10 text-company-yellow mb-4" />
    },
    { 
      title: "Montaż płyt kartonowo-gipsowych", 
      description: "Tworzenie ścianek działowych, sufitów i innych konstrukcji z płyt gipsowo-kartonowych",
      icon: <CheckCircle className="w-10 h-10 text-company-yellow mb-4" />
    },
    { 
      title: "Usługi dodatkowe", 
      description: "Konsultacje, projekty, dobór materiałów, zakupy",
      icon: <Wrench className="w-10 h-10 text-company-yellow mb-4" />
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-dark">Nasze usługi</h2>
          <div className="w-20 h-1 bg-company-yellow mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Oferujemy szeroki zakres usług remontowych i wykończeniowych. 
            Wykonujemy zarówno kompleksowe projekty "pod klucz", jak i pojedyncze rodzaje prac.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-company-dark">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
