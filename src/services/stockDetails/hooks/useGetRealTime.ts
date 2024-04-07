import { useAppSelector } from "../../../hooks/redux";
import getIntervalToMilliseconds from "../helpers/getIntervalToMilliseconds";
import { useGetStockrealtimeQuery } from "../stockDetails.service";

export default function useGetRealTimeRequest() {
  const { interval, variant, exchange } = useAppSelector(
    ({ chartPage }) => chartPage
  );
  const response = useGetStockrealtimeQuery(
    { interval, exchange, symbol: "AAPL" },
    {
      pollingInterval: getIntervalToMilliseconds(interval),
      skip: variant !== "realtime",
    }
  );

  return response;
}
