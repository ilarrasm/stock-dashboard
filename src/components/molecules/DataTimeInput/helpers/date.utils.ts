import dayjs from "dayjs";
import { DateProp } from "../index.type";

const isSameDate = (current: string, newValue: string) => {
  return dayjs(current).isSame(dayjs(newValue));
};

export const isDisableValidator = (current: DateProp, newValue: DateProp) => {
  if (!newValue.startDate || !newValue.endDate) {
    return true;
  }
  if (
    !isSameDate(current.startDate, newValue.startDate) ||
    !isSameDate(current.endDate, newValue.endDate)
  ) {
    return false;
  }
  return true;
};
