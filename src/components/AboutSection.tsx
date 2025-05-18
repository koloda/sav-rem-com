
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const advantages = [
    { title: "10+ років досвіду", description: "Багаторічний досвід у галузі ремонту та оздоблення" },
    { title: "Гарантія на роботи", description: "Надаємо гарантію на всі види виконаних нами робіт" },
    { title: "Безкоштовна консультація", description: "Фахова консультація та оцінка вартості робіт без оплати" },
    { title: "Якісні матеріали", description: "Працюємо лише з перевіреними постачальниками якісних матеріалів" },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-dark">Про нас</h2>
          <div className="w-20 h-1 bg-company-yellow mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
            Наша компанія спеціалізується на виконанні всіх видів ремонтних та оздоблювальних робіт. 
            Ми забезпечуємо високу якість, дотримання термінів та прозору взаємодію з клієнтами на кожному етапі.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-company-lightgray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-company-yellow mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-company-dark">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1770&auto=format&fit=crop" 
              alt="Наша команда фахівців" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-company-dark">Наша місія</h3>
            <p className="text-gray-700 mb-4">
              Ми прагнемо не просто виконувати ремонтні роботи, а втілювати мрії наших клієнтів про ідеальний простір для життя та роботи.
            </p>
            <p className="text-gray-700 mb-4">
              Наші фахівці постійно підвищують кваліфікацію, опановують нові технології та матеріали, щоб пропонувати вам найкращі рішення.
            </p>
            <p className="text-gray-700">
              Ми цінуємо кожного клієнта та індивідуально підходимо до кожного проекту, враховуючи всі побажання та особливості.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
