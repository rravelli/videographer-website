import ScrollAnimation from "react-animate-on-scroll";
import "./About.css";
export function About() {
  return (
    <section
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        scrollSnapAlign: "center",
        //   padding: 100,
        backgroundImage: "url('https://toppng.com/uploads/preview/png-texture-background-11553964058e29r6vblkb.png')",
      }}
    >
      <ScrollAnimation
        scrollableParentSelector="#root"
        style={{ position: "relative", display: "flex" }}
        animateOut="fadeOut"
        animateIn="fadeInLeft"
        duration={0.5}
      >
        <div
          className="about-container"
          style={{ display: "flex", gap: 40, alignItems: "center", maxWidth: 1300, padding: 20, justifyContent: "center" }}
        >
          <img
            src="/videographer-website/profile.png"
            height={200}
            width={200}
            style={{
              borderRadius: "50%",
              border: "solid 10px white",
              // boxShadow: "rgba(255, 255, 255, 0.25) 0px 30px 60px -12px, rgba(255, 255, 255, 0.3) 0px 18px 36px -18px",
            }}
          />

          <div>
            <h2 style={{ marginTop: 0, fontWeight: "bold", fontSize: 30, fontFamily: "Lobster" }}>A propos de moi.</h2>
            <text style={{ fontSize: 20, fontWeight: "lighter" }}>
              Xavier Dolan, fils d'un acteur-danseur, naît à Montréal en 1989. A peine six ans plus tard, on le découvre à la
              télévision dans plusieurs publicités pour une enseigne pharmaceutique. Amoureux du jeu, sa relation avec le cinéma
              s'impose très tôt et sa carrière d'acteur débute par plusieurs longs-métrages canadiens tels que J'en suis (1997),
              La Forteresse suspendue (2001), ou encore Suzie (2009). Un an plus tôt, avec la production franco-québécoise gore
              Martyrs, il pose, pour la première fois à l'écran, la pointe des pieds hors de ses frontières.
            </text>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
