import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux";
import { useGetStockDatetimeQuery } from "../stockDetails.service";

export default function useGetDatatimeRequest() {
  const { startDate, endDate, exchange } = useAppSelector(
    ({ chartPage }) => chartPage
  );
  const { symbol } = useParams();

  const response = useGetStockDatetimeQuery({
    startDate,
    endDate,
    exchange,
    symbol: symbol || "",
  });

  return response;
}
