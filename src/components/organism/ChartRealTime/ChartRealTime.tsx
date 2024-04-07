import dayjs from "dayjs";
import Chart from "../../molecules/Chart/Chart";
import OptionStock from "../../../types/optionStock";
import { Options } from "highcharts";
import useGetRealTimeRequest from "../../../services/stockDetails/hooks/useGetRealTime";

const optionsStockRealTime = (dating: OptionStock[]): Options => {
  const historicalData = dating.slice().reverse();
  return {
    title: {
      text: "Gráfico en tiempo real",
    },
    xAxis: {
      categories: historicalData.map((data) => {
        const hourAndMinutes = dayjs(data.datetime).format("hh:mm");
        return hourAndMinutes;
      }),
    },
    yAxis: {
      title: {
        text: "Valor",
      },
    },
    series: [
      {
        name: "Stock",
        type: "line",
        data: historicalData.map((data) => {
          const time = dayjs(data.datetime).format("hh:mm");
          return [time, parseFloat(data.close)];
        }),
      },
    ],
  };
};
const ChartRealTime = () => {
  const { data, isLoading } = useGetRealTimeRequest();
  if (isLoading || !data) return null;
  return <Chart options={optionsStockRealTime(data.values)} />;
};
export default ChartRealTime;
