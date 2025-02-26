import ScrollAnimation from "react-animate-on-scroll";
import "./About.css";
export function About() {
  return (
    <ScrollAnimation
      scrollableParentSelector="#root"
      style={{ scrollSnapAlign: "center", position: "relative" }}
      animateOut="fadeOut"
      animateIn="fadeInLeft"
      duration={0.5}
    >
      <section
        className="about-container"
        style={{
          display: "flex",
          height: "100vh",
          padding: 100,
          gap: 60,
          alignItems: "center",
        }}
      >
        {/* <ScrollAnimation animateIn="pulse" delay={2}> */}
        <img src="/videographer-website/profile.png" height={200} width={200} style={{ borderRadius: "50%" }} />
        {/* </ScrollAnimation> */}
        <div>
          <h2 style={{ marginTop: 0, fontWeight: "bold", fontSize: 30, fontFamily: "Lobster" }}>A propos de moi.</h2>
          <text style={{ fontSize: 20, fontWeight: "lighter", maxWidth: 1000 }}>
            Xavier Dolan, fils d'un acteur-danseur, naît à Montréal en 1989. A peine six ans plus tard, on le découvre à la
            télévision dans plusieurs publicités pour une enseigne pharmaceutique. Amoureux du jeu, sa relation avec le cinéma
            s'impose très tôt et sa carrière d'acteur débute par plusieurs longs-métrages canadiens tels que J'en suis (1997), La
            Forteresse suspendue (2001), ou encore Suzie (2009). Un an plus tôt, avec la production franco-québécoise gore
            Martyrs, il pose, pour la première fois à l'écran, la pointe des pieds hors de ses frontières.
          </text>
        </div>
      </section>
      {/* <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "-30vh",
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: -1,
        }}
      ></div> */}
    </ScrollAnimation>
  );
}
