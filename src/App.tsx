import { useEffect, useState } from "react";
import "./App.css";
import { AppBar } from "./components/AppBar";

import { VideoGrid } from "./components/VideoGrid";
import { BottomHeader } from "./components/BottomHeader";

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrolled = document.scrollingElement?.scrollTop;
      if (scrolled) {
        setScroll(scrolled);
        console.log(scrolled);
      }
    });
  }, []);

  return (
    <>
      <AppBar scroll={scroll} />
      <div className="wrapper">
        {/* <div className="hero" style={{ position: "absolute", top: 0, left: 0, zIndex: -100 }}></div> */}
        <div
          style={{
            opacity: 0.5,
            // opacity: Math.min(Math.floor(600000 / (scroll * scroll)) / 100, 0.5),
            left: 0,
            right: 0,
            position: "absolute",
            zIndex: -99,
          }}
        >
          <div className="gradient-overlay hero"></div>
          <iframe
            width="100%"
            height={"100%"}
            src="https://youtube.com/embed/?playlist=sLJp1EGpOsQ&autoplay=1&controls=0&showinfo=0&autohide=1&end=77&mute=1&loop=1"
            style={{
              mixBlendMode: "revert",
              border: "none",
              aspectRatio: 16 / 9,
            }}
          ></iframe>
        </div>
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
          <h1
            className="main-title"
            style={{
              transform: `translateY(-${Math.exp(scroll / 60)}px)`,
            }}
          >
            Julie Ravelli
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h2
              className="subtitle"
              style={{
                animation: "fadeInUp",
                animationDuration: "2s",
                animationDelay: "300ms",

                opacity: scroll < 50 ? 1 : Math.min(Math.exp(-scroll / 60), 1),
              }}
            >
              Réalisatrice
            </h2>

            <h2
              className="subtitle"
              style={{
                animation: "fadeInUp",
                animationDuration: "2s",
                animationDelay: "600ms",
                opacity: scroll < 50 ? 1 : Math.min(Math.exp(-scroll / 60), 1),
              }}
            >
              Monteuse
            </h2>

            <h2
              className="subtitle"
              style={{
                animation: "fadeInUp",
                animationDuration: "2s",
                animationDelay: "900ms",
                opacity: scroll < 50 ? 1 : Math.min(Math.exp(-scroll / 60), 1),
              }}
            >
              Cadreuse
            </h2>
          </div>
        </div>
      </div>
      {/* <div className="background-transition" style={{ height: 200 }} /> */}
      <div className="videos">
        <div style={{ padding: 10 }}>
          <VideoGrid />
        </div>
      </div>
      <BottomHeader />
    </>
  );
}

export default App;
