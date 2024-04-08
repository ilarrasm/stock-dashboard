import { useState } from "react";
import DataTimeInput from "../../molecules/DataTimeInput/DataTimeInput";
import DataTimePicker from "../../molecules/DataTimePicker/DataTimePicker";
import { Box, Button, Dialog, Typography } from "@mui/material";
import useIsMobile from "../../../hooks/useIsMobile";
import { Close } from "@mui/icons-material";
import { formatToString, generateDatetimePickerProps } from "./helpers";

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
        <Button
          sx={{ alignSelf: "flex-end", p: "1rem" }}
          variant="text"
          color="inherit"
          onClick={() =>
            setStateSection((prevState) => ({ ...prevState, isOpen: false }))
          }
        >
          <Close />
        </Button>
        <Box
          display="flex"
          width="100%"
          height="60vh"
          flexDirection="column"
          gap="1rem"
          p="1rem"
          alignItems="center"
        >
          <Typography variant="h6">Selecciona fecha y hora</Typography>
          <DataTimePicker
            startDate={generateDatetimePickerProps(
              startDate,
              handleOnchangeStartDate
            )}
            endDate={generateDatetimePickerProps(
              endDate,
              handleOnchangeEndDate
            )}
          />
        </Box>
        <Box display="flex" justifyContent="flex-end" p="1rem">
          <Button
            variant="contained"
            disabled={!startDate || !endDate}
            onClick={() => handleChangeIsOpen(false)}
          >
            Aplicar
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default DataTimeSection;
