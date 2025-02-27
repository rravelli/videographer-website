import { useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export function ShowReel() {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <ScrollAnimation
      scrollableParentSelector="#root"
      animatePreScroll
      animateOut="fadeOut"
      animateIn="fadeInRight"
      duration={0.5}
      afterAnimatedOut={() => {
        if (ref.current) {
          ref.current.pause();
        }
        return undefined;
      }}
      style={{ scrollSnapAlign: "center" }}
    >
      <section
        id="show-reel"
        style={{
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          display: "flex",
          width: "100vw",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#2C2C2C",
          backgroundImage: "-moz-element(#repeat)",
          backgroundRepeat: "repeat-y",
          background: "repeating-linear-gradient(45deg,#1a1a1a,#1a1a1a 10px,#2C2C2C 10px,#2C2C2C 20px)",
        }}
      >
        <div style={{ fontSize: "min(9vw,45px)", fontFamily: "Lobster" }}>Show reel 2024</div>
        <video
          controls
          ref={ref}
          style={{
            height: "90%",
            maxHeight: 600,
            maxWidth: "100vw",
            aspectRatio: 16 / 9,
            zIndex: 2,
            border: "solid 10px white",
          }}
        >
          <source src="videos/SHOWREEL JULIE RAVELLI 2024.mp4" type="video/mp4" />
        </video>
      </section>
    </ScrollAnimation>
  );
}
