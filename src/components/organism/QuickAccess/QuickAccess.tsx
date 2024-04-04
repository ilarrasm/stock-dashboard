import {
  Autocomplete,
  Box,
  Button,
  TextField,
  createFilterOptions,
} from "@mui/material";

import { Stock } from "../../../types/stock";
import { useState } from "react";

interface QuickAccessProps {
  options: Stock[];
}

const filterOptions = createFilterOptions({
  limit: 5,
  stringify: ({ symbol, name }: Stock) => `${symbol} ${name}`,
});

const QuickAccess = ({ options }: QuickAccessProps) => {
  const [symbolState, setSymbol] = useState("");
  return (
    <Box display="flex" flexDirection="column" gap="1rem" width="100%">
      <Autocomplete
        options={options}
        filterOptions={filterOptions}
        onChange={(_e, value, state) => {
          if (state === "clear") return setSymbol("");
          return state === "selectOption" && setSymbol(value?.symbol || "");
        }}
        renderInput={(params) => (
          <TextField {...params} label="Busqueda rápida" />
        )}
        renderOption={(props, option) => (
          <Box component="li" {...props} key={option.symbol}>
            ({option.symbol}) {option.name}
          </Box>
        )}
        getOptionLabel={({ symbol, name }) => `${symbol} ${name}`}
      />
      <Button
        variant="contained"
        disabled={!symbolState}
        onClick={() => {
          console.log(`${symbolState} el simbolo adonde ir`);
        }}
      >
        Ir
      </Button>
    </Box>
  );
};

export default QuickAccess;
