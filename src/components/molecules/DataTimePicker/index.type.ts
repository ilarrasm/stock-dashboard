export interface DataProps {
  date: Date | null;
  value: string;
  onchange: (newVal: Date | null) => void;
}

export interface DataTimePickerProps {
  startDate: DataProps;
  endDate: DataProps;
}
