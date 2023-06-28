export const formatDate = (date: Date) => {
  const newDate = new Date(date).toDateString().split(" ");
  const month = date.toLocaleString("default", { month: "long" });
  return `${month} ${newDate[2]}, ${newDate[3]}`;
};
