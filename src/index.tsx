import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";
import "./i18n";

import App from "./App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
