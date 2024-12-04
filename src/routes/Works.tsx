import { Link, useSearchParams } from "react-router-dom";
import "./Works.scss";
import videos from "../assets/videos.json";
import videoType from "../assets/videoTypes.json";
import { Col, Container, Row } from "react-grid-system";

export function Works() {
  const categories = [{ id: -1, name: "All works" }].concat(videoType);

  const [params, setParams] = useSearchParams({ type: "All works" });
  const type = params.get("type");
  const filteredVideo = videos.filter((video) => type === "All works" || video.type === type);

  function onClick(category: { id: number; name: string }) {
    const el = document.getElementById("works-section");
    if (el && type !== category.name) {
      el.classList.remove("works-animation");
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      el.offsetWidth;
      el.classList.add("works-animation");
    }
    setParams({ type: category.name }, { preventScrollReset: true });
  }

  return (
    <div style={{ width: "100%", justifyContent: "center", display: "flex", paddingTop: 50, overflowX: "hidden" }}>
      <div
        style={{
          maxWidth: 1000,
          display: "flex",
          flex: 1,
          flexDirection: "column",
          paddingLeft: 20,
          paddingRight: 20,
          overflow: "none",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textTransform: "uppercase",
            textAlign: "center",
            userSelect: "none",
          }}
        >
          <h1 id="works-section" className="works-animation" style={{ fontSize: "min(8em, 16vw)" }}>
            {params.get("type")}
          </h1>
          <span
            style={{
              display: "flex",
              overflow: "auto",
              flexDirection: "row",
              whiteSpace: "nowrap",
              maxWidth: "100vw",
              marginBottom: 30,
            }}
          >
            {categories.map((category) => (
              <h2 aria-selected={category.name === type} className="work-type-item" onClick={() => onClick(category)}>
                {category.name}
              </h2>
            ))}
          </span>
          <Container style={{ margin: 0, width: "100%" }}>
            <Row style={{ width: "100%" }}>
              {filteredVideo.map((video) => (
                <Col
                  key={video.name + type}
                  className="work-item"
                  style={{
                    alignItems: "center",
                    display: "flex",
                    width: "100%",
                    textTransform: "uppercase",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  xs={12}
                  md={6}
                  xl={6}
                  lg={6}
                >
                  <Link to={`/works/${video.slug}/`} style={{ textDecorationLine: "none", width: "100%", color: "inherit" }}>
                    <p style={{ fontSize: "min(4em, 10vw)" }}>{video.name}</p>
                    <p style={{ color: "rgb(200, 200, 200)", fontSize: "min(2em, 5vw)" }}>{video.type}</p>
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
          <div style={{ margin: 200 }} />
        </span>
      </div>
    </div>
  );
}
