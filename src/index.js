import { nanoid } from "nanoid";
import cloneDeep from "lodash.clonedeep";

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
    for (const item of source) {
      if (typeof item === "string") {
        target.push(`${item}-${nanoid()}`);
      } else if (typeof item === "number") {
        target.push(item + Math.floor(Math.random() * 100));
      } else if (typeof item === "boolean") {
        target.push(Math.random() > 0.5);
      } else if (
        Array.isArray(item) ||
        Object.prototype.toString.call(item) === "[object Object]"
      ) {
        target.push(muskClone(item));
      } else {
        target.push(cloneDeep(item));
      }
    }
  }
  // Object
  if (Object.prototype.toString.call(source) === "[object Object]") {
    target = {};
    for (const [key, item] of Object.entries(source)) {
      if (typeof item === "string") {
        target[key] = `${item}-${nanoid()}`;
      } else if (typeof item === "number") {
        target[key] = item + Math.floor(Math.random() * 100);
      } else if (typeof item === "boolean") {
        target[key] = Math.random() > 0.5;
      } else if (
        Array.isArray(item) ||
        Object.prototype.toString.call(item) === "[object Object]"
      ) {
        target[key] = muskClone(item);
      } else {
        target[key] = cloneDeep(item);
      }
    }
  }
  return target;
}
