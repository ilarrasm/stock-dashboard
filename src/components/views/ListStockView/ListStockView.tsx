import { Box, Typography } from "@mui/material";
import QuickAccess from "../../organism/QuickAccess/QuickAccess";
import PaginatedTable from "../../organism/PaginatedTable/PaginatedTable";
import StockListWithPagination from "../../../services/stockList/index.type";

const ListStockView = ({ data }: { data: StockListWithPagination }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      p="1rem"
      gap="1.5rem"
    >
      <Typography variant="h1" fontSize="2rem">
        Acciones en Nasdaq
      </Typography>
      <QuickAccess options={data.dataAutocomplete} />
      <PaginatedTable
        data={data.paginateTable.data}
        totalPage={data.paginateTable.totalPages}
      />
    </Box>
  );
};

export default ListStockView;
