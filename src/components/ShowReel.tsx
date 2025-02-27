import { useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export function ShowReel() {
  const ref = useRef<HTMLVideoElement>(null);

  const text = Array(Math.ceil(window.innerWidth / 100) * 2)
    .fill(0)
    .map(() => "SHOW REEL 2024 • ")
    .join("");
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
          display: "flex",
          width: "100%",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#2C2C2C ",
        }}
      >
        <div className="headband">
          <div className="scrolling-text">{text}</div>
        </div>
        <div>
          <video
            controls
            ref={ref}
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
  );
}
