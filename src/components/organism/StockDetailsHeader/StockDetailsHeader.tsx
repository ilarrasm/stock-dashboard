import { Box, Typography } from "@mui/material";

import useIsMobile from "../../../hooks/useIsMobile";
import useGetMetaStockRequest from "../../../services/stockDetails/hooks/useGetMetaStock";

const StockDetailsHeader = () => {
  const { data } = useGetMetaStockRequest();
  const isMobile = useIsMobile();
  return (
    !!data && (
      <Box
        display="flex"
        p="1rem"
        gap="1rem"
        flexDirection={isMobile ? "column" : "row"}
      >
        <Typography>Nombre: {data.name}</Typography>
        <Typography>Simbolo: {data.symbol}</Typography>
        <Typography>Moneda: {data.currency}</Typography>
        <Typography>Tipo: {data.type}</Typography>
      </Box>
    )
  );
};

export default StockDetailsHeader;
