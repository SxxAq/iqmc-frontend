import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchIndustryBySlug } from "../services/api";

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const {
    data: industry,
    isLoading,
    error,
  } = useQuery(["industry", slug], () => fetchIndustryBySlug(slug));

  if (isLoading)
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  if (error)
    return (
      <div className="container mx-auto px-4 py-8">
        An error occurred: {error.message}
      </div>
    );
  if (!industry)
    return (
      <div className="container mx-auto px-4 py-8">Industry not found</div>
    );

  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  {industry.name}
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  {industry.description}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <img
              src={industry.image.url}
              alt={industry.name}
              className="w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Our Solutions for {industry.name}
          </h2>
          <div
            className="prose prose-lg prose-blue"
            dangerouslySetInnerHTML={{ __html: industry.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default IndustryDetail;
