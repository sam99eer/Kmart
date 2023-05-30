export const getRandomIntegerArray = (maxNumber: number, size: number) => {
  const arr: number[] = [];

  for (let i = 0; i < size; i++) {
    const randomNumber = Math.floor(Math.random() * (maxNumber + 1));
    arr.push(randomNumber);
  }

  return arr;
};
