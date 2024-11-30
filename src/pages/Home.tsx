import { useLanguage } from "../contexts/LanguageContext";

const Home = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      welcome: "Welcome to IQMC Global",
      description:
        "Your trusted partner for quality management and certification services.",
      learnMore: "Learn More",
    },
    es: {
      welcome: "Bienvenido a IQMC Global",
      description:
        "Su socio de confianza para servicios de gestión de calidad y certificación.",
      learnMore: "Más Información",
    },
    fr: {
      welcome: "Bienvenue chez IQMC Global",
      description:
        "Votre partenaire de confiance pour les services de gestion de la qualité et de certification.",
      learnMore: "En Savoir Plus",
    },
    de: {
      welcome: "Willkommen bei IQMC Global",
      description:
        "Ihr vertrauenswürdiger Partner für Qualitätsmanagement und Zertifizierungsdienste.",
      learnMore: "Mehr Erfahren",
    },
    hi: {
      welcome: "IQMC Global में आपका स्वागत है",
      description:
        "गुणवत्ता प्रबंधन और प्रमाणीकरण सेवाओं के लिए आपका विश्वसनीय साझेदार।",
      learnMore: "और जानें",
    },
  };

  const t = translations[language];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{t.welcome}</h1>
      <p className="text-xl mb-8">{t.description}</p>
      <a
        href="/services"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        {t.learnMore}
      </a>
    </div>
  );
};

export default Home;
