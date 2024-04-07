import { Box, Button } from "@mui/material";
import { ReactNode } from "react";

const CharOptionSection = ({
  callback,
  children,
}: {
  callback?: () => void;
  children: ReactNode | ReactNode[];
}) => {
  return (
    <Box
      height="100%"
      p="1rem"
      display="flex"
      flexDirection="column"
      gap="1rem"
      mb="1rem"
    >
      {children}
      {!!callback && (
        <Box display="flex" justifyContent="flex-end" width="100%">
          <Button onClick={() => callback()} variant="contained">
            Aplicar
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CharOptionSection;
