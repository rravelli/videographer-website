import "./Home.css";
import "./HeadBand.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Filmography } from "../components/Filmography";
import { ShowReel } from "../components/ShowReel";
import { About } from "../components/About";
import { Header } from "../components/Header";

export function Home() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          padding: 10,
          zIndex: 400,
          alignItems: "center",
          display: "flex",
          justifyContent: "end",
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.69)",
          gap: 10,
        }}
      >
        <a href="mailto:julie_ravelli@orange.fr">julie_ravelli@orange.fr</a>

        <a href="https://www.instagram.com/julie.rlli/">
          <FontAwesomeIcon size="2xl" icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/julie-ravelli-3155a72a4/">
          <FontAwesomeIcon size="2xl" icon={faLinkedin} />
        </a>
      </div>
      <Header />
      <About />
      <ShowReel />
      <Filmography />
      {/* <section style={{ height: 400 }}></section> */}
    </>
  );
}
