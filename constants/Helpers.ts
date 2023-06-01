export const getRandomIntegerArray = (maxNumber: number, size: number) => {
  const arr: number[] = [];

  for (let i = 0; i < size; i++) {
    const randomNumber = Math.floor(Math.random() * (maxNumber + 1));
    arr.push(randomNumber);
  }

  return arr;
};

export const convert24To12 = (time: string) => {
  const [hours, minutes] = time.split(".");

  let hourNumber = parseInt(hours, 10);

  const ampm = hourNumber < 12 ? "AM" : "PM";

  if (hourNumber >= 12) {
    hourNumber -= 12;
  }

  return `${hourNumber}:${minutes} ${ampm}`;
};
