import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";
import "./App.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#0e1520",
          color: "#e8edf5",
          border: "1px solid rgba(255,255,255,0.07)",
          fontFamily: "DM Sans, sans-serif",
        },
      }}
    />
  </StrictMode>
);