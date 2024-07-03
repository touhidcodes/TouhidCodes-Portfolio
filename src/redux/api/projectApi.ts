import { tagTypes } from "../tags";
import { baseApi } from "./baseApi";

export const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProjects: build.query({
      query: () => ({
        url: `/project?featured=true`,
        method: "GET",
      }),
      providesTags: [tagTypes.project],
    }),
  }),
});

export const { useGetAllProjectsQuery } = projectApi;
