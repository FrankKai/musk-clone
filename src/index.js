import { nanoid } from "nanoid";
import cloneDeep from "lodash.clonedeep";
import { arrayRandom } from "./array-random";

function generate(item, { ignores, objectKey, fieldCallbacks }) {
  const callback = fieldCallbacks[objectKey];
  if (typeof item === "string") {
    return callback ? callback(item) : `${item}-${nanoid()}`;
  }
  if (typeof item === "number") {
    const num = 5;
    const range = [Math.floor(item - num), Math.floor(item + num)];
    return callback ? callback(item) : arrayRandom(range);
  }
  if (typeof item === "boolean") {
    return callback ? callback(item) : Math.random() > 0.5;
  }
  if (
    Array.isArray(item) ||
    Object.prototype.toString.call(item) === "[object Object]"
  ) {
    return muskClone(item, 1, ignores, fieldCallbacks);
  }
  return cloneDeep(item);
}

export default function muskClone(
  source,
  repeat = 1,
  ignores = [],
  fieldCallbacks = {} // callback functions based on object keys
) {
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
      target.push(generate(value, { ignores, fieldCallbacks }));
    }
  }
  // Object
  if (Object.prototype.toString.call(source) === "[object Object]") {
    target = {};
    for (const [key, value] of Object.entries(source)) {
      target[key] = ignores.includes(key)
        ? value
        : generate(value, { ignores, objectKey: key, fieldCallbacks });
    }
  }

  if (repeat === 1) {
    return target;
  }

  // repeat model
  if (repeat > 1) {
    const repeatTarget = [];
    let i = 0;
    while (i < repeat) {
      repeatTarget.push(muskClone(source, 1, ignores, fieldCallbacks));
      i++;
    }
    return repeatTarget;
  }
}
