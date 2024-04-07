import { IntervalTime } from "../redux/slices/chartPage/index.type";

export interface Stock {
  symbol: string;
  interval: IntervalTime;
  currency: string;
  exchange_timezone: string;
  exchange: string;
  mic_code: string;
  type: string;
  name: string;
}
