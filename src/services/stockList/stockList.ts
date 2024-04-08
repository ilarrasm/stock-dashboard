import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Stock } from "../../types/stock";
import stockListAdapter from "./adapters/stockList.adapter";
import StockListWithPagination from "./index.type";

const URL_API: string = import.meta.env.VITE_API_STOCK_DOMAIN;
const API_KEY: string = import.meta.env.VITE_API_STOCK_KEY;

export const stockListApi = createApi({
  reducerPath: "stockListApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_API }),
  endpoints: (builder) => ({
    getStockList: builder.query<StockListWithPagination, { exchange: string }>({
      query: ({ exchange }) => `/stocks?exchange=${exchange}&apikey=${API_KEY}`,
      transformResponse(response: { data: Stock[] }) {
        const paginatedTada = stockListAdapter(response);
        return paginatedTada;
      },
    }),
  }),
});

export const { useGetStockListQuery } = stockListApi;
