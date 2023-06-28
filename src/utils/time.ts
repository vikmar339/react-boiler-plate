const date = new Date();

export const getDate = () => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so we add 1
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
};

export const getHour = () => {
  const time24 = `${date.getHours()}:${date.getMinutes()}`; // Replace with your 24-hour time string
  const time12 = new Date(`2000-01-01T${time24}`).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return time12.split(":")[0];
};

export const getMinutes = () => {
  return date.getMinutes();
};

export const getPeriod = () => {
  return date.getHours() > 12 ? "PM" : "AM";
};

export const getTime = (initialDate: string) => {
  if (!initialDate) return;

  const date = new Date(initialDate)?.toLocaleString("en-CA");
  if (!date || initialDate === null) return "";
  const getMeridiem: any = {
    "p.m": "PM",
    "a.m": "AM",
  };
  const [, timeString] = date.split(", ");
  const [hourString, minuteString, rest] = timeString.split(":");
  let hour = parseInt(hourString, 10);
  const meridiem = getMeridiem[rest.split(" ")[1].slice(0, 3)];
  hour = hour === 0 ? 12 : hour;
  const hour12 = hour > 12 ? hour - 12 : hour;
  const seconds = "00";

  return {
    hour: hour12.toString(),
    minute: minuteString,
    period: meridiem,
    fullTime: `${hour12}:${minuteString}:${seconds}`,
  };
};

