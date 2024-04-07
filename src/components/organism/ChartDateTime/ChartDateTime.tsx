import dayjs from "dayjs";
import Chart from "../../molecules/Chart/Chart";
import OptionStock from "../../../types/optionStock";
import { Options } from "highcharts";
import useGetDatatimeRequest from "../../../services/stockDetails/hooks/useGetDatatime";

const optionsStockDateTime = (dating: OptionStock[]): Options => {
  const historicalData = dating.slice().reverse();
  return {
    title: {
      text: "Gráfico en intervalos historicos",
    },
    xAxis: {
      categories: historicalData.map((data) => {
        const dateFormatted = dayjs(data.datetime).format("DD-MM-YYYY hh:mm");
        return dateFormatted.toString();
      }),
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    series: [
      {
        name: "Stock",
        type: "line",
        data: historicalData.map((data) => {
          const time = dayjs(data.datetime).format("DD-MM-YYYY hh:mm");
          return [time, parseFloat(data.close)];
        }),
      },
    ],
  };
};
const ChartDateTime = () => {
  const { data, isLoading } = useGetDatatimeRequest();
  if (!data || isLoading) return null;
  return <Chart options={optionsStockDateTime(data.values)} />;
};
export default ChartDateTime;
