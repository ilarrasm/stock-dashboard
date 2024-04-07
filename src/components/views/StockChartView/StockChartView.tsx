import { useAppSelector } from "../../../hooks/redux";
import ChartDateTime from "../../organism/ChartDateTime/ChartDateTime";
import StockChartIntervaleOptions from "../../organism/StockChartIntervaleOptions/StockChartIntervaleOptions";
import useGetRealTimeRequest from "../../../services/stockDetails/hooks/useGetRealTime";
import ChartRealTime from "../../organism/ChartRealTime/ChartRealTime";

const StockChartView = () => {
  useGetRealTimeRequest();
  const { variantView } = useAppSelector(({ chartPage }) => chartPage);
  return (
    <>
      {/* Crear section para nombres y toda la boludez */}
      <StockChartIntervaleOptions />
      {variantView === "realtime" && <ChartRealTime />}
      {variantView === "datetime" && <ChartDateTime />}
    </>
  );
};

export default StockChartView;

/* 
Ya hicimos los chart ahora hay que hacer los intervalos

<StockChartIntervaleOptions />

-Real Time
-Date

*/
