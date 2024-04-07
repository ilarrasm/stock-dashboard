import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

interface DataProps {
  date: Date | null;
  value: string;
  onchange: (newVal: Date | null) => void;
}

interface DataTimePickerProps {
  startDate: DataProps;
  endDate: DataProps;
}

const DataTimePicker = ({
  startDate,
  endDate,
}: DataTimePickerProps) => (
  <>
    <DatePicker
      selected={startDate.date}
      onChange={startDate.onchange}
      value={startDate.value}
      showTimeSelect />
    <DatePicker
      selected={endDate.date}
      minDate={startDate.date}
      onChange={endDate.onchange}
      value={endDate.value}
      showTimeSelect
      disabled={!startDate.value} />
  </>
);

export default DataTimePicker;

/* 
() => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
    />
  );
};


*/
