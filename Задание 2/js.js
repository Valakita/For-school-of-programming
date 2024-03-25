function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let copy;

  if (obj instanceof Date) {
    copy = new Date(obj);
  } else if (obj instanceof Map) {
    copy = new Map();
    obj.forEach((value, key) => {
      copy.set(key, deepCopy(value));
    });
  } else if (obj instanceof Set) {
    copy = new Set();
    obj.forEach((value) => {
      copy.add(deepCopy(value));
    });
  } else if (Array.isArray(obj)) {
    copy = [];
    obj.forEach((item, index) => {
      copy[index] = deepCopy(item);
    });
  } else {
    copy = Object.create(Object.getPrototypeOf(obj));
    Object.getOwnPropertyNames(obj).forEach((prop) => {
      copy[prop] = deepCopy(obj[prop]);
    });
  }

  return copy;
}