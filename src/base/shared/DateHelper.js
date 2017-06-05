const Months = new Array(
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
);

export const getDate = date => {
  const postDate = new Date(date.substring(0,10));
  const day = postDate.getDate();
  const month = Months[postDate.getMonth()];
  const year = postDate.getFullYear();
  return `${day}-${month}-${year}`;
}
