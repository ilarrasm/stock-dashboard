import { Box, Button, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import DataTimePicker from "../../../molecules/DataTimePicker/DataTimePicker";
import { DataTimePickerCoreProps } from "../index.type";
import useGetDataTimePickerProps from "../hooks/useGetDataTimePickerProps";

interface DataPickerProps extends DataTimePickerCoreProps {
  handleClose: () => void;
}

const DataPickerCore = ({
  currentEndDate,
  currentStartDate,
  handleClose,
  ...props
}: DataPickerProps) => {
  const dataTimePickerProps = useGetDataTimePickerProps({
    currentEndDate,
    currentStartDate,
    ...props,
  });
  return (
    <>
      <Button
        sx={{ alignSelf: "flex-end", p: "1rem" }}
        variant="text"
        color="inherit"
        onClick={handleClose}
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
        <DataTimePicker {...dataTimePickerProps} />
      </Box>
      <Box display="flex" justifyContent="flex-end" p="1rem">
        <Button
          variant="contained"
          disabled={!currentStartDate || !currentEndDate}
          onClick={handleClose}
        >
          Aplicar
        </Button>
      </Box>
    </>
  );
};

export default DataPickerCore;
