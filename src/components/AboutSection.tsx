
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const advantages = [
    { title: "10+ lat doświadczenia", description: "Wieloletnie doświadczenie w branży remontowej i wykończeniowej" },
    { title: "Gwarancja na prace", description: "Zapewniamy gwarancję na wszystkie wykonane przez nas prace" },
    { title: "Bezpłatna konsultacja", description: "Profesjonalna konsultacja i wycena prac bez opłat" },
    { title: "Wysokiej jakości materiały", description: "Współpracujemy tylko ze sprawdzonymi dostawcami jakościowych materiałów" },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-dark">O nas</h2>
          <div className="w-20 h-1 bg-company-yellow mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
            Nasza firma specjalizuje się w wykonywaniu wszelkiego rodzaju prac remontowych i wykończeniowych. 
            Zapewniamy wysoką jakość, dotrzymywanie terminów i przejrzystą komunikację z klientem na każdym etapie.
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
              alt="Nasz zespół specjalistów" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-company-dark">Nasza misja</h3>
            <p className="text-gray-700 mb-4">
              Dążymy nie tylko do wykonywania prac remontowych, ale do realizacji marzeń naszych klientów o idealnej przestrzeni do życia i pracy.
            </p>
            <p className="text-gray-700 mb-4">
              Nasi specjaliści nieustannie podnoszą swoje kwalifikacje, poznają nowe technologie i materiały, aby oferować najlepsze rozwiązania.
            </p>
            <p className="text-gray-700">
              Cenimy każdego klienta i indywidualnie podchodzimy do każdego projektu, uwzględniając wszystkie życzenia i specyfikacje.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
