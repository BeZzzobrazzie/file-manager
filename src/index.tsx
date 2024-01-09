import { MantineProvider, createTheme } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/00_app";
import '@mantine/core/styles.css';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      defaultColorScheme="dark"
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
