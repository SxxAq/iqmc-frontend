import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { FileText, X } from "lucide-react";

const QuoteRequest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const translations = {
    en: {
      title: "Request a Consultation",
      name: "Full Name",
      email: "Email Address",
      service: "Service Interest",
      message: "Additional Details",
      submit: "Request Consultation",
      success: "Thank you! We'll contact you soon.",
    },
    es: {
      title: "Solicitar Consulta",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      service: "Servicio de Interés",
      message: "Detalles Adicionales",
      submit: "Solicitar Consulta",
      success: "¡Gracias! Nos pondremos en contacto pronto.",
    },
    fr: {
      title: "Demander une Consultation",
      name: "Nom Complet",
      email: "Adresse E-mail",
      service: "Service Intéressé",
      message: "Détails Supplémentaires",
      submit: "Demander Consultation",
      success: "Merci ! Nous vous contacterons bientôt.",
    },
    de: {
      title: "Beratung Anfordern",
      name: "Vollständiger Name",
      email: "E-Mail-Adresse",
      service: "Interessengebiet",
      message: "Zusätzliche Details",
      submit: "Beratung Anfordern",
      success: "Vielen Dank! Wir melden uns bald.",
    },
    hi: {
      title: "परामर्श का अनुरोध करें",
      name: "पूरा नाम",
      email: "ईमेल पता",
      service: "सेवा रुचि",
      message: "अतिरिक्त विवरण",
      submit: "परामर्श अनुरोध करें",
      success: "धन्यवाद! हम जल्द ही संपर्क करेंगे।",
    },
  };

  const services = {
    en: [
      { value: "certification", label: "Certification Services" },
      { value: "inspection", label: "Professional Inspection" },
      { value: "training", label: "Expert Training Programs" },
    ],
    es: [
      { value: "certification", label: "Servicios de Certificación" },
      { value: "inspection", label: "Inspección Profesional" },
      { value: "training", label: "Programas de Capacitación" },
    ],
    fr: [
      { value: "certification", label: "Services de Certification" },
      { value: "inspection", label: "Inspection Professionnelle" },
      { value: "training", label: "Programmes de Formation" },
    ],
    de: [
      { value: "certification", label: "Zertifizierungsservices" },
      { value: "inspection", label: "Professionelle Inspektion" },
      { value: "training", label: "Schulungsprogramme" },
    ],
    hi: [
      { value: "certification", label: "प्रमाणपत्र सेवाएं" },
      { value: "inspection", label: "पेशेवर निरीक्षण" },
      { value: "training", label: "विशेषज्ञ प्रशिक्षण कार्यक्रम" },
    ],
  };

  const t = translations[language];
  const availableServices = services[language];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
      setIsOpen(false);
    }, 3000);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full p-4 shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <FileText className="w-7 h-7" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-[450px] animate-fadeIn">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <h3 className="font-semibold text-lg">{t.title}</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:rotate-90 transition-transform"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {submitted ? (
            <div className="p-6 text-center">
              <div className="text-green-600 text-2xl mb-4">✓</div>
              <p className="text-gray-700">{t.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-50 border-none rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-300 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-50 border-none rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-300 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t.service}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-50 border-none rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-300 transition-all"
                >
                  <option value="">{t.service}</option>
                  {availableServices.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-gray-50 border-none rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-300 transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-all"
              >
                {t.submit}
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default QuoteRequest;
