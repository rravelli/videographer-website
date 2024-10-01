import "./AppBar.css";

export function AppBar({ scroll }: { scroll: number }) {
  return (
    <div
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
      <div style={{ flexDirection: "row", display: "flex", gap: 30, paddingRight: 10, paddingLeft: 10 }}>
        <h2 className="menu-item">Works</h2>
        <h2 className="menu-item">About</h2>
        <h2 className="menu-item">Contact</h2>
      </div>
      <div>EN</div>
    </div>
  );
}
