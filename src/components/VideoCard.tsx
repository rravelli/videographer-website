import ScrollAnimation from "react-animate-on-scroll";
import "./VideoCard.css";
import { Link } from "react-router-dom";
import { Video } from "../types";

export function VideoCard({ delay, video }: { delay?: number; video: Video }) {
  return (
    <ScrollAnimation delay={delay} animateIn="fadeInUp" animateOnce style={{ width: "100%", marginBottom: -4 }}>
      <Link to={`/works/${video.slug}/`} style={{ textDecorationLine: "none" }}>
        <div className="video-card">
          <video width={"100%"} autoPlay muted loop style={{ aspectRatio: 1, borderRadius: 20, objectFit: "cover" }}>
            <source src={video.path} />
          </video>
          <div style={{ padding: 10 }}>
            <p className="video-card-name">{video.name}</p>
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
      </Link>
    </ScrollAnimation>
  );
}
