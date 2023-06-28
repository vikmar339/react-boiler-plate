import { Box } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import CallWaitingScreen from "src/components/common/CallWaitingScreen";
import CallEndIcon from "@mui/icons-material/CallEnd";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import CallIcon from "@mui/icons-material/Call";
import styles from "./styles";
import Peer from "peerjs";

// const VideoCallPeer = () => {
//   // Ref to store the remote connection object
//   const remoteConnectionRef = useRef(null);
//   const localVideoRef = useRef(null);
//   const remoteVideoRef = useRef(null);
//   const remotePeerRef = useRef(null);
//   const mediaStreamRef = useRef(null);
//   const [showLocal, setShowLocal] = useState(false);
//   const [showRemote, setShowRemote] = useState(false);
//   const [callInitiated, setCallInitiated] = useState(false);

//   const peer = new Peer(); // Generate a unique peer ID

//   peer.on("open", () => {
//     // Peer connection established
//     console.log("Connected with peer ID:", peer.id);
//   });

//   peer.on("close", () => {
//     console.log("Disconnected from PeerServer");
//   });

//   peer.on("disconnected", () => {
//     console.log("Disconbnee with peer ID:", peer.id);
//   });

//   useEffect(() => {
//     navigator.mediaDevices
//       .getUserMedia({ video: true, audio: true })
//       .then((stream) => {
//         mediaStreamRef.current = stream;
//         localVideoRef.current.srcObject = stream;
//         setShowLocal(true);

//         // peer.on("call", (call) => {
//         //   call.answer(stream);
//         //   call.on("stream", (remoteStream) => {
//         //     if (remoteVideoRef?.current)
//         //       remoteVideoRef.current.srcObject = remoteStream;
//         //     setShowRemote(true);
//         //   });
//         //   remotePeerRef.current = call.peer;
//         // });
//       })
//       .catch((error) => {
//         console.error("Error accessing media devices:", error);
//       });
//     peer.on("connection", (connection) => {
//       remoteConnectionRef.current = connection; // Store the remote connection object

//       // Handle incoming data
//       connection.on("data", (data) => {
//         console.log("Received data:", data);
//         // Handle the received data as needed
//       });
//     });
//     const keepAliveInterval = setInterval(sendKeepAliveMessage, 5000);

//     return () => {
//       clearInterval(keepAliveInterval);
//       if (mediaStreamRef.current) {
//         const videoTracks = mediaStreamRef.current.getVideoTracks();
//         videoTracks.forEach((track) => track.stop());
//       }
//       disconnectCall();
//     };
//   }, []);

//   const sendKeepAliveMessage = () => {
//     if (
//       remoteConnectionRef.current &&
//       remoteConnectionRef.current.open === false
//     ) {
//       console.log("disconnected");
//     } else {
//       console.log("connect");
//     }
//   };

//   // Function to initiate a call to the remote machine
//   const initiateCall = () => {
//     const remotePeerId = prompt("Enter remote peer ID:");
//     setCallInitiated(true);
//     const remoteConnection = peer.connect(remotePeerId); // Connect to the remote machine
//     remoteConnectionRef.current = remoteConnection; // Store the remote connection object
//     if (remotePeerId) {
//       const call = peer.call(remotePeerId, localVideoRef.current.srcObject);
//       call.on("stream", (remoteStream) => {
//         remoteVideoRef.current.srcObject = remoteStream;
//       });
//       remotePeerRef.current = remotePeerId;
//     }

//     sendData();
//   };

//   // Function to send data to the remote machine
//   const sendData = () => {
//     const message = "Hello, remote peer!";
//     remoteConnectionRef.current.send(message);
//   };

//   // Function to disconnect the call
//   const disconnectCall = () => {
//     if (remoteConnectionRef.current) {
//       remoteConnectionRef.current.close(); // Close the remote connection
//       remoteConnectionRef.current = null; // Reset the remote connection reference
//     }
//     peer.disconnect(); // Disconnect from the PeerServer
//     peer.destroy(); // Destroy the Peer object
//   };

//   return (
//     <Box sx={styles.wrapper}>
//       <Box sx={{ display: showRemote ? "none" : "block" }}>
//         {callInitiated && <CallWaitingScreen />}
//       </Box>
//       <Box
//         sx={styles.localVideo}
//         className={callInitiated ? "video_align_bottom" : ""}
//       >
//         <video ref={localVideoRef} autoPlay playsInline muted />
//         {!callInitiated && showLocal && (
//           <Box onClick={initiateCall} sx={styles.callIcon}>
//             <CallIcon />
//           </Box>
//         )}
//       </Box>
//       <div>
//         <video ref={remoteVideoRef} autoPlay playsInline muted />
//         {/* <button onClick={() => disconnectCall()}>Disconnect Call</button>
//         <Box sx={styles.overlay}>
//           <Box sx={styles.callIcons} onClick={toggleVideo}>
//             {!isVideoEnabled ? <VideocamOffIcon /> : <VideocamIcon />}
//           </Box>
//           <Box sx={styles.cutIcon}>
//             <CallEndIcon className="icon" />
//           </Box>
//           <Box sx={styles.callIcons} onClick={toggleAudio}>
//             {!isAudioEnabled ? <MicOffIcon /> : <MicIcon />}
//           </Box>
//         </Box> */}
//       </div>
//     </Box>
//   );
// };

