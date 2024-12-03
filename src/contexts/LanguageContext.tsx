import { createContext, useState, useContext } from "react";
interface LanguageContextType {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  languages: { [key: string]: { name: string; flag: string } };
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState("en");
  const languages = {
    en: { name: "English", flag: "🇺🇸" },
    es: { name: "Español", flag: "🇪🇸" },
    ar: { name: "العربية", flag: "🇸🇦" },
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
