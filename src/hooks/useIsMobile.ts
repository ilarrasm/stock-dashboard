import { useMediaQuery, useTheme } from "@mui/material";

const useIsMobile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return isMobile;
};
export default useIsMobile