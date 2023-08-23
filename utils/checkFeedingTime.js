export function checkFeedingTime() {
  const foodTimeHours = 20;
  const foodTimeMinutes = 30;

  const today = new Date();
  const nowHours = today.getHours();
  const nowMinutes = today.getMinutes();

  if (nowHours === foodTimeHours && nowMinutes >= foodTimeMinutes) {
    return true;
  }
}
