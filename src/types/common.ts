import { SxProps } from "@mui/material";
import { actions } from "../components/feature/ChatBot/Info";

export type Styles = {
  [key: string]: SxProps;
};

export interface WidgetBoxType {
  classes: string;
  showWidget: boolean;
  toggleShowWidget: Function;
  infoFormValues?: actions;
  element?: any;
  actionItems?: any;
  isWhatsAppEnabled?: boolean;
  isVirtualTour?: boolean;
  showWaiting: boolean;
  setShowWaiting: Function;
  peer?: any;
}

export type ComponentData = {
  label?: string;
  value: string;
  subLabel?: string;
  layoutType?: string;
  type?: string;
};

export interface UserDetailsForm {
  name: string;
  email: string;
  contactNumber: string;
  formFilled: boolean;
}
