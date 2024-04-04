import { Box } from "@mui/material";
import { ColDef } from "../../types/index.types";
import { GridRowTable } from "../GridRowTable/GridRowTable";
import { memo } from "react";

const HeaderTable = memo(({ columns }: { columns: ColDef[] }) => {
  return (
    <GridRowTable bgcolor="#454545" alignItems="center">
      {columns.map(({ headerName, field }, index) => (
        <Box
          key={field}
          gridRow="1 / 2"
          pl=".5rem"
          gridColumn={`${index + 1} / ${index + 2} `}
          color="#EEEEEE"
        >
          {headerName}
        </Box>
      ))}
    </GridRowTable>
  );
});

export default HeaderTable;
