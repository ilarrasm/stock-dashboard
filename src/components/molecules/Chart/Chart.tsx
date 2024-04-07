import Highcharts, { Options } from "highcharts";
import HighchartsReact from "highcharts-react-official";

const StockChartView = ({ options }: { options: Options }) => (
  <HighchartsReact highcharts={Highcharts} options={options} />
);
export default StockChartView;
