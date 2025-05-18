
import { Home, Wrench, CheckCircle, Edit, Image, Map } from "lucide-react";

const ServicesSection = () => {
  const services = [
    { 
      title: "Ремонт квартир", 
      description: "Комплексний ремонт житлових приміщень під ключ",
      icon: <Home className="w-10 h-10 text-company-yellow mb-4" />
    },
    { 
      title: "Оздоблення фасадів", 
      description: "Зовнішні роботи з утеплення та декорування фасадів будівель",
      icon: <Image className="w-10 h-10 text-company-yellow mb-4" />
    },
    { 
      title: "Укладання плитки", 
      description: "Професійне укладання керамічної плитки, мозаїки та керамограніту",
      icon: <Map className="w-10 h-10 text-company-yellow mb-4" />
    },
    { 
      title: "Малярні роботи", 
      description: "Якісне фарбування, шпаклювання, грунтування поверхонь",
      icon: <Edit className="w-10 h-10 text-company-yellow mb-4" />
    },
    { 
      title: "Монтаж гіпсокартону", 
      description: "Створення перегородок, стель та інших конструкцій з гіпсокартону",
      icon: <CheckCircle className="w-10 h-10 text-company-yellow mb-4" />
    },
    { 
      title: "Додаткові послуги", 
      description: "Консультації, дизайн-проєкти, підбір матеріалів, закупівля",
      icon: <Wrench className="w-10 h-10 text-company-yellow mb-4" />
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-dark">Наші послуги</h2>
          <div className="w-20 h-1 bg-company-yellow mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Пропонуємо широкий спектр послуг з ремонту та оздоблення примiщень. 
            Виконуємо як комплексні проекти "під ключ", так і окремі види робіт.
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
