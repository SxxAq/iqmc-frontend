import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface CountryContactProps {
  country: string;
  flag: string;
  dialingCode: string;
  phone: string;
  email: string;
  address: string;
}

const CountryContact: React.FC<CountryContactProps> = ({
  country,
  flag,
  dialingCode,
  phone,
  email,
  address,
}) => {
  const { language } = useLanguage();

  const translations: Record<
    string,
    { phone: string; email: string; address: string }
  > = {
    en: {
      phone: "Phone",
      email: "Email",
      address: "Address",
    },
    es: {
      phone: "Teléfono",
      email: "Correo electrónico",
      address: "Dirección",
    },
    fr: {
      phone: "Téléphone",
      email: "E-mail",
      address: "Adresse",
    },
    de: {
      phone: "Telefon",
      email: "E-Mail",
      address: "Adresse",
    },
    hi: {
      phone: "फ़ोन",
      email: "ईमेल",
      address: "पता",
    },
  };

  const t = translations[language] || translations.en; // Default to English if language is not found

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center mb-4">
        <img src={flag} alt={`${country} flag`} className="w-8 h-8 mr-2" />
        <h3 className="text-xl font-semibold">{country}</h3>
      </div>
      <div className="space-y-2">
        <p>
          <span className="font-semibold">{t.phone}:</span> {dialingCode}{" "}
          {phone}
        </p>
        <p>
          <span className="font-semibold">{t.email}:</span> {email}
        </p>
        <p>
          <span className="font-semibold">{t.address}:</span> {address}
        </p>
      </div>
    </div>
  );
};

export default CountryContact;
