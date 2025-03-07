import ScrollAnimation from "react-animate-on-scroll";
import "./About.css";

import { motion } from "framer-motion";

const text = `Xavier Dolan, fils d'un acteur-danseur, naît à Montréal en 1989. A peine six ans plus tard, on le découvre à la
télévision dans plusieurs publicités pour une enseigne pharmaceutique. Amoureux du jeu, sa relation avec le cinéma
s'impose très tôt et sa carrière d'acteur débute par plusieurs longs-métrages canadiens tels que J'en suis (1997),
La Forteresse suspendue (2001), ou encore Suzie (2009). Un an plus tôt, avec la production franco-québécoise gore
Martyrs, il pose, pour la première fois à l'écran, la pointe des pieds hors de ses frontières.`;

export function About() {
  return (
    <section
      id="about"
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        scrollSnapAlign: "center",
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
            }}
          />

          <div>
            <h2 style={{ marginTop: 0, fontWeight: "bold", fontSize: 30, fontFamily: "Lobster" }}>A propos de moi.</h2>
            <motion.span
              transition={{ staggerChildren: 0.01, duration: 1 }}
              id="description"
              initial={"hidden"}
              whileInView={"visible"}
              style={{ fontSize: 20, fontWeight: "lighter" }}
            >
              {text.split(" ").map((word, index) => (
                <motion.span
                  style={{ display: "inline-block", marginRight: "0.2em" }}
                  key={index}
                  variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
