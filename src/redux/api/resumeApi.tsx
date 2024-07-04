import { baseApi } from "./baseApi";

export const resumeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyResume: build.query({
      query: () => ({
        url: `/resume`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMyResumeQuery } = resumeApi;
