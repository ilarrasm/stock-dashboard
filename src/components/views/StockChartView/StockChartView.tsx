import { useAppSelector } from "../../../hooks/redux";
import ChartDateTime from "../../organism/ChartDateTime/ChartDateTime";
import StockChartIntervaleOptions from "../../organism/StockChartIntervaleOptions/StockChartIntervaleOptions";
import ChartRealTime from "../../organism/ChartRealTime/ChartRealTime";

const StockChartView = () => {
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
