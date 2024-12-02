import React from "react";

interface PolicyItem {
  name: string;
  filename: string;
}

const policies: PolicyItem[] = [
  {
    name: "Integrity Policy",
    filename: "assets_pdf_IQMCINDIA-CERTIFICATION-PVT-LTD-Integrity-Policy.pdf",
  },
  {
    name: "Grievance Case procedure",
    filename:
      "assets_pdf_IQMCINDIA-CERTIFICATION-PVT-LTD-Grievence-Case-procedure.pdf",
  },
  {
    name: "Integrity Acknowledgement",
    filename:
      "assets_pdf_IQMCINDIA-CERTIFICATION-PVT-LTD-INTEGRITY-ACKNOWLEDGEMENT.pdf",
  },
  {
    name: "Service Feedback Form",
    filename:
      "assets_pdf_IQMCINDIA_CERTIFICATION_PVT_LTD-SERVICE-FEEDBACK-FORM.pdf",
  },
  {
    name: "Employee Integrity Declaration Form",
    filename:
      "assets_pdf_IQMCINDIA-CERTIFICATION-PVT-LTD-EMPLOYEE-INTEGRITY-DECLARTION-FORM.pdf",
  },
];
const OurPolicies: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="relative bg-gray-900 text-white py-20">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
            style={{ backgroundImage: 'url("/policy-banner.jpg")' }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl font-bold text-center mb-4">
              Our Policies
            </h1>
            <div className="flex justify-center gap-2 text-sm">
              <a href="/" className="hover:text-red-500">
                HOME
              </a>
              <span>/</span>
              <span>OUR POLICIES</span>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {policies.map((policy, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center">
                    {policy.name}
                  </h3>
                  <a
                    href={`/assets/${policy.filename}`}
                    className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
                    download
                  >
                    Download PDF
                  </a>{" "}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurPolicies;
