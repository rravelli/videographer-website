import { Link, useLocation } from "react-router-dom";
import "./AppBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export function AppBar() {
  const loc = useLocation();

  const navigationItems = [
    { label: "Works", path: "/works/" },
    { label: "About", path: "/about/" },
    { label: "Contact", path: "/contact/" },
  ];

  return (
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
        <div style={{ flexDirection: "row", display: "flex", gap: 30, alignItems: "center" }}>
          <Link to="/" style={{ marginLeft: 5 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <FontAwesomeIcon className="home-icon" icon={faHome} />
          </Link>
          {navigationItems.map((item) => (
            <Link to={item.path} style={{ textDecorationLine: "none" }} key={item.label}>
              <p className={`menu-item ${loc.pathname === item.path ? "selected" : ""}`}>{item.label}</p>
            </Link>
          ))}
        </div>
        <div style={{ color: "white" }}>EN</div>
      </div>
    </nav>
  );
}
