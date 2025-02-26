import "./Filmography.css";
import { useEffect, useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Col, Container, Row } from "react-grid-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faClose } from "@fortawesome/free-solid-svg-icons";
import { VideoCard } from "./VideoCard";

interface YoutubeInfo {
  title: string;
  thumbnail_url: string;
  author_name: string;
  thumbnail_height: number;
  thumbnail_width: number;
}

const videos = [
  "https://www.youtube.com/watch?v=9l5JFBJSLYw&list=PLBDZkqh1aBeJ55mFhnd4ZKYCp-XLWapPU&index=3",
  "https://youtu.be/CNvS1W8CsHY?si=jWiAW1G1VXjuYMYn",
  "https://www.youtube.com/watch?v=9soykcI2xJQ&list=PLBDZkqh1aBeKi__HUEonA7FQZ-BjDFTX4&index=1",
  "https://www.youtube.com/watch?v=c7GDDwWKAAk&list=PLBDZkqh1aBeKi__HUEonA7FQZ-BjDFTX4&index=11",
  "https://www.youtube.com/watch?v=2CBFFWvdP3U&list=PLBDZkqh1aBeJ55mFhnd4ZKYCp-XLWapPU&index=1",
  "https://www.youtube.com/watch?v=eMMfWd0BiK8&list=PLBDZkqh1aBeLPLS9AoEKaJIRAcg93uTp9&index=3",
  "https://www.youtube.com/watch?v=oVJb0k6eop0&list=PLBDZkqh1aBeLPLS9AoEKaJIRAcg93uTp9&index=6",
  "https://www.youtube.com/watch?v=v4Tx0BfyMsM&list=PLBDZkqh1aBeLPLS9AoEKaJIRAcg93uTp9&index=1",
  "https://www.youtube.com/watch?v=DnA8DQmpPNY&list=PLBDZkqh1aBeKi__HUEonA7FQZ-BjDFTX4&index=10",
  "https://www.youtube.com/watch?v=ttxKE3xr7xA&list=PLBDZkqh1aBeK6ibD90ldkDwbYvIB6_KHJ&index=1",
];

export function Filmography() {
  //   const links = videos.map((v) => {
  //     const id = new URL(v).searchParams.get("v");
  //     return `https://i3.ytimg.com/vi/${id}/maxresdefault.jpg`;
  //   });
  const ref = useRef<HTMLDialogElement>(null);
  const [videosInfo, setVideosInfo] = useState<YoutubeInfo[] | undefined>(undefined);
  const [selectedVideo, setSelectedVideo] = useState<number | undefined>();
  useEffect(() => {
    Promise.all(videos.map((v) => fetch(`https://www.youtube.com/oembed?url=${v}`).then((r) => r.json()))).then((res) =>
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

  const selectedId = selectedVideo !== undefined ? getVideoId(videos[selectedVideo]) : null;

  return (
    <>
      <h1
        style={{
          fontFamily: "Lobster",
          position: "sticky",
          top: 0,
          left: 0,
          paddingTop: 20,
          right: 0,
          textAlign: "center",
          zIndex: 2,
          backgroundColor: "#1a1a1a",
          background: "linear-gradient(0deg, rgba(58,180,176,0) 0%, #1a1a1a 100%)",
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
          <h2 style={{ paddingTop: 60 }}>Mes derniers projets</h2>
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
                        onClick={() => handleClick(index)}
                      />
                    </Col>
                  ))}
              </Row>
            </Container>
            <ScrollAnimation
              scrollableParentSelector="#root"
              style={{ justifyContent: "center", display: "flex", marginTop: 30 }}
              animateIn="zoomInDown"
              animateOut="fadeOut"
              duration={1}
              animatePreScroll
            >
              <FontAwesomeIcon icon={faChevronDown} size="xl" />
            </ScrollAnimation>
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
          <h2 style={{ paddingTop: 60 }}>Tous mes projets</h2>
          <div style={{ width: "100%", maxWidth: 1600 }}>
            <Container fluid>
              <Row gutterWidth={0}>
                {videosInfo &&
                  videosInfo.slice(3).map((v, index) => (
                    <Col xs={12} sm={4} lg={3} style={{ padding: 5 }} key={index}>
                      <VideoCard
                        key={index}
                        type="Court-Métrage"
                        title={v.title}
                        index={index}
                        image={v.thumbnail_url}
                        onClick={() => handleClick(index + 3)}
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
          paddingBottom: 15,
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
