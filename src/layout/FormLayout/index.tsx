import { Box } from "@mui/material";
import WidgetFooter from "src/components/common/WidgetFooter";
import WidgetHeader from "src/components/common/WidgetHeader";
import styles from './styles';

type FormLayoutType = {
  label: string;
  subLabel?: string;
  backForm: Function;
  onClose: Function;
  children: React.ReactNode;
};

const FormLayout = ({
  backForm,
  label,
  subLabel,
  onClose,
  children,
  ...rest
}: FormLayoutType) => {
  return (
    <>
      <WidgetHeader
        backForm={backForm}
        label={label}
        subLabel={subLabel}
        onClose={onClose}
      />
      <Box sx={styles.wrapperBody}>{children}</Box>
      <WidgetFooter />
    </>
  );
};

export default FormLayout;
