import { ChartPageProps } from "./index.type";

const initialState: ChartPageProps = {
  variant: "realtime",
  interval: "15min",
  startDate: "",
  endDate: "",
  exchange: "NASDAQ",
  variantView: "realtime",
};

export default initialState;
