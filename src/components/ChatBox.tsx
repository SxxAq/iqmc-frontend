import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext.tsx";
import { MessageCircle, X, Send } from "lucide-react";

// Define the message type
interface Message {
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

// Define the return type for useLanguage
interface LanguageContextType {
  language: keyof typeof translations;
}

const translations: {
  [key in "en" | "es" | "fr" | "de" | "hi"]: {
    title: string;
    placeholder: string;
    send: string;
  };
} = {
  en: {
    title: "Customer Support",
    placeholder: "How can we help you today?",
    send: "Send",
  },
  es: {
    title: "Soporte al Cliente",
    placeholder: "¿Cómo podemos ayudarte?",
    send: "Enviar",
  },
  fr: {
    title: "Support Client",
    placeholder: "Comment pouvons-nous vous aider?",
    send: "Envoyer",
  },
  de: {
    title: "Kundenservice",
    placeholder: "Wie können wir Ihnen helfen?",
    send: "Senden",
  },
  hi: {
    title: "ग्राहक सहायता",
    placeholder: "आज आप कैसे सहायता चाहते हैं?",
    send: "भेजें",
  },
};

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const { language } = useLanguage() as LanguageContextType;
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const t = translations[language];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const newMessage: Message = {
        text: inputMessage,
        sender: "user",
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");

      // Simulate AI response (remove in production)
      setTimeout(() => {
        const aiResponse: Message = {
          text: "Thanks for your message! Our team will get back to you shortly.",
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-auto">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full p-4 shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {isOpen && (
        <div
          className="bg-white rounded-2xl shadow-2xl border border-gray-100 
          w-[95vw] max-w-md h-[70vh] max-h-[800px] min-h-[500px]
          flex flex-col overflow-hidden animate-fadeIn 
          absolute bottom-0 right-0 m-2
          sm:w-96 sm:relative sm:m-0"
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <h3 className="font-semibold text-lg truncate">{t.title}</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:rotate-90 transition-transform"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`
                    max-w-[80%] px-4 py-2 rounded-2xl break-words 
                    ${
                      message.sender === "user"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-white text-gray-800 shadow-sm border"
                    }
                  `}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSendMessage}
            className="p-4 border-t bg-white rounded-b-2xl"
          >
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={t.placeholder}
                className="flex-grow p-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-300"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
