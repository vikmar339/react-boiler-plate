import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
  lazy,
} from "react";
import Button from "src/components/common/Button";
import CalendarWidget from "src/components/common/CalendarWidget";
import ComingSoon from "src/components/common/ComingSoon";
import VideoPlayer from "src/components/common/VideoPlayer";
import Layout, { LayoutTypes } from "src/layout";
import {
  ComponentData,
  UserDetailsForm,
  WidgetBoxType,
} from "src/types/common";
import styles from "./styles";
import WaitingScreen from "src/components/common/WaitingScreen";
import { useAppSelector } from "src/redux/store";

const ChatWithUs = lazy(() => import("../../Form/ChatWithUs"));
const BidNow = lazy(() => import("../../Form/BidNow"));
const ThankYou = lazy(() => import("src/components/common/ThankYou"));
const WidgetForm = lazy(() => import("src/components/common/WidgetForm"));
const VirtualTour = lazy(
  () => import("src/components/feature/Form/VirtualTour")
);
const PropertyTour = lazy(() => import("../../Form/PropertyTour"));
const VideoCallPeer = lazy(() => import("../../VideoCallScreen/VideoCallPeer"));

const ChatBox = ({
  classes,
  showWidget,
  toggleShowWidget,
  infoFormValues,
  element,
  actionItems,
  isWhatsAppEnabled,
  isVirtualTour,
  showWaiting,
}: WidgetBoxType) => {
  const theme = useAppSelector((state: any) => state.site.theme);
  const VideoBunny = useRef<any>(null);
  const [playVideo, setPlayVideo] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedFormValue, setSelectedFormValue] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [pageType, setPageType] = useState("landingPage");
  const [dummy, setDummy] = useState(false);
  const [selectedFormType, setSelectedFormType] = useState<ComponentData>({
    label: "",
    value: "",
    subLabel: "",
  });
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    contactNumber: "",
    formFilled: false,
  });

  useEffect(() => {
    let timer: any = null;
    if (!showForm && (!showWaiting || dummy)) {
      let videoElement = VideoBunny?.current.children[0];
      videoElement.pause();
      if (showWidget && VideoBunny?.current?.children[0]) {
        timer = setTimeout(() => {
          videoElement.currentTime = 0;
          if (VideoBunny) {
            VideoBunny.current.children[0].play();
          }
          setShowFooter(true);
        }, 700);
      }
    }
    return () => {
      setShowFooter(false);
      clearTimeout(timer);
      setPlayVideo(false);
    };
  }, [showWidget, showForm, dummy]);

  useEffect(() => {
    const video = document.querySelector("video") as HTMLVideoElement;

    const updateProgress = () => {
      const progressValue = (video.currentTime / video.duration) * 100;
      setProgress(progressValue);
    };

    if (video) {
      video.addEventListener("timeupdate", updateProgress);
    }
    return () => {
      if (video) {
        video.removeEventListener("timeupdate", updateProgress);
      }
    };
  });

  const updateComponentDetails = ({
    label,
    value = "",
    subLabel = "",
    layoutType = "FormLayout",
    type = "",
  }: ComponentData) => {
    switch (type) {
      case "dynamic":
        setSelectedFormType({
          label: label,
          value: value,
          subLabel: subLabel,
          layoutType: layoutType,
        });
        break;
      case "bidNow":
        setSelectedFormType({
          label: "Room Booking",
          value: "bidNow",
          subLabel: "Please tell us your requirement via",
          layoutType: layoutType,
        });
        break;
      case "empty":
        setSelectedFormType({
          label: "",
          value: "",
          subLabel: "",
          layoutType: "",
        });
        break;
      case "thankYou":
        setSelectedFormType({
          label: "Thank You",
          value: "thankYou",
          subLabel: "",
          layoutType: "DefaultLayout",
        });
        break;
      case "waiting":
        setSelectedFormType({
          label: "",
          value: "",
          subLabel: "",
          layoutType: "DefaultLayout",
        });
        break;
      default:
        return;
    }
  };

  const handleFormAction = useCallback(
    (value: any) => {
      setShowForm(true);
      setSelectedFormValue(value.value);
      if (formDetails.formFilled) {
        updateComponentDetails({
          type: "dynamic",
          label: value.label,
          value: value.value,
        });
      } else {
        updateComponentDetails({
          type: "dynamic",
          label: value.label,
          value: "detailsForm",
        });
      }
    },
    [formDetails.formFilled]
  );

  useEffect(() => {
    if (infoFormValues) {
      handleFormAction(infoFormValues);
    }
  }, [handleFormAction, infoFormValues]);

  const togglePageType = () => {
    if (pageType === "bidNow") {
      if (selectedFormType.value === "bidNow") {
        setPageType("landingPage");
        setShowForm(false);
        updateComponentDetails({ type: "empty", value: "" });
      }
      updateComponentDetails({ type: "bidNow", value: "bidNow" });
    } else {
      setShowForm(false);
      updateComponentDetails({ type: "empty", value: "" });
    }
  };

  const closeFormAction = () => {
    togglePageType();
  };

  const updateUserDetails = (details: UserDetailsForm) => {
    setFormDetails({ ...details });
    updateComponentDetails({
      type: "dynamic",
      label: selectedFormType.label,
      value: selectedFormValue,
    });
  };

  const formMapper: Record<string, JSX.Element | boolean> = {
    chatWithUs: (
      <ChatWithUs
        ele={element}
        isWhatsAppEnabled={isWhatsAppEnabled}
        submitDetails={() =>
          updateComponentDetails({
            type: "thankYou",
            value: "thankYou",
            layoutType: "DefaultLayout",
          })
        }
      />
    ),
    video: (
      <VideoCallPeer
        callEnded={() =>
          updateComponentDetails({
            type: "thankYou",
            value: "thankYou",
            layoutType: "DefaultLayout",
          })
        }
      />
    ),
    propertyTour: isVirtualTour ? (
      <VirtualTour
        submitDetails={() =>
          updateComponentDetails({
            type: "thankYou",
            value: "thankYou",
            layoutType: "DefaultLayout",
          })
        }
      />
    ) : (
      <PropertyTour />
    ),
    comingSoon: <ComingSoon />,
    thankYou: <ThankYou />,
    detailsForm: <WidgetForm updateUserDetails={updateUserDetails} />,
    bidNow: (
      <BidNow
        iconList={actionItems}
        handleFormAction={handleFormAction}
        toggleBuy={() => {
          updateComponentDetails({
            type: "thankYou",
            value: "thankYou",
            layoutType: "DefaultLayout",
          });
        }}
      />
    ),
  };

  return (
    <Box sx={styles.wrapper} className={classes} ref={VideoBunny}>
      {!showForm && (!showWaiting || dummy) && (
        <>
          <VideoPlayer
            id="myVideo"
            muted={muted}
            src="https://d28fok4odypdh0.cloudfront.net/hotel-video-cli1riq7u000e0jx31dbmffq2.mp4"
            autoplay={false}
            loop={true}
          />
          {showWaiting && (
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
          )}
        </>
      )}
      {!showForm && showWidget && (
        <Layout onClose={() => toggleShowWidget()}>
          {!showWaiting || dummy ? (
            <Box sx={styles.overlay}>
              <Box className="play_toggle">
                {playVideo ? (
                  <img
                    onClick={() => {
                      VideoBunny?.current.children[0].play();
                      setPlayVideo(false);
                    }}
                    src="https://d1kjz001kvkiw8.cloudfront.net/assets/play.svg"
                    alt="play"
                  />
                ) : (
                  <img
                    onClick={() => {
                      VideoBunny?.current.children[0].pause();
                      setPlayVideo(true);
                    }}
                    src="https://d1kjz001kvkiw8.cloudfront.net/assets/pause.svg"
                    alt="pause"
                  />
                )}
              </Box>
              <Box className="header">
                <Box sx={styles.soundIcon}>
                  {muted ? (
                    <VolumeOffIcon onClick={() => setMuted(!muted)} />
                  ) : (
                    <VolumeUpIcon onClick={() => setMuted(!muted)} />
                  )}
                </Box>
              </Box>
              <Box sx={styles.widgetWrapper}>
                <CalendarWidget />
              </Box>

              {showFooter && (
                <Box sx={styles.footer}>
                  <Box sx={styles.iconList}>
                    {actionItems.map((item: any) => (
                      <Button
                        key={item.id}
                        as={"IconButton"}
                        label={item.iconLabel}
                        animate={true}
                        onClick={() => handleFormAction(item)}
                        labelClick={() => handleFormAction(item)}
                      >
                        {item.icon}
                      </Button>
                    ))}
                  </Box>
                  <Box sx={styles.bidContainer}>
                    <Box
                      className="buy_now"
                      sx={{
                        backgroundColor: theme?.primary,
                      }}
                    >
                      <Box className="left">
                        <Box className="amount">Rs. 5000</Box>
                        <Box className="description">Recommended Price</Box>
                      </Box>
                      <Button
                        secondary={true}
                        label={"Buy Now"}
                        onClick={() => {
                          setShowForm(true);
                          updateComponentDetails({
                            type: "thankYou",
                            value: "thankYou",
                            layoutType: "DefaultLayout",
                          });
                        }}
                      />
                    </Box>
                    <Box className="divider_text">
                      Or else want a price of your Choice?
                    </Box>
                    <Button
                      secondary={true}
                      label={"Bid Now"}
                      customStyles={{ width: "100%", border: "none" }}
                      onClick={() => {
                        setShowForm(true);
                        updateComponentDetails({
                          type: "bidNow",
                          value: "bidNow",
                        });
                        setPageType("bidNow");
                      }}
                    />
                  </Box>
                </Box>
              )}
            </Box>
          ) : (
            <WaitingScreen showWaiting={dummy} setShowWaiting={setDummy} />
          )}
        </Layout>
      )}
      {showForm && (
        <Suspense fallback={<div>...Loading</div>}>
          <Layout
            as={selectedFormType.layoutType as LayoutTypes}
            backForm={() => closeFormAction()}
            label={selectedFormType.label}
            subLabel={selectedFormType.subLabel}
            onClose={() => {
              setShowForm(false);
              toggleShowWidget();
            }}
          >
            {formMapper[selectedFormType.value]}
          </Layout>
        </Suspense>
      )}
    </Box>
  );
};

export default ChatBox;
