import { nanoid } from "nanoid";
import cloneDeep from "lodash.clonedeep";
import { arrayRandom } from "./array-random";

function generate(item) {
  if (typeof item === "string") {
    return `${item}-${nanoid()}`;
  }
  if (typeof item === "number") {
    const num = 5;
    const range = [Math.floor(item - num), Math.floor(item + num)];
    return arrayRandom(range)
  }
  if (typeof item === "boolean") {
    return Math.random() > 0.5;
  }
  if (
    Array.isArray(item) ||
    Object.prototype.toString.call(item) === "[object Object]"
  ) {
    return muskClone(item);
  }
  return cloneDeep(item);
}

export default function muskClone(source) {
  // null
  if (!source) {
    return;
  }
  // limit to Array and Object
  if (
    !Array.isArray(source) &&
    Object.prototype.toString.call(source) !== "[object Object]"
  ) {
    return;
  }
  let target = null;
  // Array
  if (Array.isArray(source)) {
    target = [];
    for (const value of source) {
      target.push(generate(value));
    }
  }
  // Object
  if (Object.prototype.toString.call(source) === "[object Object]") {
    target = {};
    for (const [key, value] of Object.entries(source)) {
      target[key] = generate(value);
    }
  }

  return target;
}
