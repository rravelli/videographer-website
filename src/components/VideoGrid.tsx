import { Col, Container, Row } from "react-grid-system";
import { VideoCard } from "./VideoCard";
import { Video } from "../types";

export function VideoGrid({ videos }: { videos: Video[] }) {
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
