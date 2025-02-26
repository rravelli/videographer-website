import { createBrowserRouter } from "react-router-dom";
import { Home } from "./routes/Home2";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import { Works } from "./routes/Works";
import { WorkDetails } from "./routes/WorkDetails";
import { NotFound } from "./routes/NotFound";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      errorElement: <NotFound />,
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        {
          path: "works",
          children: [
            { path: "", element: <Works /> },
            { path: ":slug", element: <WorkDetails /> },
          ],
        },
      ],
    },
  ],
  { basename: "/videographer-website/" },
);
