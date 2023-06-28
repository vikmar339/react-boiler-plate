import { Box } from "@mui/material";
import Three60 from "src/components/common/Three60View/three60";
import styles from "./styles";
import { useState } from "react";
import Button from "src/components/common/Button";

const PropertyTour = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  return (
    <Box sx={styles.wrapper}>
      {showOverlay && (
        <Box sx={styles.overlay}>
          <Box>
            <img
              src="https://d1kjz001kvkiw8.cloudfront.net/assets/three60.svg"
              alt="three60"
            />
          </Box>
          <Button
            onClick={() => setShowOverlay(false)}
            label={"Start 360 Tour"}
            customStyles={{ width: "70%" }}
          />
        </Box>
      )}
      <Three60 />
    </Box>
  );
};

export default PropertyTour;
