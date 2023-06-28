import { Box, LinearProgress } from "@mui/material";
import styles from "./styles";

const CallWaitingScreen = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>Our agents are busy at the moment. </Box>
      <Box sx={styles.subHeading}>
        Your approx. wait time is{" "}
        <Box component="span" sx={styles.time}>
          1 min.
        </Box>
      </Box>
      <LinearProgress variant="indeterminate" sx={styles.progressBar} />
      <Box sx={styles.thankingText}>
        Thanks for waiting, Someone should be there with you shortly.
      </Box>
    </Box>
  );
};

export default CallWaitingScreen;
