import ScrollAnimation from "react-animate-on-scroll";

export function BottomHeader() {
  return (
    <div
      style={{
        alignItems: "center",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "rgb(26,26,26)",
        padding: 10,
      }}
    >
      <ScrollAnimation animateIn="fadeInLeft">
        <p style={{ fontWeight: 800, fontSize: "5em" }}>MADE BY</p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" offset={0} delay={300}>
        <p style={{ fontWeight: 800, fontSize: "3em" }}>Rémi Ravelli</p>
      </ScrollAnimation>
      <div></div>
    </div>
  );
}
