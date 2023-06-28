import CloseIcon from "@mui/icons-material/Close";
import { Box, Switch } from "@mui/material";
import styles from "./styles";
import { useAppSelector } from "src/redux/store";

type InfoPropType = {
  handleClose: Function;
  handleInfoIconToggle: Function;
  actionItems?: any;
  handleToggle: Function;
  whatsApp?: boolean;
  virtualTour?: boolean;
};

export type actions = {
  formDetails: boolean;
  label: string;
  icon: string;
  value: string;
  iconLabel: string;
  id: number;
};

const Info = ({
  handleClose,
  handleInfoIconToggle,
  actionItems,
  handleToggle,
  whatsApp,
  virtualTour,
}: InfoPropType) => {
  const theme = useAppSelector((state: any) => state.site.theme);
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.iconBox}>
        {actionItems.map((item: any) => (
          <Box
            onClick={() => handleInfoIconToggle(item)}
            sx={{
              ...styles.actionIcons,
              color: theme?.primary,
            }}
            key={item.id}
          >
            <Box
              sx={{
                color: theme?.primary,
              }}
              className="icon_label"
            >
              {item.label}
            </Box>
            {item.icon}
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          ...styles.infoBox,
          color: theme?.primary,
        }}
      >
        Need live assistance? We are here!
        <CloseIcon sx={styles.closeIcon} onClick={() => handleClose()} />
        <Box sx={styles.toggle}>
          <Box component={"span"}>Whatsapp</Box>
          <Switch
            onChange={() => handleToggle("whatsApp")}
            checked={whatsApp}
            color={"secondary"}
          />
        </Box>
        <Box sx={styles.toggle}>
          <Box component={"span"}>Virtual Tour</Box>
          <Switch
            onChange={() => handleToggle("virtualTour")}
            checked={virtualTour}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Info;
