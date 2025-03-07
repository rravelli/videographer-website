import "./Filmography.css";
import { useEffect, useMemo, useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Col, Container, Row, ScreenClass, useScreenClass } from "react-grid-system";
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

function getMaxElement(cl: ScreenClass) {
  switch (cl) {
    case "xl":
    case "xxl":
    case "xxxl":
    case "lg":
    case "md":
      return 8;
    case "sm":
      return 9;
    case "xs":
      return 2;
    default:
      return 2;
  }
}

export function Filmography() {
  const ref = useRef<HTMLDialogElement>(null);
  const [videosInfo, setVideosInfo] = useState<YoutubeInfo[] | undefined>(undefined);
  const [selectedVideo, setSelectedVideo] = useState<number | undefined>();
  const cl = useScreenClass();
  const pageSize = useMemo(() => getMaxElement(cl), [cl]);
  const pageCount = useMemo(() => Math.ceil((VIDEODATA.length - 3) / pageSize), [pageSize]);

  useEffect(() => {
    Promise.all(VIDEODATA.map((v) => fetch(`https://www.youtube.com/oembed?url=${v.url}`).then((r) => r.json()))).then((res) =>
      setVideosInfo(res as YoutubeInfo[]),
    );
    function handleScroll() {
      const wrapper = document.getElementById("horizontal-wrapper");
      const root = document.getElementById("root");
      const marker = document.getElementById("filmography2");
      const pageIndicator = document.getElementById("page-indicator");

      if (wrapper && root && marker && pageIndicator) {
        const offset = -marker.getBoundingClientRect().top;
        const offsetRatio = offset / ((pageCount - 1) * document.body.clientHeight);
        wrapper.scrollTo({
          behavior: "smooth",
          left: offsetRatio * (pageCount - 1) * document.body.clientWidth,
        });
        pageIndicator.style.transform = `translateX(${Math.max((offset / document.body.clientHeight) * 35, 0)}px)`;
      }
    }
    const root = document.getElementById("root");
    if (root) {
      root.addEventListener("scroll", handleScroll);
      return () => root.removeEventListener("scroll", handleScroll);
    }
  }, [pageCount]);

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
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", paddingBottom: 100 }}>
            <Container fluid style={{ maxWidth: 1600 }}>
              <Row gutterWidth={0}>
                {videosInfo &&
                  videosInfo.slice(0, 3).map((v, index) => (
                    <Col xs={12} sm={6} lg={4} style={{ padding: 5 }} key={index}>
                      <VideoCard
                        image={`https://img.youtube.com/vi/${getVideoId(VIDEODATA[index].url)}/maxresdefault.jpg`}
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
        style={{ position: "sticky", top: 0 }}
        scrollableParentSelector="#root"
        animateIn="fadeInRight"
        animateOut="fadeOut"
        duration={0.5}
      >
        <section
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <a href="#filmography">
            <div style={{ display: "flex", paddingTop: 60, alignItems: "center", gap: 5, cursor: "pointer" }}>
              <h2>Tous mes projets</h2>
              <FontAwesomeIcon icon={faChevronUp} size="sm" />
            </div>
          </a>
          <div style={{ display: "flex", flexDirection: "row", gap: 5, position: "relative" }}>
            {new Array(pageCount).fill(0).map(() => (
              <div style={{ backgroundColor: "gray", height: 5, width: 30, borderRadius: 10 }} />
            ))}
            <div
              id="page-indicator"
              style={{ position: "absolute", left: 0, backgroundColor: "#d9d9d9", height: 5, width: 30, borderRadius: 10 }}
            />
          </div>

          {videosInfo && (
            <div
              id="horizontal-wrapper"
              className="no-scrollbar"
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100vw",

                overflowX: "scroll",
                scrollSnapType: "x mandatory",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                {new Array(pageCount).fill(0).map((_, i) => (
                  <div>
                    <div
                      key={i}
                      style={{
                        width: "100vw",
                        scrollSnapAlign: "start",
                        justifyContent: "center",
                      }}
                    >
                      <Container fluid style={{ width: "100vw", maxWidth: 1600 }}>
                        <Row gutterWidth={0}>
                          {videosInfo.slice(3 + i * pageSize, 3 + (i + 1) * pageSize).map((v, index) => (
                            <Col xs={12} sm={4} lg={3} style={{ padding: 5 }} key={index}>
                              <VideoCard
                                title={v.title}
                                index={index}
                                image={`https://img.youtube.com/vi/${getVideoId(
                                  VIDEODATA[3 + index + i * pageSize].url,
                                )}/maxresdefault.jpg`}
                                onClick={() => handleClick(index + 3)}
                                type={VIDEODATA[3 + index + i * pageSize].type}
                              />
                            </Col>
                          ))}
                        </Row>
                      </Container>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </ScrollAnimation>

      {videosInfo &&
        new Array(pageCount)
          .fill(0)
          .map((_, i) => (
            <div
              id={i === 0 ? "filmography2" : undefined}
              style={{ height: "100vh", width: "100vw", scrollSnapAlign: "start" }}
            />
          ))}

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
