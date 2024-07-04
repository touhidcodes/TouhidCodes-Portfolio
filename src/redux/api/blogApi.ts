import { tagTypes } from "../tags";
import { baseApi } from "./baseApi";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBlogs: build.query({
      query: () => ({
        url: `/blog`,
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),
    getBlogsById: build.query({
      query: (params) => ({
        url: `/blog/${params}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),
  }),
});

export const { useGetAllBlogsQuery, useGetBlogsByIdQuery } = blogApi;
