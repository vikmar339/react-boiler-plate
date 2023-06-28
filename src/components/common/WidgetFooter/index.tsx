import { Box, Link } from "@mui/material";
import { SxProps } from "@mui/system";
import styles from "./styles";

type WidgetFooterPropType = {
  customStyles?: SxProps;
};
const WidgetFooter = ({ customStyles }: WidgetFooterPropType) => {
  return (
    <Box
      component={Link}
      href="https://botshot.ai/"
      target="_blank"
      sx={{ ...styles.footer, ...customStyles } as SxProps}
    >
      <Box>Powered by</Box>
      <Box sx={styles.spanText}>
        <img
          src="https://d1kjz001kvkiw8.cloudfront.net/assets/footer-logo.webp"
          alt="footer-logo"
        />
      </Box>
    </Box>
  );
};

export default WidgetFooter;
