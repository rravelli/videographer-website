import "./Contact.css";

export function Contact() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <a href="mailto:julie_ravelli@orange.fr" style={{ color: "white", textDecorationLine: "none", fontSize: "min(10vw, 5em)" }}>
        julie_ravelli@orange.fr
      </a>
      {/* <p className="instagram">
        <FontAwesomeIcon icon={faInstagram} size="xl" />
        <p>@julie_rlli</p>
      </p> */}
    </div>
  );
}
