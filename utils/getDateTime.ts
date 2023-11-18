export const getDateTime = () => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  let ampm = "am";

  if (hours > 12) {
    hours -= 12;
    ampm = "pm";
  }

  //full date time
  return `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
};
