import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles";
import { defaultTheme } from "./config/theme";
import reportWebVitals from "./reportWebVitals";
import "./config/i18n";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <ThemeProvider theme={defaultTheme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
