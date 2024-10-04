import { Outlet, ScrollRestoration } from "react-router-dom";
import { AppBar } from "./AppBar";

export function Layout() {
  return (
    <>
      <AppBar />
      <ScrollRestoration />
      <Outlet />
      {/* <BottomHeader /> */}
    </>
  );
}
