export const gigasecond = (date) => {
  const gs = new Date(date.getTime() + 1e12);
  return gs;
};
