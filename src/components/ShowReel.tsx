import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export function ShowReel() {
  const ref = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
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
          backgroundImage: "url('https://pngimg.com/d/star_PNG76909.png')",
        }}
      >
        <div style={{ fontSize: "min(9vw,45px)", fontFamily: "Lobster" }}>Show reel 2024</div>
        {paused && (
          <FontAwesomeIcon
            style={{ position: "absolute", zIndex: 3 }}
            size="3x"
            onClick={() => {
              ref.current?.play();
            }}
            icon={faPlay}
          />
        )}
        <video
          controls
          loop
          ref={ref}
          onPause={() => {
            setPaused(true);
          }}
          onPlay={() => {
            setPaused(false);
          }}
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
