import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideContent {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

const slides: SlideContent[] = [
  {
    title: "C-TAPT, COC",
    subtitle: "Social Compliance Auditing",
    description:
      "Ethical Auditing and System Certifications for your business success",
    image: "/slider-11-1.jpg",
    ctaText: "Contact Us",
    ctaLink: "/contact",
  },
  {
    title: "Guiding Growth",
    subtitle: "Driving Success",
    description:
      "At the core of our audit services is the power of informed decision-making. Our independent and comprehensive audits empower your organization.",
    image: "/slider-11-2.jpg",
    ctaText: "Our Services",
    ctaLink: "/services",
  },
  //{
  //  title: "Global Standards",
  //  subtitle: "Local Excellence",
  //  description:
  //    "Ensuring compliance and maintaining ethical standards across industries worldwide",
  //  image: "/hero-slide-3.jpg",
  //  ctaText: "Learn More",
  //  ctaLink: "/about",
  //},
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/1" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h2 className="text-sm md:text-base text-red-500 font-semibold mb-4 animate-fadeIn">
                  {slide.subtitle}
                </h2>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slideUp">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 animate-slideUp delay-200">
                  {slide.description}
                </p>
                <a
                  href={slide.ctaLink}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md transition duration-300 animate-slideUp delay-400"
                >
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={handlePrevSlide}
          className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNextSlide}
          className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentSlide(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-red-600 w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;