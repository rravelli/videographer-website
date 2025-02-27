import "./Filmography.css";
import { useEffect, useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Col, Container, Row } from "react-grid-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faClose } from "@fortawesome/free-solid-svg-icons";
import { VideoCard } from "./VideoCard";
import VIDEODATA from "../assets/videos.json";
interface YoutubeInfo {
  title: string;
  thumbnail_url: string;
  author_name: string;
  thumbnail_height: number;
  thumbnail_width: number;
}

export function Filmography() {
  const ref = useRef<HTMLDialogElement>(null);
  const [videosInfo, setVideosInfo] = useState<YoutubeInfo[] | undefined>(undefined);
  const [selectedVideo, setSelectedVideo] = useState<number | undefined>();

  useEffect(() => {
    Promise.all(VIDEODATA.map((v) => fetch(`https://www.youtube.com/oembed?url=${v.url}`).then((r) => r.json()))).then((res) =>
      setVideosInfo(res as YoutubeInfo[]),
    );
  }, []);

  function getVideoId(url: string) {
    const videoURL = new URL(url);
    const id = videoURL.searchParams.get("v");
    if (id === null) {
      return videoURL.pathname.replace("/", "");
    }
    return id;
  }

  function handleClick(index: number) {
    if (ref.current) {
      setSelectedVideo(index);
      ref.current.showModal();
    }
  }

  const selectedId = selectedVideo !== undefined ? getVideoId(VIDEODATA[selectedVideo].url) : null;

  return (
    <>
      <h1
        style={{
          fontFamily: "Lobster",
          position: "sticky",
          top: -2,
          left: 0,
          paddingTop: 22,
          right: 0,
          textAlign: "center",
          zIndex: 2,
          backgroundColor: "#1a1a1a",
          background: "linear-gradient(0deg, rgba(58,180,176,0) 0%, #1a1a1a 80%)",
        }}
      >
        Filmographie
      </h1>

      <ScrollAnimation
        style={{ scrollSnapAlign: "start", scrollSnapType: "none" }}
        scrollableParentSelector="#root"
        animateIn="fadeInLeft"
        animateOut="fadeOut"
        duration={0.5}
      >
        <section id="filmography" style={{ alignItems: "center", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <a href="#filmography2">
            <div style={{ display: "flex", paddingTop: 60, alignItems: "center", gap: 5, cursor: "pointer" }}>
              <h2>Mes derniers projets</h2>
              <ScrollAnimation
                scrollableParentSelector="#root"
                animateIn="slideInDown"
                animateOut="slideOutDown"
                duration={0.5}
                offset={50}
                animatePreScroll
              >
                <FontAwesomeIcon icon={faChevronDown} size="sm" />
              </ScrollAnimation>
            </div>
          </a>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Container fluid>
              <Row gutterWidth={0}>
                {videosInfo &&
                  videosInfo.slice(0, 3).map((v, index) => (
                    <Col xs={12} sm={6} lg={4} style={{ padding: 5 }} key={index}>
                      <VideoCard
                        image={v.thumbnail_url}
                        index={index}
                        title={v.title}
                        key={index}
                        type={VIDEODATA[index].type}
                        onClick={() => handleClick(index)}
                      />
                    </Col>
                  ))}
              </Row>
            </Container>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation
        style={{ scrollSnapAlign: "start" }}
        scrollableParentSelector="#root"
        animateIn="fadeInRight"
        animateOut="fadeOut"
        duration={0.5}
      >
        <section id="filmography2" style={{ alignItems: "center", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <a href="#filmography">
            <div style={{ display: "flex", paddingTop: 60, alignItems: "center", gap: 5, cursor: "pointer" }}>
              <h2>Tous mes projets</h2>
              <ScrollAnimation
                scrollableParentSelector="#root"
                animateIn="slideInDown"
                animateOut="slideOutDown"
                duration={0.5}
                offset={100}
                animatePreScroll
              >
                <FontAwesomeIcon icon={faChevronUp} size="sm" />
              </ScrollAnimation>
            </div>
          </a>
          <div style={{ width: "100%", maxWidth: 1600 }}>
            <Container fluid>
              <Row gutterWidth={0}>
                {videosInfo &&
                  videosInfo.slice(3).map((v, index) => (
                    <Col xs={12} sm={4} lg={3} style={{ padding: 5 }} key={index}>
                      <VideoCard
                        key={index}
                        title={v.title}
                        index={index}
                        image={v.thumbnail_url}
                        onClick={() => handleClick(index + 3)}
                        type={VIDEODATA[index + 3].type}
                      />
                    </Col>
                  ))}
              </Row>
            </Container>
          </div>
        </section>
      </ScrollAnimation>

      <dialog
        ref={ref}
        onScroll={(e) => e.preventDefault()}
        onClick={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const isInDialog =
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width;
          if (!isInDialog) {
            event.currentTarget.close();
          }
        }}
        onClose={() => {
          setSelectedVideo(undefined);
        }}
        style={{
          width: "min(1000px, 100vw)",
          backgroundColor: "#2c2c2c",
          borderRadius: 20,
          borderColor: "white",
          padding: 0,
          paddingBottom: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 15,
            position: "sticky",
            top: 0,
            backgroundColor: "#2c2c2c",
          }}
        >
          {videosInfo && selectedVideo !== undefined && (
            <text style={{ color: "white", fontSize: 20 }}>{videosInfo[selectedVideo].title}</text>
          )}
          <button
            onClick={() => {
              if (ref.current) {
                ref.current.close();
              }
            }}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        {selectedId && (
          <iframe
            allowFullScreen
            width="100%"
            src={`https://youtube.com/embed/${selectedId}?controls=1&showinfo=0&autohide=1&fullscreen=1`}
            style={{
              border: "none",
              backgroundColor: "black",
              aspectRatio: 16 / 9,
            }}
          />
        )}
      </dialog>
    </>
  );
}
