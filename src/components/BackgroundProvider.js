// 백그라운드 컴포넌트
function BackgroundProvider(props) {
  return (
    <div
      style={
        props.imgSrc.includes("jpeg", "png", "jpg")
          ? {
              background: `url(${props.imgSrc})center center`,
              backgroundSize: "cover",
              width: "100%",
              position: "relative",
              top: "0",
              display: "flex",
              overflow: "hidden",
            }
          : {
              width: "100%",
              background: props.imgSrc,
              position: "relative",
              top: "0",
              display: "flex",
              overflow: "hidden",
            }
      }
    >
      {props.children}
    </div>
  );
}

BackgroundProvider.defaultProps = {
  imgSrc: "#ffffff",
};

export default BackgroundProvider;
