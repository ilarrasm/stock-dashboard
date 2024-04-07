import { Box, Button, Typography } from "@mui/material";
import { ChartPageProps } from "../../../redux/slices/chartPage/index.type";
import { useAppDispatch } from "../../../hooks/redux";
import { changeDates } from "../../../redux/slices/chartPage";

interface DataTimeInputProps {
  startDate: ChartPageProps["startDate"];
  endDate: ChartPageProps["endDate"];
  onClick: () => void;
}

const generateText = (startDate: string, endDate: string) => {
  if (!startDate || !endDate) return "Sin fecha";
  return `${startDate} - ${endDate}`;
};

const DataTimeInput = ({ startDate, endDate, onClick }: DataTimeInputProps) => {
  const dispatch = useAppDispatch();

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
          variant="contained"
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default DataTimeInput;
