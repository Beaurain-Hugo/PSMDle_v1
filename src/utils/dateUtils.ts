export const getDaysSinceEpoch = (): number => {
  const now = new Date();
  const epoch = new Date(2024, 0, 1); // Starting from January 1, 2024
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((now.getTime() - epoch.getTime()) / msPerDay);
};