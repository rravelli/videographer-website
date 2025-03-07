import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ScreenClassProvider } from "react-grid-system";

function App() {
  return (
    <ScreenClassProvider>
      <RouterProvider router={router} />
    </ScreenClassProvider>
  );
}

export default App;
