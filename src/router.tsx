import { createBrowserRouter } from "react-router-dom";
import { Home } from "./routes/Home";
import { Layout } from "./components/Layout";
import { About } from "./routes/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);
