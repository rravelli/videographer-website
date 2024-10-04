import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <h1 style={{ fontSize: "10em" }}>404 Not Found</h1>
      <h2>It seem this page does not exist</h2>
      <Link to={"/"}>
        <button>Go back to home page</button>
      </Link>
    </div>
  );
}
