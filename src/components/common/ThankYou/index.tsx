import { Box } from "@mui/material";
import styles from "./styles";

const ThankYou = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.title}>Thank you for the booking</Box>
      <Box sx={styles.imageWrapper}>
        <Box
          component="img"
          src="https://d1kjz001kvkiw8.cloudfront.net/assets/calendar.webp"
          alt="calender"
          sx={styles.image}
        />
      </Box>
      <Box sx={styles.bookingText}>Your Booking has been confirmed</Box>
      <Box sx={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
        necessitatibus debitis culpa.
      </Box>
    </Box>
  );
};

export default ThankYou;
