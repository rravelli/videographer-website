import { Link } from "react-router-dom";
import "./AppBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export function AppBar({ scroll }: { scroll: number }) {
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
        top: 0,
        left: 0,
        right: 0,
        paddingRight: 20,

        paddingLeft: 20,
        justifyContent: "space-between",
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        backgroundColor: `rgba(26,26,26,${Math.min(Math.max(scroll / 50 - 5, 0), 255)})`,
      }}
    >
      <div style={{ flexDirection: "row", display: "flex", gap: 30, padding: 10, alignItems: "center" }}>
        <Link to="/">
          <FontAwesomeIcon style={{ color: "white" }} icon={faHome} />
        </Link>
        {navigationItems.map((item) => (
          <Link to={item.path} style={{ textDecorationLine: "none" }} key={item.label}>
            <p className="menu-item">{item.label}</p>
          </Link>
        ))}
      </div>
      <div className="menu-item">EN</div>
    </nav>
  );
}
