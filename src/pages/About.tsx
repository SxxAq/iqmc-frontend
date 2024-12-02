import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial.tsx";
const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
          style={{ backgroundImage: 'url("/about-header-default.jpg")' }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
          <div className="flex justify-center gap-2 text-sm">
            <Link to="/" className="hover:text-red-500">
              HOME
            </Link>
            <span>/</span>
            <span>ABOUT US</span>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">
                Welcome to IQMC INDIA Certification Pvt Ltd & IQMC Global
                Assessment
              </h2>
              <p className="text-gray-600">
                IQMC INDIA Certification Pvt Ltd was founded in 2010 and has
                become a trusted provider of integrated and professionally
                managed training, development, service of training & development
                on management and social auditing and ISO services. The company
                was established with a mission to pioneer the field of
                certification and inspection, bringing new values of integrity
                and ethics.
              </p>
              <p className="text-gray-600">
                Over the years, IQMC INDIA, IQMC Global Assessment has built a
                successful global business based on its long-standing reputation
                and expertise in providing high-quality auditing, training,
                inspection, and certification services.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/project-detail-img-2.jpg"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/about-5.jpg"
                alt="Professional meeting"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-red-500 font-medium mb-4">Need Some Help?</h3>
          <h2 className="text-3xl font-bold mb-8">
            We are committed to upholding the most rigorous standards in social
            compliance auditing.
          </h2>
          <p className="max-w-3xl mx-auto mb-8">
            Our experienced team ensures that your business meets global ethical
            and regulatory requirements, fostering transparency, accountability,
            and trust. With us, you gain the confidence to navigate complex
            compliance challenges and maintain the integrity of your operations.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="tel:+919339337237"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md inline-flex items-center gap-2"
            >
              CALL US
            </a>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                📞
              </span>
              <div className="text-left">
                <p className="text-sm">Contact</p>
                <p>info@iqmcindia.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-red-500 text-center mb-4">Dedicated Team</h3>
          <h2 className="text-3xl font-bold text-center mb-8">
            Professional Individuals
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-center">
            The company has a team of experienced auditors who are qualified to
            conduct various types of social compliance and management system
            audits, including Sedex, BSCI, WRAP, SA8000, SLCP and ISO. IQMC
            Global Assessment mission is to empower supply chains to achieve and
            maintain the highest standards of social responsibility across their
            operations. The company approaches each audit with meticulous
            attention to detail, integrity, and impartiality, striving to
            provide accurate assessments and actionable insights to drive
            meaningful progress.
          </p>
        </div>
      </section>
      <Testimonial />

      {/* Customer Experience Section */}
      {/* <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-red-500 text-center mb-4">Our Clients</h3>
          <h2 className="text-3xl font-bold text-center mb-8">
            Customers Experience
          </h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-600 italic mb-4">
              I am honored to extend a warm welcome to you on behalf of our team
              at IQMC INDIA Certification Pvt Ltd & IQMC Global Assessment. As
              the Managing Director of our social compliance auditing firm, I am
              proud of the work we do to promote ethical practices and uphold
              labor standards in the global supply chain.
            </p>
            <div className="text-center">
              <p className="font-bold">Sandeep Tomar</p>
              <p className="text-gray-500">Managing Director</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUs;
