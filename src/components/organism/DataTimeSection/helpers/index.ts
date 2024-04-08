import dayjs from "dayjs";
import { FORMAT_DATE } from "../../../../helpers/commons";
import { DataProps } from "../../../molecules/DataTimePicker/DataTimePicker";

export const generateDatetimePickerProps = (
  date: string,
  onchange: DataProps["onchange"]
): DataProps => {
  return {
    value: date,
    date: transformToDate(date),
    onchange,
  };
};

export const formatToString = (date: Date | null) => {
  if (!date) return "";
  return dayjs(date).format(FORMAT_DATE).toString();
};

export const transformToDate = (date: string) => {
  const dateFormatted = dayjs(date);
  if (!dateFormatted.isValid()) return null;
  return dateFormatted.toDate();
};
