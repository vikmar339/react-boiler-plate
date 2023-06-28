import ApartmentIcon from "@mui/icons-material/Apartment";
import ChatIcon from "@mui/icons-material/Chat";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import BotIcon from "./BotIcon";
import ChatBox from "./ChatBox";
import Info, { actions } from "./Info";
import styles from "./styles";
import { getTime } from "src/utils/time";
import { useAppDispatch } from "src/redux/store";
import { useQuery } from "react-query";
import fetcher from "src/dataProvider";
import { setTemplateConfig } from "src/redux/slices/siteDetails";
import { templateJson } from "src/template-config";

const ChatBot = (props: any) => {
  const { siteId } = props;
  const [showInfo, setShowInfo] = useState(true);
  const [showWidget, toggleShowWidget] = useState(false);
  const [clearInfoShow, setClearInfoShow] = useState(false);
  const [actionFormData, setActionFormData] = useState<actions>();
  const [isWhatsAppEnabled, setWhatsappEnabled] = useState(false);
  const [isVirtualTour, setVirtualTour] = useState(false);
  const [showWaiting, setShowWaiting] = useState(false);
  const [element, setElement] = useState<any>();
  const dispatch = useAppDispatch();

  const { data } = useQuery(
    ["templateInfo"],
    () => fetcher.get(`/api/v1/sites/${siteId}/?source=microsite`),
    { enabled: !!siteId }
  );

  useEffect(() => {
    if (!!data?.data) {
      const template = data.data.templateInfo[0].data;
      const theme = template.theme.props.config.light;
      let body = {
        primary: theme.props.themeColor["--primary"],
        buttonText: theme.props.button.props.secondary.props.color,
        buttonBackground:
          theme.props.button.props.secondary.props.backgroundColor,
      };
      dispatch(setTemplateConfig({ theme: body, siteId }));
    } else {
      let body = {
        primary: templateJson.themeColorCodes.palette.primary.main,
        buttonText: templateJson.themeColorCodes.button.primary.text,
        buttonBackground:
          templateJson.themeColorCodes.button.primary.gradient.combined,
      };
      dispatch(setTemplateConfig({ theme: body, siteId }));
    }
  }, [data?.data, dispatch, siteId]);

  const startTime: any = getTime("2023-06-23T15:00:00.000Z");
  const endTime: any = getTime("2023-06-23T22:00:00.000Z");

  const options = {
    timeZone: "Asia/Kolkata",
    hour12: false,
  };

  const convertTimeToIST = new Date().toLocaleString("en-US", options);
  const getCurrentTime = convertTimeToIST.split(",");
  const currentTime = getCurrentTime[1].trim();

  useEffect(() => {
    if (currentTime > startTime.fullTime && currentTime < endTime.fullTime) {
      setShowWaiting(false);
    } else {
      setShowWaiting(true);
    }
  }, []);

  const actionItems = useMemo(
    () => [
      {
        formDetails: false,
        label: "Live Stream",
        icon: <VideoCallIcon />,
        iconLabel: "Live Video Call",
        value: "video",
        id: 1,
      },
      {
        formDetails: false,
        label: "Property Tour",
        icon: <ApartmentIcon />,
        iconLabel: "Virtual Tour",
        value: "propertyTour",
        id: 2,
      },
      {
        formDetails: false,
        label: isWhatsAppEnabled ? "WhatsApp" : "Chat with us",
        iconLabel: isWhatsAppEnabled ? "WhatsApp" : "Chat with us",
        icon: isWhatsAppEnabled ? <WhatsAppIcon /> : <ChatIcon />,
        value: "chatWithUs",
        id: 3,
      },
    ],
    [isWhatsAppEnabled]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setShowInfo((prevShowInfo) => !prevShowInfo);
    }, 2000);
    if (showWidget) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [showWidget]);

  const handleInfoIconToggle = (data: actions) => {
    toggleShowWidget(true);
    if (!showWaiting) {
      setActionFormData(data);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const widgetOpen: any = document.getElementById("widget-open");
      if (widgetOpen) {
        widgetOpen.click();
      }
      const chatBot: any = document.getElementById("supportchatwidget");
      setElement(chatBot);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleToggle = (type: string) => {
    if (type === "whatsApp") {
      setWhatsappEnabled(!isWhatsAppEnabled);
    } else {
      setVirtualTour(!isVirtualTour);
    }
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={{ position: "relative" }}>
        {!showWidget && (
          <>
            {!clearInfoShow && showInfo && (
              <Info
                handleClose={() => {
                  setShowInfo(false);
                  setClearInfoShow(true);
                }}
                handleToggle={(type: string) => handleToggle(type)}
                actionItems={actionItems}
                whatsApp={isWhatsAppEnabled}
                virtualTour={isVirtualTour}
                handleInfoIconToggle={handleInfoIconToggle}
              />
            )}
            <BotIcon
              variant={"video"}
              showWidget={showWidget}
              toggleShowWidget={(value: boolean) => toggleShowWidget(value)}
            />
          </>
        )}
        <ChatBox
          showWidget={showWidget}
          element={element}
          toggleShowWidget={() => toggleShowWidget(false)}
          classes={showWidget ? "scale_up" : "remove_animation"}
          infoFormValues={actionFormData}
          actionItems={actionItems}
          isWhatsAppEnabled={isWhatsAppEnabled}
          isVirtualTour={isVirtualTour}
          showWaiting={showWaiting}
          setShowWaiting={setShowWaiting}
        />
      </Box>
    </Box>
  );
};

export default ChatBot;
