import { IntervalTime } from "../../../redux/slices/chartPage/index.type";

const getIntervalToMilliseconds = (interval: IntervalTime) => {
  if (interval === "1min") return 60000;
  if (interval === "5min") return 300000;
  if (interval === "15min") return 900000;
  return 0;
};

export default getIntervalToMilliseconds;
