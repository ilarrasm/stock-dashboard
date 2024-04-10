import { useMemo } from "react";
import { generateDatetimePickerProps } from "../helpers";
import { DataTimePickerProps } from "../../../molecules/DataTimePicker/index.type";
import { DataTimePickerCoreProps } from "../index.type";

const useGetDataTimePickerProps = ({
  currentStartDate,
  currentEndDate,
  handleOnchangeStartDate,
  handleOnchangeEndDate,
}: DataTimePickerCoreProps): DataTimePickerProps =>
  useMemo(() => {
    const startDate = generateDatetimePickerProps(
      currentStartDate,
      handleOnchangeStartDate
    );
    const endDate = generateDatetimePickerProps(
      currentEndDate,
      handleOnchangeEndDate
    );
    return {
      startDate,
      endDate,
    };
  }, [
    currentEndDate,
    handleOnchangeEndDate,
    handleOnchangeStartDate,
    currentStartDate,
  ]);

export default useGetDataTimePickerProps;
