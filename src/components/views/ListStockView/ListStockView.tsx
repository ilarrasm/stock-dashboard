import { Box, Typography } from "@mui/material";
import QuickAccess from "../../organism/QuickAccess/QuickAccess";
import PaginatedTable from "../../organism/PaginatedTable/PaginatedTable";
import stocks from "../../../mocks/tableData.json";
import paginate from "../../../helpers/paginate";

const paginateData = paginate(stocks.data, 10);

const ListStockView = () => {
  return (
    <Box display="flex" flexDirection="column" width="100%" p="1rem" gap="1.5rem">
      <Typography variant="h1" fontSize="2rem">Acciones en Nasdaq</Typography>
      <QuickAccess options={stocks.data} />
      <PaginatedTable
        data={paginateData.data}
        totalPage={paginateData.totalPages}
      />
    </Box>
  );
};

export default ListStockView;
