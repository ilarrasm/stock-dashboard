import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Input } from "@mui/material";
import { useMemo } from "react";

interface DataProps {
  date: Date | null;
  value: string;
  onchange: (newVal: Date | null) => void;
}

const now = new Date();

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
        maxDate={now}
        customInput={<Input readOnly />}
        showTimeSelect
        placeholderText="Seleccione fecha de entrada"
      />
      <DatePicker
        selected={endDate.date}
        minDate={getMinDate}
        maxDate={now}
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
