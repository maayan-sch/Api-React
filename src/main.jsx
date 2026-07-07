import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

import "./index.css";
import App from "./App.jsx";

document.documentElement.classList.add("dark");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary
        fallback={
          <div>
            <h3 className="text-lg font-medium text-[#274c77] mb-3">
              Something went wrong
            </h3>

            <button
              onClick={() => window.location.reload()}
              className="text-[#6096ba] hover:text-[#a3cef1] underline cursor-pointer"
            >
              Try Again
            </button>
          </div>
        }
      >
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
);
