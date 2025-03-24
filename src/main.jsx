import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./components/styles/index.css";
import { PizzasProvider } from "./context/fetchHomePizzaContext";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles/index.css";

import { AuthProvider } from "./context/authContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <PizzasProvider>
          <App />
        </PizzasProvider>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
