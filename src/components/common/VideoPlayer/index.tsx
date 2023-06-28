const VideoPlayer = (props: any) => {
  const {
    id,
    muted = false,
    src,
    autoplay = true,
    playsinline = true,
    poster = "",
    loop = false,
  } = props;

  return (
    <>
      <video
        id={id}
        playsInline={playsinline}
        poster={poster}
        autoPlay={autoplay}
        muted={muted}
        src={src}
        loop={loop}
      />
    </>
  );
};

export default VideoPlayer;
