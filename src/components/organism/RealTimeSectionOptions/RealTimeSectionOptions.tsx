import { Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { changeInterval } from "../../../redux/slices/chartPage";
import RealTimeSelect from "../../molecules/RealTimeSelect/RealTimeSelect";

const RealTimeSectionOptions = () => {
  const { interval } = useAppSelector(({ chartPage }) => chartPage);
  const dispatch = useAppDispatch();

  return (
    <Box display="flex" flexDirection="column" gap="1rem">
      <Typography variant="body1">
        Selecciona el intervalo de la cotización en tiempo real.
      </Typography>

      <RealTimeSelect
        interval={interval}
        callback={(interval) => dispatch(changeInterval({ interval }))}
      />
    </Box>
  );
};

export default RealTimeSectionOptions;
