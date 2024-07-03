import { tagTypes } from "../tags";
import { baseApi } from "./baseApi";

export const skillApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getGroupedSkills: build.query({
      query: () => ({
        url: `/skill/all`,
        method: "GET",
      }),
      providesTags: [tagTypes.skill],
    }),
  }),
});

export const { useGetGroupedSkillsQuery } = skillApi;
