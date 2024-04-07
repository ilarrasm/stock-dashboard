import { useAppSelector } from "../../../hooks/redux";
import { useGetStockDatetimeQuery } from "../stockDetails.service";

export default function useGetDatatimeRequest() {
  const { startDate, endDate, exchange } = useAppSelector(
    ({ chartPage }) => chartPage
  );
  const response = useGetStockDatetimeQuery({
    startDate,
    endDate,
    exchange,
    symbol: "AAPL",
  });

  return response;
}
