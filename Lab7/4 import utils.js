import { mergeObjects, cloneObject } from "./utils.js";

const obj1 = { name: "Ahmed", age: 25 };
const obj2 = { job: "Developer", age: 30 };

const merged = mergeObjects(obj1, obj2);
const cloned = cloneObject(obj1);

console.log("Merged:", merged);
console.log("Cloned:", cloned);
