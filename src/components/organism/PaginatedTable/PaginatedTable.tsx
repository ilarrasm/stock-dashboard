import {
  Box,
  Pagination,
  Typography,
} from "@mui/material";
import { Stock } from "../../../types/stock";
import { useState } from "react";
import { ColDef } from "../Table/types/index.types";
import Table from "../Table/Table";
import useIsMobile from "../../../hooks/useIsMobile";

const columns: ColDef[] = [
  { field: "name", headerName: "Nombre", width: 4 },
  { field: "currency", headerName: "Moneda", width: 10 },
  { field: "type", headerName: "Tipo", width: 10 },
  { field: "symbol", headerName: "Simbolo", width: 10 },
];

const PaginatedTable = ({
  totalPage,
  data,
}: {
  totalPage: number;
  data: Stock[][];
}) => {
  const [page, setPage] = useState(1);
  const isMobile = useIsMobile();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      gap="1rem"
    >
      <Typography variant="h2" fontSize="2rem" textAlign="left" width="100%">
        Tabla de Acciones
      </Typography>
      <Table columns={columns} rows={data[page - 1]} />
      <Pagination
        page={page}
        count={totalPage}
        onChange={(_event, newValue) => setPage(newValue)}
        size={isMobile ? "small" : "large"}
      />
    </Box>
  );
};

export default PaginatedTable;
