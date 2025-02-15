import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
	reducerPath: "shazamCoreApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://shazam-core.p.rapidapi.com/v1" }),
	prepareHeaders: (headers) => {
		headers.set("x-rapidapi-key", "38c36a4d92msh7f7e50eee4bebd0p1eb1a4jsnd82623223c70");

		return headers;
	},
	endpoints: (builder) => ({
		getTopCharts: builder.query({
			query: () => "/charts/world?country_code=US",
		}),
	}),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
