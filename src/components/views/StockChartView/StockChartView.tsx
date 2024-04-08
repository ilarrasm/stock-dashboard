import { useAppSelector } from "../../../hooks/redux";
import ChartDateTime from "../../organism/ChartDateTime/ChartDateTime";
import StockChartIntervaleOptions from "../../organism/StockChartIntervaleOptions/StockChartIntervaleOptions";
import ChartRealTime from "../../organism/ChartRealTime/ChartRealTime";
import StockDetailsHeader from "../../organism/StockDetailsHeader/StockDetailsHeader";

const StockChartView = () => {
  const { variantView } = useAppSelector(({ chartPage }) => chartPage);
  return (
    <>
      <StockDetailsHeader />
      <StockChartIntervaleOptions />
      {variantView === "realtime" && <ChartRealTime />}
      {variantView === "datetime" && <ChartDateTime />}
    </>
  );
};

export default StockChartView;
