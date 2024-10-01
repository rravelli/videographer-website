import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar";
import { BottomHeader } from "./BottomHeader";

export function Layout() {
  return (
    <>
      <AppBar />
      <Outlet />
      <BottomHeader />
    </>
  );
}
