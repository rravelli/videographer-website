import { useEffect, useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Col, Container, Row } from "react-grid-system";
import "./Filmography.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

interface YoutubeInfo {
  title: string;
  thumbnail_url: string;
  author_name: string;
  thumbnail_height: number;
  thumbnail_width: number;
}

const videos = [
  "https://www.youtube.com/watch?v=4bmhlOgjABQ",
  "https://www.youtube.com/watch?v=UMv9wsB-f8Q",
  "https://www.youtube.com/watch?v=XUF13xMDe8M",
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

  const selectedId = selectedVideo !== undefined ? new URL(videos[selectedVideo]).searchParams.get("v") : null;
  console.log(selectedId);
  return (
    <>
      <ScrollAnimation
        style={{ scrollSnapAlign: "start" }}
        scrollableParentSelector="#root"
        animateIn="fadeInLeft"
        duration={0.5}
      >
        <section id="filmography" style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
          <h1 style={{ fontFamily: "Lobster" }}>Filmographie</h1>
          <h2>Mes derniers projets</h2>
          <div>
            <Container fluid>
              <Row gutterWidth={0}>
                {videosInfo &&
                  videosInfo.map((v, index) => (
                    <Col xs={12} sm={6} lg={4} style={{ padding: 5 }} key={index}>
                      <ScrollAnimation scrollableParentSelector="#root" animateIn="fadeInUp" key={index} delay={index * 100}>
                        <div
                          onClick={() => {
                            if (ref.current) {
                              setSelectedVideo(index);
                              ref.current.showModal();
                            }
                          }}
                          className="video-card"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 30,
                            padding: 10,
                            cursor: "pointer",
                          }}
                        >
                          <img
                            src={v.thumbnail_url}
                            width={"100%"}
                            style={{ aspectRatio: 16 / 9, objectFit: "cover", borderRadius: 10 }}
                          />
                          <text>{v.title}</text>
                        </div>
                      </ScrollAnimation>
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
              aspectRatio: 16 / 9,
            }}
          />
        )}
        <text style={{ color: "white", fontSize: 14, margin: 30, marginTop: 10 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ipsum ac arcu malesuada rutrum sit amet ut est. Sed
          laoreet sem nec magna luctus pretium. Donec et mollis turpis. Aenean molestie fringilla hendrerit. Pellentesque id nunc
          est. Suspendisse aliquet arcu eget diam condimentum maximus. Sed accumsan tincidunt justo vel rutrum. Fusce convallis
          lacus vel aliquet sodales. Aliquam et accumsan arcu, sed gravida velit. Aliquam lacinia est in ex bibendum scelerisque.
          Curabitur dignissim elementum nisi, bibendum euismod sapien porta ac. Praesent suscipit tellus in magna ultricies
          bibendum. Maecenas semper tortor vitae lectus eleifend ullamcorper. Sed felis augue, cursus quis bibendum eget,
          venenatis ac odio. Nam a ligula dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus.
        </text>
      </dialog>
    </>
  );
}
