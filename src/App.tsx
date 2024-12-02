import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurPolicies from "./pages/OurPolicies.tsx";
import LanguageProvider from "./contexts/LanguageContext";
import ChatBox from "./components/ChatBox";
import QuoteRequest from "./components/QuoteRequest";
import News from "./pages/News.tsx";
import BusinessIntegrity from "./pages/BusinessIntegrity.tsx";
function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/business-integrity"
                element={<BusinessIntegrity />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/policies" element={<OurPolicies />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </main>
          <Footer />
          <ChatBox />
          <QuoteRequest />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
