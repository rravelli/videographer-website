import html2canvas from "html2canvas";
import { useEffect, useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export function ShowReel() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (CSS.supports("background-image", "-moz-element(#test)")) {
      return;
    }

    const text = document.getElementById("text");
    const showReel = document.getElementById("show-reel");
    if (text && showReel) {
      html2canvas(text, { backgroundColor: "transparent" }).then((canvas) => {
        showReel.style.backgroundImage = `url('${canvas.toDataURL()}')`;
        showReel.style.backgroundRepeat = "repeat";
      });
    }
  }, []);
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
          flexDirection: "row",
          justifyContent: "center",
          position: "relative",
          display: "flex",
          width: "100vw",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#2C2C2C ",
          backgroundImage: "-moz-element(#repeat)",
          backgroundRepeat: "repeat-y",
        }}
      >
        <div id="text" style={{ width: 200, fontSize: 30, position: "absolute", color: "gray" }}>
          SHOW REEL 2024
        </div>
        <div id="repeat" style={{ position: "absolute", width: "100%", left: "-200%" }}>
          <div
            style={{
              backgroundImage: "-moz-element(#text)",
              display: "flex",
              height: 40,
            }}
          />
          <div
            style={{
              backgroundImage: "-moz-element(#text)",
              display: "flex",
              animationDelay: "1s",
              height: 40,

              backgroundPositionX: 70,
            }}
          />
        </div>
        <video
          controls
          ref={ref}
          style={{
            height: "90%",
            maxHeight: 600,
            maxWidth: "100vw",
            aspectRatio: 16 / 9,
            zIndex: 2,
            border: "dashed 10px white",
          }}
        >
          <source src="videos/SHOWREEL JULIE RAVELLI 2024.mp4" type="video/mp4" />
        </video>

        {/* <div className="headband">
          <div className="scrolling-text" style={{ fontWeight: "bolder" }}>
            {text}
          </div>
        </div> */}

        {/* <div style={{ rotate: "90deg", fontSize: 300, right: 0 }}>REEL</div> */}
      </section>
    </ScrollAnimation>
  );
}
