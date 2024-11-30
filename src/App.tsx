import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import IndustryDetail from "./pages/IndustryDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import LanguageProvider from "./contexts/LanguageContext";
import ChatBox from "./components/ChatBox";
import QuoteRequest from "./components/QuoteRequest";

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
              <Route path="/industries/:slug" element={<IndustryDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPostDetail />} />
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
