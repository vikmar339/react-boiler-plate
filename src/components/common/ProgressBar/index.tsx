import LinearProgress from "@mui/material/LinearProgress";
import { useState, useEffect } from "react";
import styles from "./styles";
import { Box } from "@mui/material";
import { useAppSelector } from "src/redux/store";

type ProgressBarType = {
  setBiddingPopup: Function;
};

const ProgressBar = ({ setBiddingPopup }: ProgressBarType) => {
  const [progress, setProgress] = useState(100);
  const theme = useAppSelector((state) => state.site.theme);

  useEffect(() => {
    const startTimestamp = Date.now();
    const duration = 10000;

    const animateProgress = () => {
      const now = Date.now();
      const elapsedTime = now - startTimestamp;
      const remainingTime = duration - elapsedTime;
      const progressValue = (remainingTime / duration) * 100;

      if (progressValue <= 0) {
        setProgress(0);
        setBiddingPopup(false);
        clearInterval(timer);
      } else {
        setProgress(progressValue);
      }
    };

    const timer = setInterval(animateProgress, 100);

    return () => {
      clearInterval(timer);
    };
  }, [setBiddingPopup, setProgress]);

  return (
    <Box
      sx={{
        ...styles.progressBarWrapper,
      }}
    >
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          ...styles.progressBar,
          "& .MuiLinearProgress-bar": {
            backgroundColor: theme?.primary,
          },
        }}
      />
    </Box>
  );
};

export default ProgressBar;