const VideoCallPeer = (props) => {
  const { callEnded } = props;
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const remotePeerRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const [showLocal, setShowLocal] = useState(false);
  const [showRemote, setShowRemote] = useState(false);
  const [callInitiated, setCallInitiated] = useState(false);
  const [muted, setMuted] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [peer, setPeer] = useState();
  const [peerId, setPeerId] = useState("");

  useEffect(() => {
    const generateRandomId = () => {
      const randomString = Math.random().toString(36).substr(2, 9);
      return randomString;
    };
    const peerId = generateRandomId();
    const peer = new Peer(peerId); // Generate a unique peer ID
    setPeer(peer);
    // const interval = setInterval(() => {
    //   if (remotePeerRef.current?.peerConnection) {
    //     const { iceConnectionState, connectionState } =
    //       remotePeerRef.current.peerConnection;
    //     console.log("sdbhj", connectionState, iceConnectionState);
    //     peer.on("disconnect", (error) => {
    //       console.error("Peer error:", error);
    //     });
    //   }
    // }, 2000);
    return () => {
      disconnect();
      // clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (peer) {
      peer.on("open", () => {
        console.log("Connected with peer ID:", peer.id);
        setPeerId(peer.id);
      });

      peer.on("error", (error) => {
        console.error("Peer error:", error);
      });
      navigator.mediaDevices
        .getUserMedia({ video: isVideoEnabled, audio: true })
        .then((stream) => {
          mediaStreamRef.current = stream;
          localVideoRef.current.srcObject = stream;
          setShowLocal(true);
          peer.on("call", (call) => {
            call.answer(stream);
            call.on("stream", (remoteStream) => {
              remoteVideoRef.current.srcObject = remoteStream;
              setShowRemote(true);
            });
            remotePeerRef.current = call.peer;
          });
        })
        .catch((error) => {
          console.error("Error accessing media devices:", error);
        });
    }
  }, [peer, isVideoEnabled]);

  const handleCall = () => {
    const remotePeerId = prompt(
      "Thank you for your call! Could you please provide the recipient's ID :"
    );
    const remoteConnection = peer.connect(remotePeerId);
    if (remotePeerId) {
      setCallInitiated(true);
      const call = peer.call(remotePeerId, localVideoRef.current.srcObject);
      call.on("stream", (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream;
      });
      remotePeerRef.current = remoteConnection;
    }
    remoteConnection.on("open", () => {
      console.log("Connected to remote peer");
      setShowRemote(true);
    });
    remoteConnection.on("data", (data) => {
      console.log("Received data:", data);
      // Handle the received data as needed
    });
    remoteConnection.on("close", () => {
      console.log("Remote peer disconnected");
      disconnect(true);
      // Perform any necessary cleanup or UI updates when the remote peer disconnects
    });
    // setInterval(() => {
    //   console.log(
    //     "Connection stable:",
    //     remoteConnection.open &&
    //       remoteConnection.peerConnection &&
    //       remoteConnection.peerConnection.iceConnectionState === "connected"
    //   );
    // }, 2000);
  };

  const disconnect = (showThankYou = false) => {
    if (mediaStreamRef.current) {
      const videoTracks = mediaStreamRef.current.getVideoTracks();
      videoTracks.forEach((track) => track.stop());
    }
    if (peer) {
      remoteVideoRef.current = null;
      localVideoRef.current = null;
      peer.disconnect(); // Disconnect from the PeerServer
      peer.destroy();
    } // Destroy the Peer object
    if (showThankYou) {
      callEnded();
    }
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={{ display: showRemote ? "none" : "block" }}>
        {callInitiated && <CallWaitingScreen />}
      </Box>
      <Box
        sx={styles.localVideo}
        className={callInitiated || showRemote ? "video_align_bottom" : ""}
      >
        <video ref={localVideoRef} autoPlay playsInline muted={true} />
        {!callInitiated && showLocal && !showRemote && (
          <>
            <Box onClick={handleCall} sx={styles.callIcon}>
              <CallIcon />
            </Box>
            {peerId && <Box sx={styles.peerId̦}>Your Id: {peerId}</Box>}
          </>
        )}
      </Box>
      <Box sx={styles.localVideo}>
        {remoteVideoRef && (
          <>
            <video ref={remoteVideoRef} autoPlay playsInline muted={muted} />
          </>
        )}
        {showRemote && (
          <Box sx={styles.overlay}>
            <Box sx={styles.callIcons}>
              {/* {!isVideoEnabled ? <VideocamOffIcon /> : <VideocamIcon />} */}
            </Box>
            <Box sx={styles.cutIcon}>
              <CallEndIcon onClick={() => disconnect(true)} className="icon" />
            </Box>
            <Box sx={styles.callIcons}>
              {/* {!isAudioEnabled ? <MicOffIcon /> : <MicIcon />} */}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default VideoCallPeer;
