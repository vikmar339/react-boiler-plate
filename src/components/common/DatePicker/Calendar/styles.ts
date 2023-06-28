import { templateJson } from "src/template-config";
import { Styles } from "src/types/common";

const styles: Styles = {
  calendarIcon: {
    position: "relative",
    height: "14px",
    color: "custom.label",
  },

  calendarDate: {
    position: "relative",
    fontSize: "14px",
    minWidth: "50px",
    minHeight: "50px",
    padding: "8px",
  },

  calendarWrapper: {
    position: "absolute",
    top: "12px",
    left: "55px",
    "&>div": {
      fontSize: "12px",
      color: "#333333",
      borderRadius: "5px",
    },

    "& .react-datepicker": {
      fontFamily: "inherit",
      border: "none",
    },

    "& .react-datepicker__month-container": {
      width: "335px",
    },

    "& .react-datepicker__header": {
      marginBottom: "0px",
      backgroundColor: "white",
      borderColor: "white",
      paddingBottom: "0",
    },

    "& .react-datepicker__current-month": {
      fontSize: "15px",
      margin: "0 70px 8px 70px",
      padding: "12px 10px",
      color: templateJson.themeColorCodes.calendarWidget.datePicker.month,
      fontWeight: 600,
      border: "1px solid lightgrey",
      borderRadius: "4px",
    },

    "& .react-datepicker__day-names": {
      typography: "flexAlignCenter",
      margin: "0",
      padding: "0",
      fontWeight: 500,
      height: "30px",
      marginBottom: "16px",
      background:
        "linear-gradient(to top, #e9ecec 100%, #dcdddf 52%, #c4c5c7 0% )",
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
    },

    "& .react-datepicker__navigation--previous": {
      left: "85px",
      top: "16px",
    },

    "& .react-datepicker__navigation--next": {
      right: "85px",
      top: "16px",
    },

    "& .react-datepicker__day": {
      color: templateJson.themeColorCodes.calendarWidget.datePicker.dates,
      fontSize: "14px",
      minWidth: "45px",
      minHeight: "40px",
      padding: "8px",
      m: 0,
      borderRadius: "0",
    },

    "& .react-datepicker__day--disabled": {
      color:
        templateJson.themeColorCodes.calendarWidget.datePicker.disabledDate,
    },

    "& .react-datepicker__month": {
      marginBottom: "8px",
    },

    "& .react-datepicker__day-name": {
      color: templateJson.themeColorCodes.calendarWidget.datePicker.day,
      margin: "0 15px",
      fontSize: "12px",
    },

    "& .react-datepicker__day--selected": {
      borderRadius: "100%",
      color: "white",
      backgroundColor:
        templateJson.themeColorCodes.calendarWidget.datePicker.primary,
    },

    "& .react-datepicker__day--in-selecting-range:hover": {
      borderRadius: "0 50% 50% 0",
      backgroundColor:
        templateJson.themeColorCodes.calendarWidget.datePicker.range,

      "& div": {
        outline: "2px solid",
        outlineColor:
          templateJson.themeColorCodes.calendarWidget.datePicker.primary,
        backgroundColor: "white !important",
        borderRadius: "50%",
        color:
          templateJson.themeColorCodes.calendarWidget.datePicker.selectedDate,
        "& .css-0": {
          outline: "none",
        },
      },
    },
  },
};
export default styles;
