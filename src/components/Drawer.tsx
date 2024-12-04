import { faAt, faFilm, faHome, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useLocation } from "react-router-dom";

export function Drawer({ onClose }: { onClose: () => void }) {
  const loc = useLocation();
  const navigationItems = [
    { label: "Accueil", path: "/", icon: faHome },
    { label: "Works", path: "/works/", icon: faFilm },
    { label: "About", path: "/about/", icon: faUser },
    { label: "Contact", path: "/contact/", icon: faAt },
  ];

  return (
    <div style={{ height: "100%", width: "100%", position: "fixed", top: 0, left: 0, zIndex: 100, display: "flex" }}>
      <div
        style={{
          background: "rgb(26, 26, 26)",

          padding: "20px 40px",
          gap: 20,
          height: "100%",

          display: "flex",
          flexDirection: "column",
          borderRight: "solid 2px black",
        }}
      >
        <div style={{ justifyContent: "end", width: "100%", display: "flex" }}>
          <FontAwesomeIcon size="2x" icon={faXmark} style={{ cursor: "pointer" }} onClick={onClose} />
        </div>
        {navigationItems.map((item) => (
          <NavLink
            to={item.path}
            style={{ textDecorationLine: "none", display: "flex", alignItems: "center", gap: 8, padding: "10px 40px" }}
            key={item.label}
            className={`menu-item ${loc.pathname === item.path ? "selected" : ""}`}
          >
            <FontAwesomeIcon size="1x" icon={item.icon} color="white" />
            <p style={{ fontSize: "1.2em" }}>{item.label}</p>
          </NavLink>
        ))}
      </div>
      <div
        onClick={onClose}
        style={{ flex: 1, width: "100%", height: "100%", background: "rgba(255,255,255)", opacity: 0.7 }}
      ></div>
    </div>
  );
}
