import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { MessageCircle, X, Send } from "lucide-react";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const { language } = useLanguage();
  const messagesEndRef = useRef(null);

  const translations = {
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

  const t = translations[language];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const newMessage = {
        text: inputMessage,
        sender: "user",
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");

      // Simulate AI response (remove in production)
      setTimeout(() => {
        const aiResponse = {
          text: "Thanks for your message! Our team will get back to you shortly.",
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full p-4 shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-96 h-[500px] flex flex-col overflow-hidden animate-fadeIn">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <h3 className="font-semibold text-lg">{t.title}</h3>
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
                    max-w-[80%] px-4 py-2 rounded-2xl 
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
                className="flex-grow bg-gray-100 border-none rounded-full px-4 py-2 focus:ring-2 focus:ring-blue-300 transition-all"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 disabled:opacity-50 transition-all"
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
