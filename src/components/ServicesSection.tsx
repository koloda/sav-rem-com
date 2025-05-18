
import { getServicesContent } from "../utils/contentLoader";
import { getIcon } from "../utils/icons";

const ServicesSection = () => {
  const servicesContent = getServicesContent();

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-dark">{servicesContent.title}</h2>
          <div className="w-20 h-1 bg-company-yellow mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            {servicesContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesContent.services.map((service, index) => (
            <div 
              key={index} 
              className="service-card bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="flex justify-center">
                {getIcon(service.icon as any)}
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
