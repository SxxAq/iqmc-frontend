import React, { useState } from "react";
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

  const translations: Record<
    string,
    {
      title: string;
      name: string;
      email: string;
      service: string;
      message: string;
      submit: string;
      success: string;
    }
  > = {
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

  const services: Record<string, { value: string; label: string }[]> = {
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

  const t = translations[language] || translations.en;
  const availableServices = services[language] || services.en;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
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
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 max-w-full w-[90vw] sm:w-[450px] animate-fadeIn">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <h3 className="text-xl">{t.title}</h3>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t.name}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t.email}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="" disabled>
                    {t.service}
                  </option>
                  {availableServices.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t.message}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 rounded-md"
                >
                  {t.submit}
                </button>
              </div>
            </form>
          ) : (
            <div className="p-6 text-center">
              <p className="text-green-600 font-semibold">{t.success}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuoteRequest;
