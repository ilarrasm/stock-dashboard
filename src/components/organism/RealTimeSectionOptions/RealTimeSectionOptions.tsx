import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  changeInterval,
  changeVariantView,
} from "../../../redux/slices/chartPage";
import RealTimeSelect from "../../molecules/RealTimeSelect/RealTimeSelect";
import useGetDatatimeRequest from "../../../services/stockDetails/hooks/useGetDatatime";
import { useCallback } from "react";
import { IntervalTime } from "../../../redux/slices/chartPage/index.type";

const RealTimeSectionOptions = () => {
  const { interval, variantView } = useAppSelector(
    ({ chartPage }) => chartPage
  );
  const dispatch = useAppDispatch();
  const { refetch } = useGetDatatimeRequest();

  const handleApplyRealtimeInterval = useCallback(() => {
    dispatch(changeVariantView({ variantView: "realtime" }));
    refetch();
  }, [dispatch, refetch]);
  
  const handleChangeSelectInterval = useCallback(
    (newInterval: IntervalTime) =>
      dispatch(changeInterval({ interval: newInterval })),
    [dispatch]
  );

  return (
    <Box display="flex" flexDirection="column" gap="1rem">
      <Typography variant="body1">
        Selecciona el intervalo de la cotización en tiempo real.
      </Typography>

      <RealTimeSelect
        interval={interval}
        callback={handleChangeSelectInterval}
      />
      {variantView !== "realtime" && (
        <Button onClick={handleApplyRealtimeInterval}>Aplicar</Button>
      )}
    </Box>
  );
};

export default RealTimeSectionOptions;
