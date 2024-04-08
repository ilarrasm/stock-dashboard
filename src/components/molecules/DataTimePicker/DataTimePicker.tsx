import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Input } from "@mui/material";
import { useMemo } from "react";

export interface DataProps {
  date: Date | null;
  value: string;
  onchange: (newVal: Date | null) => void;
}

const NOW_DATE = new Date();

interface DataTimePickerProps {
  startDate: DataProps;
  endDate: DataProps;
}

const DataTimePicker = ({ startDate, endDate }: DataTimePickerProps) => {
  const getMinDate = useMemo(() => {
    if (!startDate.date) return null;
    const minDate = new Date(startDate.date);
    minDate.setDate(startDate.date.getDate() + 1);
    return minDate;
  }, [startDate.date]);
  return (
    <>
      <DatePicker
        selected={startDate.date}
        onChange={startDate.onchange}
        value={startDate.value}
        maxDate={NOW_DATE}
        customInput={<Input readOnly />}
        showTimeSelect
        placeholderText="Seleccione fecha de entrada"
      />
      <DatePicker
        selected={endDate.date}
        minDate={getMinDate}
        maxDate={NOW_DATE}
        onChange={endDate.onchange}
        value={endDate.value}
        customInput={<Input readOnly />}
        showTimeSelect
        disabled={!startDate.value}
        placeholderText="Seleccione fecha de cierre"
      />
    </>
  );
};

export default DataTimePicker;
