import { createRoot } from "react-dom/client";
import { lazy } from "react";

const App = lazy(() => import("./App"));
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
