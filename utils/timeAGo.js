export const timeAGo = (dateTime) => {
  const date = new Date(dateTime);
  const timestamp = date.getTime();
  const currentDate = Date.now();
  const timeInSeconds = Math.floor(Math.abs((currentDate - timestamp) / 1000));
  const timeInMinutes = Math.floor(timeInSeconds / 60);
  const timeInHours = Math.floor(timeInSeconds / 3600);
  const timeInDays = Math.floor(timeInSeconds / 86400);
  const timeInMonths = Math.floor(timeInDays / 30);
  const timeInYears = Math.floor(timeInMonths / 12);
  return timeInSeconds < 60
    ? `${timeInSeconds} seconds ago`
    : timeInSeconds < 3600
    ? `${timeInMinutes} minutes ago`
    : timeInHours < 2
    ? `${timeInHours} hour ago`
    : timeInSeconds < 86400
    ? `${timeInHours} hours ago`
    : timeInDays < 30
    ? `${timeInDays} days ago`
    : timeInMonths < 12
    ? `${timeInMonths} months ago`
    : timeInYears < 2
    ? `${timeInYears} year ago`
    : `${timeInYears} years ago`;
};
