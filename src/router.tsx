import { createBrowserRouter } from "react-router-dom";
import { Home } from "./routes/Home";
import { About } from "./routes/About";

import { NotFound } from "./routes/NotFound";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      errorElement: <NotFound />,
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
      ],
    },
  ],
  { basename: "/videographer-website/" },
);
