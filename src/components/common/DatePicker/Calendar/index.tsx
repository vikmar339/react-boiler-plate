import { Box, IconButton, Popover } from "@mui/material";
import { MouseEvent, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateRangeIcon from "@mui/icons-material/DateRange";
import styles from "./styles";
import { formatDate } from "../dateFunction";

type CalendarProps = {
  setDate: (val: string) => void;
  minDate?: string;
  maxDate?: string;
  readOnly?: boolean;
};

const CalendarIcon = () => {
  return (
    <Box
      sx={styles.calendarIcon}
      component="img"
      src="./assets/calendarIcon.svg"
      alt="calendar-icon"
    />
  );
};

const Calendar = ({
  setDate,
  readOnly,
  minDate = "",
  maxDate = "",
}: CalendarProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const [calendarAnchor, setCalendarAnchor] = useState<HTMLElement | null>(
    null
  );

  const startRange = new Date(minDate);
  const endRange = new Date(maxDate);

  useEffect(() => {
    if (minDate) {
      setStartDate(new Date(minDate));
    }
  }, [minDate]);

  const onChangeHandler = (date: any) => {
    setStartDate(date);
    setDate(formatDate(date));
    handleClose();
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setCalendarAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setCalendarAnchor(null);
  };

  const open = !!calendarAnchor;
  const id = open ? "calendar-popover" : undefined;

  return (
    <Box>
      <IconButton onClick={handleClick} disabled={readOnly}>
        <DateRangeIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        onClose={handleClose}
        anchorEl={calendarAnchor}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={styles.calendarWrapper}
      >
        <DatePicker
          selected={startDate}
          startDate={startRange}
          endDate={endRange}
          onChange={(date) => onChangeHandler(date)}
          inline
          minDate={startDate}
        />
      </Popover>
    </Box>
  );
};

export default Calendar;
