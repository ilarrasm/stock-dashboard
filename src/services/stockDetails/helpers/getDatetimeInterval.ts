import dayjs from "dayjs";
import { IntervalTime } from "../../../redux/slices/chartPage/index.type";

const getDatetimeWeekDiff = (startDate: string, endDate: string) => {
  const startDateFormat = dayjs(startDate);
  const endDateFormat = dayjs(endDate);
  if (!startDateFormat.isValid() || !endDateFormat.isValid()) return 0;
  return endDateFormat.diff(startDateFormat, "week");
};

export const getDatetimeInterval = (
  startDate: string,
  endDate: string
): IntervalTime => {
  let interval: IntervalTime = "1month";
  const weekDiff = getDatetimeWeekDiff(startDate, endDate);

  switch (true) {
    case weekDiff > 26:
      interval = "1month";
      break;
    case weekDiff > 8:
      interval = "1week";
      break;
    case weekDiff > 1:
      interval = "1day";
      break;
    default:
      interval = "1h";
      break;
  }
  return interval;
};
