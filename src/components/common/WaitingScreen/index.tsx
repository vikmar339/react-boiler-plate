import { Box } from "@mui/material";
import styles from "./styles";
import { getTime } from "src/utils/time";
import { useAppSelector } from "src/redux/store";

type WaitingScreenProps = {
  showWaiting: boolean;
  setShowWaiting: Function;
};

const WaitingScreen = ({ setShowWaiting, showWaiting }: WaitingScreenProps) => {
  const startTime: any = getTime("2023-06-23T15:00:00.000Z");
  const endTime: any = getTime("2023-06-23T22:00:00.000Z");

  const theme = useAppSelector((state) => state.site.theme);

  // const getCountryTimeFromGMT = (country: any, gmtOffset: any, zone: any) => {
  //   const currentDate = new Date(zone);
  //   const currentGMTTime = currentDate.getTime();
  //   const gmtOffsetMs = gmtOffset * 60 * 60 * 1000;
  //   const countryTime = new Date(currentGMTTime + gmtOffsetMs);
  //   const time = countryTime.toLocaleString(undefined, { timeZone: country });
  //   const [, timeString] = time.split(", ");
  //   const [hourString, minute] = timeString.split(":");
  //   let hour = parseInt(hourString, 10);
  //   hour = hour === 0 ? 12 : hour;
  //   const hour12 = hour > 12 ? hour - 12 : hour;
  //   const meridian = hour > 12 ? "PM" : "AM";
  //   return {
  //     fullTime: `${hour12}:${minute}`,
  //     period: meridian,
  //   };
  // };

  // const zoneCountryStartTime = getCountryTimeFromGMT(
  //   "America/Toronto",
  //   -4.0,
  //   "2023-06-23T15:00:00.000Z"
  // );

  // const zoneCountryEndTime = getCountryTimeFromGMT(
  //   "America/Toronto",
  //   -4.0,
  //   "2023-06-23T22:00:00.000Z"
  // );

  const getFullTime = () => {
    const date = new Date()?.toLocaleString();
    const [, timeString] = date.split(", ");
    const [hourString, minutes] = timeString.split(":");
    let hour = parseInt(hourString, 10);
    hour = hour === 0 ? 12 : hour;
    const hour12 = hour > 12 ? hour - 12 : hour;
    const meridian = hour > 12 ? "PM" : "AM";
    return `${hour12}:${minutes} ${meridian}`;
  };

  const handleClick = () => {
    setShowWaiting(!showWaiting);
  };

  return (
    <Box sx={{ ...styles.wrapper, backgroundColor: theme.primary }}>
      <Box sx={styles.experts}>
        <img src="assets/experts.png" alt="experts" />
      </Box>
      <Box sx={styles.title}>Our experts will be available from </Box>
      <Box sx={styles.time}>
        {/* <Box>Availability Time:</Box> */}
        <Box sx={styles.timeZone}>
          <Box component="span" sx={styles.timeValue}>
            {startTime.hour}:{startTime.minute}
          </Box>
          {startTime.period}
          <Box component="span" sx={styles.to}>
            to
          </Box>
          <Box component="span" sx={styles.timeValue}>
            {endTime.hour}:{endTime.minute}
          </Box>
          {endTime.period}
        </Box>
      </Box>
      <Box sx={styles.exploreText}>
        Want to explore more?{" "}
        <Box component="span" sx={styles.exploreLink} onClick={handleClick}>
          Click here
        </Box>
      </Box>
      <Box sx={styles.localTime}>Local time : {getFullTime()}</Box>
    </Box>
  );
};

export default WaitingScreen;
