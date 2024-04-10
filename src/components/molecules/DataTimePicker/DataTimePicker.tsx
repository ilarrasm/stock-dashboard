import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Input } from "@mui/material";
import { DataTimePickerProps } from "./index.type";
import useGetMinDate from "./hooks/useGetMinDate";

const NOW_DATE = new Date();

const DataTimePicker = ({ startDate, endDate }: DataTimePickerProps) => {
  const minDate = useGetMinDate({ startDate });
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
        minDate={minDate}
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
