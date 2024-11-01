import { nanoid } from "nanoid";
import cloneDeep from "lodash.clonedeep";
import { arrayRandom } from "./array-random";
import type {
  MuskCloneProps,
  GenerateItemType,
  GenerateOptions,
  SourceType,
} from "./type";

/*
 * @param item: GenerateItemType
 * @param ignores: Array<string>
 * @param objectKey: string
 * @param fieldCallbacks: Record<string, Function>
 * @returns: any
 * @description: generate value based on item type
 */

function generate(
  item: GenerateItemType,
  { ignores, objectKey, fieldCallbacks }: GenerateOptions
) {
  const callback = fieldCallbacks?.[objectKey as string];
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
    return muskClone({ source: item, repeat: 1, ignores, fieldCallbacks });
  }
  return cloneDeep(item);
}

/*
 ** @param props: MuskCloneProps
 ** @returns: any
 ** @description: clone object or array based on MuskCloneProps
 */

export function muskClone(
  props: MuskCloneProps // callback functions based on object keys
) {
  const { source, repeat = 1, ignores = [], fieldCallbacks = {} } = props;
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
  let target: SourceType | null = null;
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
    const repeatTarget = [] as any;
    let i = 0;
    while (i < repeat) {
      repeatTarget.push(
        muskClone({ source, repeat: 1, ignores, fieldCallbacks })
      );
      i++;
    }
    return repeatTarget;
  }
}
