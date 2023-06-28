import { Box } from "@mui/material";
import { useEffect } from "react";
import styles from "./styles";
// import { templateJson } from "src/template-config";
import WhatsappForm from "src/components/common/WhatsappForm";

type chatWithUs = {
  ele: any;
  submitDetails: any;
  isWhatsAppEnabled?: boolean;
};

const ChatWithUs = (props: chatWithUs) => {
  // const isWhatsAppEnabled = templateJson?.config?.isWhatsAppEnabled;
  const { ele, submitDetails, isWhatsAppEnabled } = props;
  useEffect(() => {
    const element: any = document.getElementById("chatWrapper");
    if (element && ele) {
      element.appendChild(ele);
    }
  }, [ele]);


  return (
    <>
      <Box
        id="chatWrapper"
        sx={{
          ...styles.wrapper,
          display: !isWhatsAppEnabled ? "block" : "none",
        }}
      ></Box>
      {isWhatsAppEnabled && <WhatsappForm submitDetails={submitDetails} />}
    </>
  );
};

export default ChatWithUs;
