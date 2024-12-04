import { useEffect, useState } from "react";
import { VideoGrid } from "../components/VideoGrid";
import "./Home.css";
import videos from "../assets/videos.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown, faChevronCircleUp, faVolumeUp, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";

export function Home() {
  const [scroll, setScroll] = useState(0);
  const [mute, setMute] = useState(true);

  const offset1 = 300;
  const offset2 = 1600;

  function onScroll() {
    const scrolled = document.scrollingElement?.scrollTop;
    if (scrolled) {
      setScroll(scrolled);
    }
  }

  function getBottomText() {
    if (scroll < offset1) {
      return "Show reel";
    } else if (scroll < offset2) {
      return "Projets";
    } else {
      return "Haut de page";
    }
  }

  function getScrollIndex() {
    if (scroll < offset1) {
      return offset1 + 100;
    } else if (scroll < offset2) {
      return offset2;
    } else {
      return 0;
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="header-background"></div>
        <div
          style={{
            left: 0,
            right: 0,
            height: "100vh",
            position: "fixed",
            zIndex: -99,
            overflow: "hidden",
            background: "black",
          }}
        >
          <div className="gradient-overlay"></div>
          <div
            style={{
              width: "100%",
              height: "200vh",
              opacity: Math.max(0, -scroll / 700 + 0.3),
              background: "white",
              position: "absolute",
            }}
          />
          <div className="frame">
            <iframe
              width="100%"
              height="100%"
              src={`https://youtube.com/embed/?playlist=sLJp1EGpOsQ&autoplay=1&controls=0&showinfo=0&autohide=1&end=77&loop=1&mute=${Number(
                mute,
              )}`}
              style={{
                mixBlendMode: "revert",
                position: "fixed",
                opacity: Math.min(1, scroll / 300 + 0.5),
                border: "none",
                aspectRatio: 16 / 9,
                filter: `blur(${Math.min(Math.max(-scroll / 3 + 100, 0), 15)}px)`,
              }}
            ></iframe>
          </div>
        </div>
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
          <h1
            className="main-title"
            style={{
              transform: `translateY(-${Math.exp(scroll / 40)}px)`,
            }}
          >
            Julie Ravelli
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <h2
              className="subtitle"
              style={{
                transform: `translateY(-${Math.exp(scroll / 40)}px)`,
                opacity: scroll < 50 ? 1 : Math.min(Math.exp(-scroll / 100), 1),
              }}
            >
              Réalisatrice & Vidéaste
            </h2>
          </div>
        </div>
      </div>

      <div
        className="bottom-area"
        onClick={() => document.scrollingElement?.scrollTo({ top: getScrollIndex(), behavior: "smooth" })}
        style={{
          alignItems: "center",
          position: "fixed",
          bottom: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          gap: 10,
        }}
      >
        <h3 style={{ mixBlendMode: "difference" }}>{getBottomText()}</h3>
        <FontAwesomeIcon className="arrow-down" size="xl" icon={scroll < 1600 ? faChevronCircleDown : faChevronCircleUp} />
      </div>
      {/* Volume */}
      <FontAwesomeIcon
        className={`volume-icon ${scroll > offset1 && scroll < offset2 - 400 ? "visible" : "invisible"}`}
        size="lg"
        onClick={() => setMute(!mute)}
        icon={mute ? faVolumeXmark : faVolumeUp}
        style={{ position: "fixed", top: 100, right: "7vw" }}
      />
      <div className="videos">
        <div style={{ padding: 10 }}>
          <VideoGrid videos={videos.filter((video) => video?.homePage)} />
        </div>
      </div>
    </>
  );
}
