"use client";

import { useGetBlogsByIdQuery } from "@/redux/api/blogApi";
import Image from "next/image";
import parse from "html-react-parser";

type PropTypes = {
  params: {
    id: string;
  };
};

const BlogDetailsPage = ({ params }: PropTypes) => {
  const { data: blog, isLoading } = useGetBlogsByIdQuery(params?.id);
  console.log(blog);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {blog?.data?.thumbnail && (
          <div className="relative h-64 mb-8">
            <Image
              src={blog?.data?.thumbnail}
              alt={blog?.data.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}
        <h1 className="text-5xl font-bold mb-4">{blog?.data.title}</h1>
        <div className="prose text-xl max-w-none">
          {parse(blog?.data.content)}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
