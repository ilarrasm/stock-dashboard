import { useState } from "react";
import DataTimeInput from "../../molecules/DataTimeInput/DataTimeInput";
import DataTimePicker from "../../molecules/DataTimePicker/DataTimePicker";
import dayjs from "dayjs";
import { Box, Button, Dialog, Typography } from "@mui/material";
import useIsMobile from "../../../hooks/useIsMobile";


const INITIAL_STATE = {
  isOpen: false,
  startDate: "",
  endDate: "",
};

const format = "YYYY-MM-DD HH:mm";

const formatToString = (date: Date | null) => {
  if (!date) return "";
  return dayjs(date.setUTCDate(0)).format(format).toString();
};

const transformToDate = (date: string) => {
  const dateFormatted = dayjs(date);
  if (!dateFormatted.isValid()) return null;
  return dateFormatted.toDate();
};

const DataTimeSection = () => {
  const [{ isOpen, startDate, endDate }, setStateSection] =
    useState(INITIAL_STATE);
  const isMobile = useIsMobile();
  return (
    <>
      <DataTimeInput
        startDate={startDate}
        endDate={endDate}
        onClick={() =>
          setStateSection((prevState) => ({ ...prevState, isOpen: true }))
        }
      />

      <Dialog open={isOpen} maxWidth="lg" fullScreen={isMobile}>
        <Box
          width="30vw"
          height="23vh"
          display="flex"
          flexDirection="column"
          gap="1rem"
          p="1rem"
        >
          <Typography variant="h6">Selecciona fecha y hora</Typography>
          <DataTimePicker
            startDate={{
              value: startDate,
              date: transformToDate(startDate),
              onchange: (newValue) => {
                setStateSection((state) => ({
                  ...state,
                  startDate: formatToString(newValue),
                }));
              },
            }}
            endDate={{
              value: endDate,
              date: transformToDate(endDate),
              onchange: (newVal) => {
                setStateSection((state) => ({
                  ...state,
                  endDate: formatToString(newVal),
                }));
              },
            }}
          />
          <Box display="flex" justifyContent="flex-end">
            <Button
              disabled={!startDate || !endDate}
              onClick={() =>
                setStateSection((state) => ({ ...state, isOpen: false }))
              }
            >
              Aplicar
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default DataTimeSection;

/* 

changeDates
*/
