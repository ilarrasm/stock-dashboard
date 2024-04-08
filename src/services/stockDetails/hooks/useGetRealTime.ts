import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux";
import getIntervalToMilliseconds from "../helpers/getIntervalToMilliseconds";
import { useGetStockrealtimeQuery } from "../stockDetails.service";

export default function useGetRealTimeRequest() {
  const { interval, variant, exchange } = useAppSelector(
    ({ chartPage }) => chartPage
  );
  const { symbol } = useParams();

  const response = useGetStockrealtimeQuery(
    { interval, exchange, symbol: symbol || "" },
    {
      pollingInterval: getIntervalToMilliseconds(interval),
      skip: variant !== "realtime",
    }
  );

  return response;
}
