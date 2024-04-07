import { Box } from "@mui/material";
import { Stock } from "../../../types/stock";
import { ColDef } from "./types/index.types";
import HeaderTable from "./components/HeaderTable/HeaderTable";
import BodyTable from "./components/BodyTable/BodyTable";

export default function Table({
  columns,
  rows,
}: {
  columns: ColDef[];
  rows: Stock[];
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100%"
      overflow="hidden"
      borderRadius="8px"
      
    >
      {/* Header Table */}
      <HeaderTable columns={columns} />
      {/* Body Table */}
      <BodyTable rows={rows} />
    </Box>
  );
}
