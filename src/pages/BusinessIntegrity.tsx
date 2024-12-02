import React from "react";
const BusinessIntegrity: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="relative bg-gray-900 text-white py-20">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
            style={{ backgroundImage: 'url("/bussness-banner.jpg")' }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl font-bold text-center mb-4">
              Business Integrity
            </h1>
            <div className="flex justify-center gap-2 text-sm">
              <a href="/" className="hover:text-red-500">
                HOME
              </a>
              <span>/</span>
              <span>BUSINESS INTEGRITY</span>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Business Integrity
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              Business integrity is crucial in social compliance for several
              reasons:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/about-12.jpg"
                  alt="Team collaboration"
                  className="rounded-lg shadow-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Upholding Ethical Standards:
                </h3>
                <p className="text-gray-600">
                  Business integrity ensures that companies adhere to ethical
                  principles and values, including fairness, honesty, and
                  respect for human rights. This commitment is essential for
                  promoting fair labor practices, protecting workers' rights,
                  and fostering a positive work environment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Building Trust and Credibility:
                </h3>
                <p className="text-gray-600 mb-4">
                  Demonstrating integrity in social compliance builds trust and
                  credibility with stakeholders, including employees, customers,
                  investors, and communities. When companies operate with
                  integrity, stakeholders are more likely to have confidence in
                  their commitment to social responsibility and ethical conduct.
                </p>
                <h3 className="text-xl font-semibold mb-2">
                  Preventing Legal and Reputational Risks:
                </h3>
                <p className="text-gray-600 mb-4">
                  Businesses that prioritize integrity in social compliance are
                  less likely to face legal liabilities, regulatory fines, and
                  reputational damage. By complying with labor laws and industry
                  standards, companies can mitigate the risk of violations and
                  associated penalties.
                </p>
                <img
                  src="/about-8.jpg"
                  alt="Business meeting"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">
                Enhancing Brand Reputation:
              </h3>
              <p className="text-gray-600 mb-4">
                A reputation for integrity in social compliance can be a
                valuable asset for businesses. It enhances brand reputation,
                differentiation, and competitiveness in the marketplace.
                Consumers are increasingly prioritizing ethical considerations
                when making purchasing decisions, and businesses with strong
                social compliance practices can attract and retain customers who
                value responsible business conduct.
              </p>
              <h3 className="text-xl font-semibold mb-2">
                Promoting Sustainable Business Practices:
              </h3>
              <p className="text-gray-600">
                Business integrity in social compliance contributes to long-term
                sustainability by fostering a culture of responsibility and
                accountability. Companies that prioritize social compliance are
                better equipped to address social and environmental challenges,
                mitigate risks, and create value for society while maintaining
                profitability.
              </p>
            </div>

            <p className="mt-8 text-gray-600">
              Overall, business integrity is essential in social compliance
              because it establishes a foundation of trust, credibility, and
              accountability that enables businesses to operate ethically,
              sustainably, and responsibly in today's complex and interconnected
              global economy.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BusinessIntegrity;
