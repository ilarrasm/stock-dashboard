import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./styles/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

/* 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>,
);
*/
