import { Link, useLocation } from "react-router-dom";
import "./AppBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faBars, faFilm, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { Drawer } from "./Drawer";
import { useState } from "react";

export function AppBar() {
  const loc = useLocation();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigationItems = [
    { label: "Accueil", path: "/", icon: faHome },
    { label: "Works", path: "/works/", icon: faFilm },
    { label: "About", path: "/about/", icon: faUser },
    { label: "Contact", path: "/contact/", icon: faAt },
  ];

  const isMobile = window.outerWidth < 500;

  return (
    <>
      <nav
        className="app-bar"
        style={{
          position: "fixed",

          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(26,26,26,0.2)",
        }}
      >
        {drawerOpen && isMobile && <Drawer onClose={() => setDrawerOpen(false)} />}
        <div
          style={{
            padding: 10,
            justifyContent: "space-between",
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          {isMobile && (
            <FontAwesomeIcon
              onClick={() => setDrawerOpen(true)}
              icon={faBars}
              size="xl"
              style={{ padding: 10, cursor: "pointer" }}
            />
          )}
          {!isMobile && (
            <div style={{ flexDirection: "row", display: "flex", gap: 20, alignItems: "center" }}>
              {navigationItems.map((item) => (
                <Link
                  to={item.path}
                  style={{ textDecorationLine: "none", display: "flex", alignItems: "center", gap: 8 }}
                  key={item.label}
                  className={`menu-item ${loc.pathname === item.path ? "selected" : ""}`}
                >
                  <FontAwesomeIcon size="1x" icon={item.icon} color="white" />
                  <p style={{ fontSize: "1.2em" }}>{item.label}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
