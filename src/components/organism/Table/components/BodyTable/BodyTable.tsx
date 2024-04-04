import { memo } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Stock } from "../../../../../types/stock";
import { GridRowTable } from "../GridRowTable/GridRowTable";

const BodyTable = memo(({ rows }: { rows: Stock[] }) => (
  <Box bgcolor="#E6E6E6">
    {rows.map(({ name, currency, symbol, type }) => (
      <GridRowTable key={`${symbol}-RowTable`}>
        {[name, currency, type].map((text) => (
          <Typography
            key={text}
            overflow="hidden"
            textOverflow="clip"
            fontSize=".8rem"
            pl=".5rem"
            pt=".5rem"
          >
            {text}
          </Typography>
        ))}
        <Button onClick={() => console.log(`Esto es un ${symbol}`)}>
          {symbol}
        </Button>
      </GridRowTable>
    ))}
  </Box>
));

export default BodyTable;
