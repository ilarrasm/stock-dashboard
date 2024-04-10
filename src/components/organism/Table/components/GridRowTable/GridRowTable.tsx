import { Box, styled } from "@mui/material";

export const GridRowTable = styled(Box)`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-template-rows: 50px;
  place-items: left;
`;
