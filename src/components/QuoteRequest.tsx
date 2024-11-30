import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const QuoteRequest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const translations = {
    en: {
      title: "Request a Quote",
      name: "Name",
      email: "Email",
      service: "Service",
      message: "Message",
      submit: "Submit Request",
    },
    es: {
      title: "Solicitar Presupuesto",
      name: "Nombre",
      email: "Correo electrónico",
      service: "Servicio",
      message: "Mensaje",
      submit: "Enviar Solicitud",
    },
    fr: {
      title: "Demander un Devis",
      name: "Nom",
      email: "Email",
      service: "Service",
      message: "Message",
      submit: "Envoyer la Demande",
    },
    de: {
      title: "Angebot Anfordern",
      name: "Name",
      email: "E-Mail",
      service: "Dienstleistung",
      message: "Nachricht",
      submit: "Anfrage Senden",
    },
    hi: {
      title: "कोटेशन का अनुरोध करें",
      name: "नाम",
      email: "ईमेल",
      service: "सेवा",
      message: "संदेश",
      submit: "अनुरोध भेजें",
    },
  };

  const t = translations[language];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log("Form submitted:", formData);
    // Reset form and close
    setFormData({
      name: "",
      email: "",
      service: "",
      message: "",
    });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 text-white rounded-full p-4 shadow-lg hover:bg-green-700 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
        </button>
      )}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-96 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">{t.title}</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
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
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
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
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700"
              >
                {t.service}
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a service</option>
                <option value="certification">Certification</option>
                <option value="inspection">Inspection</option>
                <option value="training">Training</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                {t.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              {t.submit}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default QuoteRequest;
