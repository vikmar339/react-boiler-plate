import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import WidgetFooter from "src/components/common/WidgetFooter";
import styles from "./styles";

type DefaultLayoutType = {
  children: React.ReactNode;
  onClose: Function;
};

const DefaultLayout = ({ children, onClose, ...rest }: DefaultLayoutType) => {
  return (
    <>
      <Box sx={styles.closeIcon} onClick={() => onClose()}>
        <CloseIcon />
      </Box>
      {children}
      <WidgetFooter />
    </>
  );
};

export default DefaultLayout;
