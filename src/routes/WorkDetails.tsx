import { useParams } from "react-router-dom";
import videos from "../assets/videos.json";
import { NotFound } from "./NotFound";
import { embedYoutubeLink } from "../utils";

import ScrollAnimation from "react-animate-on-scroll";

export function WorkDetails() {
  const { slug } = useParams();

  const video = videos.find((vid) => vid.slug === slug);

  if (video === undefined) {
    return <NotFound />;
  }

  return (
    <div style={{ width: "100%", justifyContent: "center", display: "flex", paddingTop: 50 }}>
      <div style={{ maxWidth: 1000, display: "flex", flex: 1, flexDirection: "column", paddingLeft: 20, paddingRight: 20 }}>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexDirection: "column",
            textTransform: "uppercase",
            margin: "10em 0",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "min(14em, 16vw)", marginBlock: 0, animation: "fadeInUp", animationDuration: "1s" }}>
            {video.name}
          </h1>
          <h2 style={{ marginBlock: 0, animation: "fadeIn", animationDuration: "1500ms" }}>{video.type}</h2>
        </span>

        <iframe
          width={"100%"}
          src={embedYoutubeLink(video.fullVideo, { autohide: true, autoplay: false, controls: true, loop: false, mute: false })}
          style={{ aspectRatio: 16 / 9, border: "none", borderRadius: 20, animation: "slideInUp", animationDuration: "1s" }}
        />

        {video.metadata && (
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              textTransform: "uppercase",
              margin: "5em 0",
              gap: 20,
            }}
          >
            <div style={{ gap: 10, display: "flex", alignItems: "flex-end", flexDirection: "column", width: "50%" }}>
              {Object.keys(video.metadata).map((key, index) => (
                <ScrollAnimation animateIn="fadeInLeft" delay={index * 100} offset={0}>
                  <p style={{ textAlign: "right", fontWeight: 900, fontSize: "1.2em" }}>{key}</p>
                </ScrollAnimation>
              ))}
            </div>
            <div
              style={{
                gap: 10,
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                width: "50%",
              }}
            >
              {Object.values(video.metadata).map((val, index) => (
                <ScrollAnimation animateIn="fadeInRight" delay={index * 100} offset={0}>
                  <p style={{ textAlign: "right", fontSize: "1.2em" }}>{val}</p>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        )}
        <p style={{ textAlign: "center", margin: "3em 0" }}>{video.description}</p>
      </div>
    </div>
  );
}
