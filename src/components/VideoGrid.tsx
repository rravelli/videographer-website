import { Col, Container, Row } from "react-grid-system";
import { VideoCard, VideoPreview } from "./VideoCard";

export function VideoGrid() {
  const videos: VideoPreview[] = [
    { path: "videos/example.mp4", type: "Short film", name: "First video" },
    {
      path: "https://videos.pexels.com/video-files/2890196/2890196-hd_1920_1080_30fps.mp4",
      type: "Documentary",
      name: "Second video",
    },
    {
      path: "https://videos.pexels.com/video-files/6899945/6899945-uhd_4096_2160_25fps.mp4",
      type: "Live event capture",
      name: "Third video",
    },
  ];
  return (
    <Container fluid>
      <Row gutterWidth={0}>
        {videos.map((video, index) => (
          <Col xs={12} sm={6} lg={4} style={{ padding: 5 }} key={index}>
            <VideoCard delay={250 * (index + 1)} video={video} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
