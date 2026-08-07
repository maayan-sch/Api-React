import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary
        fallback={
          <div>
            <h3 className="text-lg font-medium text-[#274c77] mb-3">
              Something went wrong
            </h3>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => window.location.reload()}
                className="text-[#6096ba] underline"
              >
                Try Again
              </button>
              <Link
                to="/"
                className="text-[#6096ba] hover:text-[#a3cef1] underline cursor-pointer"
              >
                Go Home
              </Link>
            </div>
          </div>
        }
      >
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
);
