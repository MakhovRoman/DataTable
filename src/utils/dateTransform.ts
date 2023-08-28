export const dateTransform = (date: string) => {
  const newDate = new Date(date).toLocaleString("ru-RU");
  const [day, time] = newDate.split(",");
  return {day, time};
}
