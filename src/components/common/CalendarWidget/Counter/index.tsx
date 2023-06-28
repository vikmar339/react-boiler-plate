import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Box, FormControl, IconButton } from "@mui/material";
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form";
import styles from "./styles";

const Counter = <T extends FieldValues>({
  label,
  name,
  control,
  errors,
  setOnRoomChange,
  watch,
  customStyles,
  counterAnchor,
  setCounterAnchor,
  handleClick,
  handleClose,
  fullWidth,
  className,
  rules,
  ...rest
}: any) => {
  const handleRemoveIconClick = (
    field: ControllerRenderProps<FieldValues, string>
  ) => {
    field.onChange(field.value - 1 < 0 ? 0 : field.value - 1);
    if (
      name === "occupancy.adult" &&
      watch("occupancy.room") > watch("occupancy.adult")
    ) {
      setOnRoomChange("occupancy.room", watch("occupancy.adult"));
    } else if (watch("occupancy.adult") < watch("occupancy.room")) {
      setOnRoomChange("occupancy.adult", watch("occupancy.room"));
    }
    if (watch("occupancy.adult") < 1 || watch("occupancy.room") < 1) {
      setOnRoomChange("occupancy.adult", 1);
      setOnRoomChange("occupancy.room", 1);
    }
  };

  const handleAddIconClick = (
    field: ControllerRenderProps<FieldValues, string>
  ) => {
    if (name === "occupancy.room" && watch("occupancy.room") < 20) {
      field.onChange(field.value + 1);
      if (watch("occupancy.adult") === field.value) {
        setOnRoomChange("occupancy.adult", field.value + 1);
      }
      if (watch("occupancy.adult") < watch("occupancy.room")) {
        setOnRoomChange("occupancy.adult", watch("occupancy.room"));
      }
    } else if (name === "occupancy.adult" && watch("occupancy.adult") < 50) {
      field.onChange(field.value + 1);
    } else if (name === "occupancy.child" && watch("occupancy.child") < 50) {
      field.onChange(field.value + 1);
    }
  };

  return (
    <Controller
      render={({ field }) => {
        return (
          <FormControl
            sx={customStyles}
            fullWidth={fullWidth}
            className={className}
          >
            <>
              <Box sx={styles.counterWrapper}>
                <Box>{label}</Box>
                <Box sx={styles.iconWrapper}>
                  <IconButton onClick={() => handleRemoveIconClick(field)}>
                    <RemoveCircleIcon sx={styles.removeIcon} />
                  </IconButton>
                  <Box sx={styles.countWrapper}>{field.value}</Box>
                  <IconButton onClick={() => handleAddIconClick(field)}>
                    <AddCircleIcon sx={styles.addIcon} />
                  </IconButton>
                </Box>
              </Box>
            </>
          </FormControl>
        );
      }}
      name={name as Path<T>}
      control={control}
      rules={rules}
      {...rest}
    />
  );
};

export default Counter;
