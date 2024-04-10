export interface DataTimePickerCoreProps {
  currentStartDate: string;
  currentEndDate: string;
  handleOnchangeStartDate: (newVal: Date | null) => void;
  handleOnchangeEndDate: (newVal: Date | null) => void;
}
