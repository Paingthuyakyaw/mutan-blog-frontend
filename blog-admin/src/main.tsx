import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TestRouter from "./testRouter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TestRouter />
  </StrictMode>
);
