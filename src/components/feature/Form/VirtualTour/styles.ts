import { templateJson } from "src/template-config";
import { Styles } from "src/types/common";

const styles: Styles = {
  wrapper: {
    typography: "bodyLayout",
  },
  datePickerWrapper: {
    "& .react-datepicker__month-container": {
      "& .react-datepicker__week": {
        "& .react-datepicker__day--in-selecting-range": {
          background:
            templateJson.themeColorCodes.calendarWidget.datePicker.range,
          "& div": {
            color:
              templateJson.themeColorCodes.calendarWidget.datePicker
                .selectedDate,
          },
        },
        "& .react-datepicker__day--range-start": {
          background:
            templateJson.themeColorCodes.calendarWidget.datePicker.range,
          borderRadius: "50% 0 0 50%",
          "& div": {
            color:
              templateJson.themeColorCodes.calendarWidget.datePicker
                .selectedDate,
          },
        },

        "& .react-datepicker__day--in-range": {
          background:
            templateJson.themeColorCodes.calendarWidget.datePicker.range,
          color:
            templateJson.themeColorCodes.calendarWidget.datePicker.selectedDate,
        },
        "& .react-datepicker__day--range-end": {
          borderRadius: "0 50% 50% 0",
          backgroundColor:
            templateJson.themeColorCodes.calendarWidget.datePicker.range,

          "& div": {
            outline: "2px solid",
            outlineColor:
              templateJson.themeColorCodes.calendarWidget.datePicker.primary,
            backgroundColor: "white !important",
            borderRadius: "50%",
            color: "black !important",
            "& .css-0": {
              outline: "none",
            },
          },
        },
        "& .react-datepicker__day--selecting-range-start": {
          background:
            templateJson.themeColorCodes.calendarWidget.datePicker
              .selectedDateBackground,
          borderRadius: "50% 0 0 50%",
        },
        "& .react-datepicker__day--selected": {
          "& div": {
            background:
              templateJson.themeColorCodes.calendarWidget.datePicker.primary,
            borderRadius: "50%",
            color: "#fff",
          },
        },
        "& .react-datepicker__day--keyboard-selected": {
          borderRadius: "50%",
          background:
            templateJson.themeColorCodes.calendarWidget.datePicker.range,
          color:
            templateJson.themeColorCodes.calendarWidget.datePicker.selectedDate,
        },
      },
    },
  },
  formWrapper: {
    position: "relative",
    width: "90%",
    typography: "flexColumn",
    backgroundColor: "white",
    padding: "26px 21px 17px 21px",
    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.07)",
    borderRadius: "6px",
  },
  title: {
    typography: "montserrat.medium",
    fontSize: "16px",
    marginBottom: "20px",
  },
  btnStyles: {
    width: "100%",
  },
  // input: {
  //   minHeight: "250px",
  // },

  calendarWrapper: {
    position: "absolute",
    top: "20px",
    left: "92px",

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
      width: "358px",
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
      fontWeight: 500,
      width: "50px",
      lineHeight: "25px",
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
