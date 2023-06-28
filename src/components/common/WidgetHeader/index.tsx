import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import styles from "./styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type WidgetHeaderPropType = {
  label: string;
  subLabel?: string;
  backForm: Function;
  onClose: Function;
};

const WidgetHeader = ({
  label,
  backForm,
  onClose,
  subLabel,
}: WidgetHeaderPropType) => {
  return (
    <Box sx={styles.wrapper}>
      <ArrowBackIcon onClick={() => backForm()} sx={styles.pointer} />
      <Box sx={styles.labelWrapper}>
        <Box sx={styles.label}>{label}</Box>
        {subLabel && <Box sx={styles.subLabel}>{subLabel}</Box>}
      </Box>
      <CloseIcon onClick={() => onClose()} sx={styles.pointer} />
    </Box>
  );
};

export default WidgetHeader;
