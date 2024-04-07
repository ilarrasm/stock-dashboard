export interface ChartPageProps {
  variant: "realtime" | "datetime";
  interval: IntervalTime;
  startDate: string;
  endDate: string;
  exchange: "NASDAQ";
  variantView: "realtime" | "datetime";
}

export type IntervalTime =
  | "1min"
  | "5min"
  | "15min"
  | "30min"
  | "45min"
  | "1h"
  | "2h"
  | "4h"
  | "8h"
  | "1day"
  | "1week"
  | "1month";
