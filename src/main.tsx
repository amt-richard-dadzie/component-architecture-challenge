import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StepProvider } from "./contexts/StepsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StepProvider>
      <App />
    </StepProvider>
  </React.StrictMode>
);
