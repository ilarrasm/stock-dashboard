import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  changeInterval,
  changeVariantView,
} from "../../../redux/slices/chartPage";
import RealTimeSelect from "../../molecules/RealTimeSelect/RealTimeSelect";
import useGetDatatimeRequest from "../../../services/stockDetails/hooks/useGetDatatime";

const RealTimeSectionOptions = () => {
  const { interval, variantView } = useAppSelector(
    ({ chartPage }) => chartPage
  );
  const dispatch = useAppDispatch();
  const { refetch } = useGetDatatimeRequest();
  return (
    <Box display="flex" flexDirection="column" gap="1rem">
      <Typography variant="body1">
        Selecciona el intervalo de la cotización en tiempo real.
      </Typography>

      <RealTimeSelect
        interval={interval}
        callback={(interval) => dispatch(changeInterval({ interval }))}
      />
      {variantView !== "realtime" && (
        <Button
          onClick={() => {
            dispatch(changeVariantView({ variantView: "realtime" }));
            refetch();
          }}
        >
          Aplicar
        </Button>
      )}
    </Box>
  );
};

export default RealTimeSectionOptions;
