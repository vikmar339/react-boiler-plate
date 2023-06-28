import { Box } from "@mui/material";
import { Pannellum } from "pannellum-react";

const Three60 = (props) => {
  const {
    imageUrl = "https://d1kjz001kvkiw8.cloudfront.net/assets/three60-view.webp",
  } = props;

  return (
    <Box className="three60-wrapper">
      <Pannellum
        image={imageUrl}
        yaw={300}
        hfov={110}
        autoLoad
        autoRotate={0}
        showZoomCtrl={false}
        mouseZoom={false}
      ></Pannellum>
    </Box>
  );
};

export default Three60;
