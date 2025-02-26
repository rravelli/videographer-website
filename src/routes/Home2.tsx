import ScrollAnimation from "react-animate-on-scroll";
import "./Home.css";
import "./HeadBand.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function Home() {
  const text = Array(Math.ceil(window.innerWidth / 100) * 2)
    .fill(0)
    .map(() => "SHOW REEL 2024 • ")
    .join("");
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
        <a href="mailto:julie_ravelli@orange.fr">julli_ravelli@orange.fr</a>

        <a href="https://www.instagram.com/julie.rlli/">
          <FontAwesomeIcon size="2xl" icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/julie-ravelli-3155a72a4/">
          <FontAwesomeIcon size="2xl" icon={faLinkedin} />
        </a>
      </div>
      <header style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            height: "100vh",
            width: "100vw",
            background: "linear-gradient(180deg, rgba(58,180,176,0) 50%, rgba(26,26,26,1) 100%)",
          }}
        />
        <video
          disablePictureInPicture
          autoPlay
          muted={true}
          loop
          style={{
            mixBlendMode: "revert",
            zIndex: -100,
            height: "100vh",
            width: "100vw",
            border: "none",
            objectFit: "cover",
            position: "relative",
          }}
        >
          <source src="videos/SHOWREEL JULIE RAVELLI 2024.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", bottom: 0, left: 0, padding: "5vw", display: "flex", flexDirection: "column" }}>
          <h1 style={{ textTransform: "uppercase", margin: 0 }}>Julie Ravelli</h1>
          <span style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <h2>Réalisatrice</h2>
            <h2>Cadreuse</h2>
            <h2>Monteuse</h2>
          </span>

          <span style={{ display: "flex", gap: 10 }}>
            <button style={{ width: "50%" }}>
              <a
                style={{ textDecorationLine: "none", color: "white", display: "flex", justifyContent: "center" }}
                href="#show-reel"
              >
                Show Reel
              </a>
            </button>
            <button style={{ width: "50%" }}>
              <a
                style={{ textDecorationLine: "none", color: "white", display: "flex", justifyContent: "center" }}
                href="#filmography"
              >
                Filmography
              </a>
            </button>
          </span>
        </div>
      </header>
      <ScrollAnimation animateOut="fadeOut" animateOnce animateIn="fadeInLeft" duration={0.5}>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 100,
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* <ScrollAnimation animateIn="pulse" delay={2}> */}
          <img src="/videographer-website/profile.png" height={200} width={200} style={{ borderRadius: "50%" }} />
          {/* </ScrollAnimation> */}
          <div>
            <h2 style={{ marginTop: 0, fontWeight: "bold", fontSize: 30 }}>Biographie</h2>
            <text style={{ fontSize: 20, fontWeight: "lighter", maxWidth: 1000 }}>
              Xavier Dolan, fils d'un acteur-danseur, naît à Montréal en 1989. A peine six ans plus tard, on le découvre à la
              télévision dans plusieurs publicités pour une enseigne pharmaceutique. Amoureux du jeu, sa relation avec le cinéma
              s'impose très tôt et sa carrière d'acteur débute par plusieurs longs-métrages canadiens tels que J'en suis (1997),
              La Forteresse suspendue (2001), ou encore Suzie (2009). Un an plus tôt, avec la production franco-québécoise gore
              Martyrs, il pose, pour la première fois à l'écran, la pointe des pieds hors de ses frontières.
            </text>
          </div>
        </section>
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateOut="fadeOut" animateIn="fadeInRight" duration={0.5}>
        <section
          id="show-reel"
          style={{
            flexDirection: "column",
            justifyContent: "center",
            display: "flex",
            width: "100%",
            alignItems: "center",

            backgroundColor: "#2C2C2C ",
          }}
        >
          <div className="headband">
            <div className="scrolling-text">{text}</div>
          </div>
          <div>
            <video
              controls
              style={{
                width: "100%",
                maxWidth: 1200,
                aspectRatio: 16 / 9,
                position: "relative",
              }}
            >
              <source src="videos/SHOWREEL JULIE RAVELLI 2024.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="headband">
            <div className="scrolling-text" style={{ fontWeight: "bolder" }}>
              {text}
            </div>
          </div>
        </section>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInLeft" duration={0.5}>
        <section id="filmography">
          <h1>Filmography</h1>
        </section>
      </ScrollAnimation>
    </>
  );
}
