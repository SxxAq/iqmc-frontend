import { useLanguage } from "../contexts/LanguageContext";

const Services = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Our Services",
      certification: {
        title: "Certification",
        description:
          "We provide various certification services to help your business meet international standards.",
      },
      inspection: {
        title: "Inspection",
        description:
          "Our inspection services ensure your products and processes meet quality and safety requirements.",
      },
      training: {
        title: "Training",
        description:
          "We offer comprehensive training programs to enhance your team's skills and knowledge.",
      },
      consulting: {
        title: "Consulting",
        description:
          "Our expert consultants provide guidance to improve your business processes and efficiency.",
      },
    },
    es: {
      title: "Nuestros Servicios",
      certification: {
        title: "Certificación",
        description:
          "Proporcionamos varios servicios de certificación para ayudar a su negocio a cumplir con los estándares internacionales.",
      },
      inspection: {
        title: "Inspección",
        description:
          "Nuestros servicios de inspección aseguran que sus productos y procesos cumplan con los requisitos de calidad y seguridad.",
      },
      training: {
        title: "Formación",
        description:
          "Ofrecemos programas de formación completos para mejorar las habilidades y conocimientos de su equipo.",
      },
      consulting: {
        title: "Consultoría",
        description:
          "Nuestros consultores expertos proporcionan orientación para mejorar sus procesos de negocio y eficiencia.",
      },
    },
    fr: {
      title: "Nos Services",
      certification: {
        title: "Certification",
        description:
          "Nous fournissons divers services de certification pour aider votre entreprise à répondre aux normes internationales.",
      },
      inspection: {
        title: "Inspection",
        description:
          "Nos services d'inspection garantissent que vos produits et processus répondent aux exigences de qualité et de sécurité.",
      },
      training: {
        title: "Formation",
        description:
          "Nous proposons des programmes de formation complets pour améliorer les compétences et les connaissances de votre équipe.",
      },
      consulting: {
        title: "Conseil",
        description:
          "Nos consultants experts fournissent des conseils pour améliorer vos processus d'affaires et votre efficacité.",
      },
    },
    de: {
      title: "Unsere Dienstleistungen",
      certification: {
        title: "Zertifizierung",
        description:
          "Wir bieten verschiedene Zertifizierungsdienste an, um Ihrem Unternehmen zu helfen, internationale Standards zu erfüllen.",
      },
      inspection: {
        title: "Inspektion",
        description:
          "Unsere Inspektionsdienste stellen sicher, dass Ihre Produkte und Prozesse die Qualitäts- und Sicherheitsanforderungen erfüllen.",
      },
      training: {
        title: "Schulung",
        description:
          "Wir bieten umfassende Schulungsprogramme an, um die Fähigkeiten und Kenntnisse Ihres Teams zu verbessern.",
      },
      consulting: {
        title: "Beratung",
        description:
          "Unsere Experten beraten Sie, um Ihre Geschäftsprozesse und Effizienz zu verbessern.",
      },
    },
    hi: {
      title: "हमारी सेवाएं",
      certification: {
        title: "प्रमाणीकरण",
        description:
          "हम आपके व्यवसाय को अंतरराष्ट्रीय मानकों को पूरा करने में मदद करने के लिए विभिन्न प्रमाणीकरण सेवाएं प्रदान करते हैं।",
      },
      inspection: {
        title: "निरीक्षण",
        description:
          "हमारी निरीक्षण सेवाएं सुनिश्चित करती हैं कि आपके उत्पाद और प्रक्रियाएं गुणवत्ता और सुरक्षा आवश्यकताओं को पूरा करती हैं।",
      },
      training: {
        title: "प्रशिक्षण",
        description:
          "हम आपकी टीम के कौशल और ज्ञान को बढ़ाने के लिए व्यापक प्रशिक्षण कार्यक्रम प्रदान करते हैं।",
      },
      consulting: {
        title: "परामर्श",
        description:
          "हमारे विशेषज्ञ सलाहकार आपके व्यावसायिक प्रक्रियाओं और दक्षता में सुधार के लिए मार्गदर्शन प्रदान करते हैं।",
      },
    },
  };

  const t = translations[language];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{t.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(t).map(([key, value]) => {
          if (key !== "title") {
            return (
              <div key={key} className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">{value.title}</h2>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Services;
