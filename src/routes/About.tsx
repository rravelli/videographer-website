export function About() {
  return (
    <div
      style={{
        backgroundColor: "rgb(26,26,26)",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        padding: 10,
      }}
    >
      <img
        src="/videographer-website/profile.png"
        height={200}
        width={200}
        style={{ margin: 100, borderRadius: 20, animation: "tada", animationDuration: "1s" }}
      />
      <p
        style={{
          color: "white",
          fontSize: "3em",
          textTransform: "uppercase",
          maxWidth: 1200,

          textAlign: "center",
          paddingLeft: 40,
          paddingRight: 40,
        }}
      >
        Lorem <strong style={{ fontSize: "2em" }}>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
        Maecenas ligula massa, <strong style={{ fontSize: "2em" }}>varius</strong> a, semper congue, euismod non, mi. Proin
        porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu
        massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor.
        Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue
        blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.
        Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
      </p>
    </div>
  );
}
