import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import InfoProvider from "./Context/context";

ReactDOM.render(
  <InfoProvider>
    <Router>
      <App />
    </Router>
  </InfoProvider>,
  document.getElementById("root")
);
