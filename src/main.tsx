import { createRoot } from "react-dom/client";

import "modern-normalize/modern-normalize.css";

import App from "./App";

import "./assets/css/style.css";

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
