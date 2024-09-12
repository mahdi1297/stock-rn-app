import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../../env";

export const coinDetailService: any = createApi({
  reducerPath: "coinDetailService",
  baseQuery: fetchBaseQuery({
  }),
  endpoints: (builder) => ({
    getStockById: builder.query({
      query: (args) => {
        console.log(`${env.GECKOCON_BASE_URL}coins/${args.id}?x_cg_demo_api_key=${env.GECKOCON_API_KEY}`)
        return {
          url: `${env.GECKOCON_BASE_URL}coins/${args.id}?x_cg_demo_api_key=${env.GECKOCON_API_KEY}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
  }),
});

export const {
    useGetStockByIdQuery,
} = coinDetailService;
