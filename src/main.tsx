import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./Layout/Sidebar.tsx";
import App from "./App";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import "antd/dist/antd.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
