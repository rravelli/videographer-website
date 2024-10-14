import { useEffect, useState } from "react";
import { VideoGrid } from "../components/VideoGrid";
import "./Home.css";
import videos from "../assets/videos.json";

export function Home() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrolled = document.scrollingElement?.scrollTop;
      if (scrolled) {
        setScroll(scrolled);
      }
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="header-background"></div>
        <div
          style={{
            opacity: 0.7,
            left: 0,
            right: 0,
            height: "100vh",
            position: "absolute",
            zIndex: -99,
            overflow: "hidden",
          }}
        >
          <div className="gradient-overlay"></div>
          <div className="frame">
            <iframe
              width="100%"
              height="100%"
              src="https://youtube.com/embed/?playlist=sLJp1EGpOsQ&autoplay=1&controls=0&showinfo=0&autohide=1&end=77&mute=1&loop=1"
              style={{
                mixBlendMode: "revert",
                border: "none",
                aspectRatio: 16 / 9,
              }}
            ></iframe>
          </div>
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
      <div className="videos">
        <div style={{ padding: 10 }}>
          <VideoGrid videos={videos.filter((video) => video?.homePage)} />
        </div>
      </div>
    </>
  );
}
