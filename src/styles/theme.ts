import { createTheme } from "@mui/material/styles";
// A custom theme for this app
const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
      justifyContent: "stretch",
    },
  },
});

export default theme;
