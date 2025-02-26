export function Header() {
  return (
    <header style={{ position: "relative", scrollSnapAlign: "start" }}>
      <div
        style={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          background: "linear-gradient(180deg, rgba(58,180,176,0) 50%, rgba(26,26,26,1) 100%)",
        }}
      />
      <video
        disablePictureInPicture
        autoPlay
        muted={true}
        loop
        style={{
          mixBlendMode: "revert",
          zIndex: -100,
          height: "100vh",
          width: "100vw",
          border: "none",
          objectFit: "cover",
          position: "relative",
        }}
      >
        <source src="videos/SHOWREEL JULIE RAVELLI 2024.mp4" type="video/mp4" />
      </video>
      <div style={{ position: "absolute", bottom: 0, left: 0, padding: "5vw", display: "flex", flexDirection: "column" }}>
        <h1 style={{ textTransform: "uppercase", margin: 0 }}>Julie Ravelli</h1>
        <span style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <h2>Réalisatrice</h2>
          <h2>Cadreuse</h2>
          <h2>Monteuse</h2>
        </span>

        <span style={{ display: "flex", gap: 10 }}>
          <button style={{ width: "50%" }}>
            <a
              style={{ textDecorationLine: "none", color: "white", display: "flex", justifyContent: "center" }}
              href="#show-reel"
            >
              Show Reel
            </a>
          </button>
          <button style={{ width: "50%" }}>
            <a
              style={{ textDecorationLine: "none", color: "white", display: "flex", justifyContent: "center" }}
              href="#filmography"
            >
              Filmographie
            </a>
          </button>
        </span>
      </div>
    </header>
  );
}
