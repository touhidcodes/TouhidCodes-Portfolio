import { tagTypes } from "../tags";
import { baseApi } from "./baseApi";

export const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFeaturedProjects: build.query({
      query: () => ({
        url: `/project?featured=true`,
        method: "GET",
      }),
      providesTags: [tagTypes.project],
    }),
    getAllProjects: build.query({
      query: () => ({
        url: `/project`,
        method: "GET",
      }),
      providesTags: [tagTypes.project],
    }),
    getProjectById: build.query({
      query: (params) => ({
        url: `/project/${params}`,
        method: "GET",
      }),
      providesTags: [tagTypes.project],
    }),
  }),
});

export const {
  useGetAllProjectsQuery,
  useGetFeaturedProjectsQuery,
  useGetProjectByIdQuery,
} = projectApi;
