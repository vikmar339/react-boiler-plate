import CallEndIcon from "@mui/icons-material/CallEnd";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import styles from "./styles";

const VideoCall = () => {
  const videoRef = useRef<any>();
  const audioRef = useRef<any>();
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        audioRef.current.srcObject = stream;
      })
      .catch((error) => {
        console.error("Error accessing media devices:", error);
      });
    let timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const toggleVideo = () => {
    if (videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getVideoTracks();
      tracks.forEach((track: any) => {
        track.enabled = !track.enabled;
      });
      setIsVideoEnabled((prevEnabled) => !prevEnabled);
    }
  };

  const toggleAudio = () => {
    if (audioRef.current.srcObject) {
      const tracks = audioRef.current.srcObject.getAudioTracks();
      tracks.forEach((track: any) => {
        track.enabled = !track.enabled;
      });
      setIsAudioEnabled((prevEnabled) => !prevEnabled);
    }
  };

  return isLoading ? (
    <Box>...Loading</Box>
  ) : (
    <>
      <Box sx={styles.wrapper}>
        <video ref={videoRef} autoPlay />
        <audio ref={audioRef} autoPlay muted />
      </Box>
      <Box sx={styles.overlay}>
        <Box sx={styles.callIcons} onClick={toggleVideo}>
          {!isVideoEnabled ? <VideocamOffIcon /> : <VideocamIcon />}
        </Box>
        <Box sx={styles.cutIcon}>
          <CallEndIcon className="icon" />
        </Box>
        <Box sx={styles.callIcons} onClick={toggleAudio}>
          {!isAudioEnabled ? <MicOffIcon /> : <MicIcon />}
        </Box>
      </Box>
    </>
  );
};

export default VideoCall;
