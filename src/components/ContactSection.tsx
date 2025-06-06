
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Wiadomość wysłana",
        description: "Skontaktujemy się z Tobą wkrótce.",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        phone: '',
        message: '',
      });
      
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-dark">Kontakt</h2>
          <div className="w-20 h-1 bg-company-yellow mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Skontaktuj się z nami, aby uzyskać konsultację lub zamówić nasze usługi. 
            Odpowiemy na wszystkie Twoje pytania.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-company-dark">Nasze dane kontaktowe</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-company-yellow p-3 rounded-full mr-4">
                  <Phone className="w-5 h-5 text-company-dark" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-company-dark">Telefon</h4>
                  <a href="tel:+48123456789" className="text-gray-600 hover:text-company-yellow transition-colors">
                    +48 123 456 789
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-company-yellow p-3 rounded-full mr-4">
                  <Mail className="w-5 h-5 text-company-dark" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-company-dark">Email</h4>
                  <a href="mailto:info@sav-rem.pl" className="text-gray-600 hover:text-company-yellow transition-colors">
                    info@sav-rem.pl
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-company-yellow p-3 rounded-full mr-4">
                  <MapPin className="w-5 h-5 text-company-dark" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-company-dark">Adres</h4>
                  <p className="text-gray-600">
                    Warszawa, ul. Budowlana 15, biuro 301
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 aspect-[4/3] w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35439853323!2d20.896111675664006!3d52.23303857775275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1716163069541!5m2!1spl!2spl" 
                className="w-full h-full border-0 rounded-lg shadow-sm" 
                loading="lazy"
                title="Mapa lokalizacji biura"
              ></iframe>
            </div>
          </div>

          <div className="bg-company-lightgray p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-company-dark">Napisz do nas</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Twoje imię *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Wpisz swoje imię"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Numer telefonu *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Wpisz swój numer telefonu"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Wiadomość *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-none"
                  rows={5}
                  placeholder="Opisz, czego potrzebujesz"
                />
              </div>
              
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-company-yellow hover:bg-company-yellow/90 text-company-dark font-medium py-6"
              >
                {loading ? 'Wysyłanie...' : 'Wyślij'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
