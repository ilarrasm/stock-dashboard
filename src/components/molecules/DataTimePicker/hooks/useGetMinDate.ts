import { useMemo } from "react";
import { DataTimePickerProps } from "../index.type";

type GetMinDateProps = Pick<DataTimePickerProps, "startDate">;

const useGetMinDate = ({ startDate }: GetMinDateProps) => {
  const getMinDate = useMemo(() => {
    if (!startDate.date) return null;

    const minDate = new Date(startDate.date);

    minDate.setDate(startDate.date.getDate() + 1);

    return minDate;
  }, [startDate.date]);

  return getMinDate;
};

export default useGetMinDate;
