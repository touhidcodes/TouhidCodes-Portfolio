"use client";

import { useGetAllBlogsQuery } from "@/redux/api/blogApi";
import { TBlog } from "@/types/Blog";
import Link from "next/link";

const Blogs = () => {
  const { data: blogs, isLoading } = useGetAllBlogsQuery({});

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-screen-xl py-10 lg:py-20">
      <h2 className="text-5xl font-bold text-center">My Recent Blogs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 lg:px-10 mt-20">
        {blogs?.data?.data.map((blog: TBlog) => (
          <div
            className="card card-compact bg-base-100 py-10 w-full lg:w-96 shadow-xl"
            key={blog?.id}
          >
            <figure>
              <img src={blog?.thumbnail} alt="blog" />
            </figure>
            <div className="card-body">
              <h2 className="card-title h-full">{blog?.title}</h2>
              <div className="card-actions justify-end">
                <Link href={`/blogs/${blog?.id}`} passHref>
                  <button className="btn btn-ghost font-regular">
                    <p className="badge bg-black bg-opacity-90 rounded-md p-5 text-lg chillax font-extralight text-white ">
                      Read Blog
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-14 flex items-center justify-center">
        <Link href="/blogs">
          <button className="btn btn-ghost font-regular">
            <p className="badge bg-black bg-opacity-90 rounded-md p-5 text-lg chillax font-extralight text-white ">
              More Blogs
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
