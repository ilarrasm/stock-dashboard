import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { changeDates } from "../../../redux/slices/chartPage";
import { isDisableValidator } from "./helpers/date.utils";
import { DataTimeInputProps } from "./index.type";

const generateText = (startDate: string, endDate: string) => {
  if (!startDate || !endDate) return "Sin fecha";
  return `${startDate} - ${endDate}`;
};

const DataTimeInput = ({ startDate, endDate, onClick }: DataTimeInputProps) => {
  const dispatch = useAppDispatch();
  const { startDate: startDateCurrent, endDate: endDateCurrent } =
    useAppSelector(({ chartPage }) => chartPage);
  const isDisable = isDisableValidator(
    {
      startDate: startDateCurrent,
      endDate: endDateCurrent,
    },
    { startDate, endDate }
  );
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="1rem"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="body1">Seleccioná fecha</Typography>
      <Typography variant="body1">
        {generateText(startDate, endDate)}
      </Typography>
      <Box display="flex" gap="1rem">
        <Button variant="outlined" onClick={onClick}>
          Editar
        </Button>
        <Button
          onClick={() =>
            dispatch(
              changeDates({
                startDate,
                endDate,
              })
            )
          }
          disabled={isDisable}
          variant="contained"
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default DataTimeInput;
