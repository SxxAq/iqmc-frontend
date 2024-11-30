import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:1337";

export const fetchServices = async () => {
  const response = await axios.get(`${API_URL}/api/services`);
  return response.data.data;
};

export const fetchServiceBySlug = async (slug: string) => {
  const response = await axios.get(
    `${API_URL}/api/services?filters[slug][$eq]=${slug}`,
  );
  return response.data.data[0];
};

export const fetchIndustries = async () => {
  const response = await axios.get(`${API_URL}/api/industries`);
  return response.data.data;
};

export const fetchIndustryBySlug = async (slug: string) => {
  const response = await axios.get(
    `${API_URL}/api/industries?filters[slug][$eq]=${slug}`,
  );
  return response.data.data[0];
};

export const fetchBlogPosts = async () => {
  const response = await axios.get(`${API_URL}/api/blog-posts`);
  return response.data.data;
};

export const fetchBlogPostBySlug = async (slug: string) => {
  const response = await axios.get(
    `${API_URL}/api/blog-posts?filters[slug][$eq]=${slug}`,
  );
  return response.data.data[0];
};

export const sendContactForm = async (formData: any) => {
  const response = await axios.post(`${API_URL}/api/contact`, formData);
  return response.data;
};
