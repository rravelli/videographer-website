import { useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export function VideoCard({
  onClick,
  index,
  image,
  title,
  key,
  type,
}: {
  onClick: () => void;
  index: number;
  image: string;
  title: string;
  type?: string;
  key?: string | number;
}) {
  const ref = useRef<ScrollAnimation>(null);

  return (
    <ScrollAnimation
      ref={ref}
      key={key}
      scrollableParentSelector="#root"
      animateIn="fadeInUp"
      delay={document.body.clientWidth > 1000 ? index * 100 : 0}
      duration={0.5}
      animateOut="fadeOut"
    >
      <div
        onClick={onClick}
        className="video-card"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
          padding: 10,
          cursor: "pointer",
        }}
      >
        <img src={image} width={"100%"} style={{ aspectRatio: 16 / 9, objectFit: "cover", borderRadius: 10 }} />
        <text style={{ fontSize: 15, color: "#e3e3e3" }}>{type}</text>
        <text>{title}</text>
      </div>
    </ScrollAnimation>
  );
}
