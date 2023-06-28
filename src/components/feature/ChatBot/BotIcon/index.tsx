import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import VideoPlayer from "src/components/common/VideoPlayer";
import styles from "./styles";
import { useAppSelector } from "src/redux/store";

interface BotIconType {
  variant: string;
  showWidget: boolean;
  toggleShowWidget: Function;
}

const BotIcon = ({ variant, showWidget, toggleShowWidget }: BotIconType) => {
  const theme = useAppSelector((state: any) => state.site.theme);
  return (
    <Box sx={styles.widgetBox}>
      <Box onClick={() => toggleShowWidget(!showWidget)} className="icon_wrap">
        {variant === "video" ? (
          <>
            <VideoPlayer
              src="https://d28fok4odypdh0.cloudfront.net/hotel-video-cli1riq7u000e0jx31dbmffq2.mp4"
              muted={true}
              loop={true}
              sx={{
                borderColor: theme?.primary,
              }}
              poster="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            />
          </>
        ) : !showWidget ? (
          <ChatIcon className="icon" />
        ) : (
          <CloseIcon className="icon" />
        )}
      </Box>
    </Box>
  );
};

export default BotIcon;
