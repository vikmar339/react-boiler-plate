import { Box, FormControl } from "@mui/material";
import Popover from "@mui/material/Popover";
import DatePicker from "react-datepicker";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, FieldValues, Path } from "react-hook-form";
import styles from "./styles";
import { Fragment } from "react";

const months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const DateSelect = <T extends FieldValues>({
  name,
  control,
  fullWidth = true,
  rules,
  customStyles,
  className,
  handleClick,
  handleClose,
  calendarAnchor,
  setCalendarAnchor,
  ...rest
}: any) => {
  const open = !!calendarAnchor;
  const id = open ? "calendar-popover" : undefined;

  const todayTime = new Date();

  const renderDayContents = (dayOfMonth: number, date?: Date | undefined) => {
    return (
      <>
        <Box sx={styles.calendarDate}>
          <Box sx={styles.dateValue}>{dayOfMonth}</Box>
        </Box>
      </>
    );
  };

  return (
    <Controller
      render={({ field }) => {
        const [startDate, endDate] = field?.value || "";

        const dates = field.value?.map((item: Date) => ({
          day: item?.getDate() ?? "-",
          month: months[item?.getMonth()] ?? "-",
          year: item?.getFullYear().toString() ?? "-",
        }));

        return (
          <FormControl
            sx={customStyles}
            fullWidth={fullWidth}
            className={className}
          >
            <>
              <Box onClick={handleClick}>
                <Box sx={styles.value}>
                  {dates?.map(({ day, month, year }: any, index: any) => {
                    return (
                      <Fragment key={`${day}${index}`}>
                        <Box>{`${day}/${month}/${year}`}</Box>
                        {index === 0 && "-"}
                      </Fragment>
                    );
                  })}
                  <KeyboardArrowDownIcon sx={styles.arrow} />
                </Box>
              </Box>

              <Popover
                id={id}
                open={open}
                onClose={handleClose}
                anchorEl={calendarAnchor}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                sx={styles.calendarWrapper}
              >
                <Box sx={styles.wrapper}>
                  <DatePicker
                    selected={startDate}
                    onChange={(dateValue: any) => {
                      field.onChange([dateValue[0], dateValue[1]]);
                    }}
                    startDate={startDate}
                    endDate={endDate}
                    renderDayContents={renderDayContents}
                    selectsRange
                    inline
                    minDate={todayTime}
                  />
                </Box>
              </Popover>
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
export default DateSelect;
