import { ChartPageProps } from "../../../redux/slices/chartPage/index.type";

export interface DateProp {
  startDate: string;
  endDate: string;
}

export interface DataTimeInputProps {
  startDate: ChartPageProps["startDate"];
  endDate: ChartPageProps["endDate"];
  onClick: () => void;
}
