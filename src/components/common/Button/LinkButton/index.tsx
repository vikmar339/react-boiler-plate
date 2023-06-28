import { Box, SxProps } from "@mui/material";
import { ComponentProps } from "react";
import { Link } from "react-router-dom";
import SimpleButton from "../SimpleButton";
import styles from "./styles";

type LinkButtonProps = ComponentProps<typeof Link> &
  ComponentProps<typeof SimpleButton>;

const LinkButton = ({ disabled, customStyles, ...rest }: LinkButtonProps) => {
  return (
    <Box sx={{ ...styles.wrapper, ...customStyles } as SxProps}>
      {disabled ? (
        <SimpleButton disabled {...rest} />
      ) : (
        <Link {...rest}>
          <SimpleButton {...rest} />
        </Link>
      )}
    </Box>
  );
};

export default LinkButton;
