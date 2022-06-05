import { createRoot } from "react-dom/client";
import { lazy } from "react";

const App = lazy(() => import("./App"));
const containerId = "root";
const container = document.getElementById(containerId);
if (!container) {
  throw Error(`couldn't find element with id ${containerId}!`);
}
const root = createRoot(container);
root.render(<App />);
