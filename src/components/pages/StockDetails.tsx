import useGetRealTimeRequest from "../../services/stockDetails/hooks/useGetRealTime";
import StockChartView from "../views/StockChartView/StockChartView";

export const StockDetails = () => {
  useGetRealTimeRequest();

  return <StockChartView />;
};
