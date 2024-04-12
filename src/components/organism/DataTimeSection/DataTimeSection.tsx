import { useState } from "react";
import DataTimeInput from "../../molecules/DataTimeInput/DataTimeInput";
import { Dialog } from "@mui/material";
import useIsMobile from "../../../hooks/useIsMobile";
import { formatToString } from "./helpers";
import DataPickerCore from "./components/DataPickerCore";

const INITIAL_STATE = {
  isOpen: false,
  startDate: "",
  endDate: "",
};

const DataTimeSection = () => {
  const [{ isOpen, startDate, endDate }, setStateSection] =
    useState(INITIAL_STATE);
  const isMobile = useIsMobile();
  const handleOnchangeStartDate = (newValue: Date | null) => {
    setStateSection((state) => ({
      ...state,
      startDate: formatToString(newValue),
    }));
  };
  const handleOnchangeEndDate = (newValue: Date | null) => {
    setStateSection((state) => ({
      ...state,
      endDate: formatToString(newValue),
    }));
  };
  const handleChangeIsOpen = (isOpen: boolean) => {
    setStateSection((prevState) => ({ ...prevState, isOpen }));
  };

  return (
    <>
      <DataTimeInput
        startDate={startDate}
        endDate={endDate}
        onClick={() => handleChangeIsOpen(true)}
      />

      <Dialog open={isOpen} fullScreen={isMobile} maxWidth="xs" fullWidth>
        <DataPickerCore
          handleOnchangeStartDate={handleOnchangeStartDate}
          handleOnchangeEndDate={handleOnchangeEndDate}
          handleClose={() => handleChangeIsOpen(false)}
          currentStartDate={startDate}
          currentEndDate={endDate}
        />
      </Dialog>
    </>
  );
};

export default DataTimeSection;
