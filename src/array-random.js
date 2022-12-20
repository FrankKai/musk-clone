import { random } from "random-pro.js";

export const arrayRandom = (range) => {
  let start = range[0];
  let end = range[1];
  const arr = [];
  let i = start;
  while (i < end) {
    arr.push(Math.floor(i + 1));
    i++;
  }
  return random(arr);
};
