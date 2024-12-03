import { createIntl, createIntlCache, IntlShape } from "react-intl";
import { useLanguage } from "./contexts/LanguageContext";

const cache = createIntlCache();

const messages: { [key: string]: { [key: string]: string } } = {
  en: {
    homeTitle: "Home",
    aboutUsTitle: "About Us",
    ourServicesTitle: "Our Services",
    businessIntegrityTitle: "Business Integrity",
    ourPoliciesTitle: "Our Policies",
    newsTitle: "News",
    contactUsTitle: "Contact Us",
    applicationForm: "Application Form",
    cTpat: "C-TPAT",
    codeOfConduct: "Code Of Conduct",
    // Add more translations as needed
  },
  es: {
    homeTitle: "Inicio",
    aboutUsTitle: "Sobre Nosotros",
    ourServicesTitle: "Nuestros Servicios",
    businessIntegrityTitle: "Integridad Empresarial",
    ourPoliciesTitle: "Nuestras Políticas",
    newsTitle: "Noticias",
    contactUsTitle: "Contáctenos",
    applicationForm: "Formulario de Aplicación",
    cTpat: "C-TPAT",
    codeOfConduct: "Código de Conducta",
    // Add more translations as needed
  },
  ar: {
    homeTitle: "الصفحة الرئيسية",
    aboutUsTitle: "معلومات عنا",
    ourServicesTitle: "خدماتنا",
    businessIntegrityTitle: "نزاهة العمل",
    ourPoliciesTitle: "سياساتنا",
    newsTitle: "أخبار",
    contactUsTitle: "اتصل بنا",
    applicationForm: "نموذج التطبيق",
    cTpat: "C-TPAT",
    codeOfConduct: "مدونة السلوك",
    // Add more translations as needed
  },
};

export const useIntl = (): IntlShape => {
  const { language } = useLanguage();
  return createIntl(
    {
      locale: language,
      messages: messages[language],
    },
    cache,
  );
};
