import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../../env";

export const homeService: any = createApi({
  reducerPath: "homeService",
  baseQuery: fetchBaseQuery({
  }),
  endpoints: (builder) => ({
    getStockList: builder.query({
      query: (args) => {
        return {
          // url: `${env.WALLEX_BASE_URL}otc/markets`,
          // url: `${env.GECKOCON_BASE_URL}coins/markets?x_cg_demo_api_key=${env.GECKOCON_API_KEY}`,
          url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-gMKvPFPXHN1tXBiHz6zvSHsb`,

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
  useGetStockListQuery,
} = homeService;
