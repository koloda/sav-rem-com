
import { CheckCircle } from "lucide-react";
import { getAboutContent } from "../utils/contentLoader";

const AboutSection = () => {
  const aboutContent = getAboutContent();

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-dark">{aboutContent.title}</h2>
          <div className="w-20 h-1 bg-company-yellow mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
            {aboutContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutContent.advantages.map((advantage, index) => (
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
              src={aboutContent.teamImageUrl} 
              alt="Nasz zespół specjalistów" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-company-dark">{aboutContent.mission.title}</h3>
            {aboutContent.mission.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
