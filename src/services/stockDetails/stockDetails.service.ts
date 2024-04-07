import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ChartPageProps } from "../../redux/slices/chartPage/index.type";
import { getDatetimeInterval } from "./helpers/getDatetimeInterval";
import { StockDetailsQuery } from "./index.types";

const URL_API: string = import.meta.env.VITE_API_STOCK_DOMAIN;
const API_KEY: string = import.meta.env.VITE_API_STOCK_KEY;

type StockApiRealtimeProps = Pick<ChartPageProps, "exchange" | "interval"> & {
  symbol: string;
};

type StockApiDatatimeProps = Pick<
  ChartPageProps,
  "exchange" | "startDate" | "endDate"
> & { symbol: string };

export const stockDetailsApi = createApi({
  reducerPath: "stockDetailsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_API }),
  endpoints: (builder) => ({
    getStockrealtime: builder.query<StockDetailsQuery, StockApiRealtimeProps>({
      query: ({ exchange, interval, symbol }) => {
        return `/time_series?symbol=${symbol}&exchange=${exchange}&interval=${interval}&apikey=${API_KEY}`;
      },
    }),
    getStockDatetime: builder.query<StockDetailsQuery, StockApiDatatimeProps>({
      query: ({ exchange, symbol, startDate, endDate }) => {
        const datetimeInterval = getDatetimeInterval(startDate, endDate);
        return `/time_series?symbol=${symbol}&start_date=${encodeURIComponent(startDate)}&end_date=${encodeURIComponent(endDate)}&exchange=${exchange}&interval=${datetimeInterval}&apikey=${API_KEY}`;
      },
    }),
  }),
});

export const { useGetStockrealtimeQuery, useGetStockDatetimeQuery } =
  stockDetailsApi;
