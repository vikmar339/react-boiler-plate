import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/material";
import Popover from "@mui/material/Popover";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import DateComp from "./Calendar";
import Counter from "./Counter";
import styles from "./styles";

const occupancy = [
  { label: "Adults", value: "adult" },
  { label: "Kids", value: "child" },
  { label: "Rooms", value: "room" },
];

type FormData = {
  stayPeriod: [Date, Date];
  occupancy: {
    adult: number;
    child: number;
    room: number;
  };
};

const CalendarWidget = () => {
  const [calendarAnchor, setCalendarAnchor] = useState<HTMLElement | null>(
    null
  );
  const [counterAnchor, setCounterAnchor] = useState<HTMLElement | null>(null);

  const { control, watch, setValue } = useForm<FormData>({
    defaultValues: {
      stayPeriod: [new Date(), new Date(+new Date() + 86400000)],
      occupancy: {
        adult: 1,
        child: 0,
        room: 1,
      },
    },
  });

  const handleCalenderClick = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCalendarAnchor(event.currentTarget);
  };

  const handleCalenderClose = () => {
    setCalendarAnchor(null);
  };

  const handleCounterClose = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCounterAnchor(null);
  };

  const adultCount = watch("occupancy.adult");
  const childCount = watch("occupancy.child");
  const roomCount = watch("occupancy.room");

  const guestsCount = adultCount + childCount;

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.contentWrapper}>
        <Box sx={styles.content}>
          <Box sx={styles.title}>Check-in & Check Out</Box>
          <Box sx={styles.value}>
            <DateComp
              key="date"
              name="stayPeriod"
              control={control}
              handleClick={handleCalenderClick}
              handleClose={handleCalenderClose}
              calendarAnchor={calendarAnchor}
              setCalendarAnchor={setCalendarAnchor}
            />
          </Box>
        </Box>

        <Box
          sx={styles.content}
          onClick={(event) => setCounterAnchor(event.currentTarget)}
        >
          <Box sx={styles.title}>Guest</Box>
          <Box sx={styles.value}>
            {guestsCount} {guestsCount > 1 ? "Guests" : "Guest"}, {roomCount}{" "}
            {roomCount > 1 ? "Rooms" : "Room"}
            <KeyboardArrowDownIcon sx={styles.arrow} />
          </Box>
        </Box>
        <Popover
          key="counter"
          id={counterAnchor ? "counter-popover" : undefined}
          open={!!counterAnchor}
          onClose={handleCounterClose}
          anchorEl={counterAnchor}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          sx={styles.popover}
        >
          <Box>
            {occupancy?.map(({ label, value }) => (
              <Fragment key={value}>
                <Counter
                  label={label}
                  name={`occupancy.${value}`}
                  control={control}
                  setOnRoomChange={setValue}
                  watch={watch}
                />
                <Box sx={styles.divider} />
              </Fragment>
            ))}
          </Box>
        </Popover>
      </Box>
    </Box>
  );
};

export default CalendarWidget;
