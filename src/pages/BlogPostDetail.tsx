import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchBlogPostBySlug } from "../services/api";

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const {
    data: post,
    isLoading,
    error,
  } = useQuery(["blogPost", slug], () => fetchBlogPostBySlug(slug));

  if (isLoading)
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  if (error)
    return (
      <div className="container mx-auto px-4 py-8">
        An error occurred: {error.message}
      </div>
    );
  if (!post)
    return (
      <div className="container mx-auto px-4 py-8">Blog post not found</div>
    );

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <img
            src={post.coverImage.url}
            alt={post.title}
            className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover mb-8"
          />
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <span className="sr-only">{post.author}</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{post.author}</p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={post.publishDate}>
                  {new Date(post.publishDate).toLocaleDateString()}
                </time>
              </div>
            </div>
          </div>
          <div
            className="mt-8 prose prose-lg prose-yellow mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
