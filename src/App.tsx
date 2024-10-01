import { useEffect, useState } from "react";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrolled = document.scrollingElement?.scrollTop;
      if (scrolled) {
        setScroll(scrolled);
        console.log(scrolled);
      }
    });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
