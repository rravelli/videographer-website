import ScrollAnimation from "react-animate-on-scroll";
import "./VideoCard.css";

export interface VideoPreview {
  name: string;
  type: string;
  path: string;
}

export function VideoCard({ delay, video }: { delay?: number; video: VideoPreview }) {
  return (
    <ScrollAnimation delay={delay} animateIn="fadeInUp" animateOnce style={{ width: "100%", marginBottom: -4 }}>
      <div className="video-card">
        <video width={"100%"} autoPlay muted loop style={{ aspectRatio: 1, borderRadius: 20, objectFit: "cover" }}>
          <source src={video.path} />
        </video>
        <div style={{ padding: 10 }}>
          <p style={{ fontSize: "18px", fontWeight: 400, textTransform: "uppercase", marginBlock: 0, color: "white" }}>
            {video.name}
          </p>
          <p
            style={{
              fontSize: "12px",
              fontFamily: "Poppins",
              fontWeight: 400,
              textTransform: "uppercase",
              marginBlock: 0,
              color: "white",
            }}
          >
            {video.type}
          </p>
        </div>
      </div>
    </ScrollAnimation>
  );
}
