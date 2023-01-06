import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";

const App = lazy(async () => import("./App"));
const containerId = "root";
const container = document.getElementById(containerId);
if (!container) {
  throw Error(`couldn't find element with id ${containerId}!`);
}
const root = createRoot(container);
root.render(
  <Suspense fallback="loading">
    <App />
  </Suspense>
);
