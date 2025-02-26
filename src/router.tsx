import { createBrowserRouter } from "react-router-dom";
import { Home } from "./routes/Home";

import { NotFound } from "./routes/NotFound";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      errorElement: <NotFound />,
      children: [{ path: "", element: <Home /> }],
    },
  ],
  { basename: "/videographer-website/" },
);
