import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.scss";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Contact() {
  return (
    <div
      className="contact-background"
      style={{
        height: "100vh",
        width: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 20,
          padding: "40px 0",
          borderRadius: 4,
          flexDirection: "column",
          width: "100%",
          maxWidth: 400,
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          backgroundImage:
            "url(https://www.transparentpng.com/download/pattern/p3NBVZ-data-security-and-privacy-software-services-safe-data.png)",
        }}
      >
        <h1 style={{ margin: "0 20px" }}>Mes réseaux</h1>
        <a
          href="mailto:julie_ravelli@orange.fr "
          className="social"
          style={{ background: "#8e9299", color: "white", margin: "0 20px" }}
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          <h3>julie_ravelli@orange.fr</h3>
        </a>
        <a
          href="https://www.linkedin.com/in/julie-ravelli-3155a72a4/"
          target="_blank"
          className="social"
          style={{ background: "#0e76a8", color: "white", margin: "0 20px" }}
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <h3>julie_ravelli</h3>
        </a>
        <a
          href="https://www.instagram.com/julie.rlli/"
          target="_blank"
          style={{ color: "white", margin: "0 20px" }}
          className="social instagram"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <h3>@julie.rlli</h3>
        </a>
      </div>
    </div>
  );
}
