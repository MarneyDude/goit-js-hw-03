"use strict";

function makeArray() {
  let arr = [];

  const limit =
    arguments[arguments.length - 1] === Number(arguments[arguments.length - 1])
      ? arguments[arguments.length - 1]
      : 0;
  for (let i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      arr = arr.concat(arguments[i]);
    }
  }
  return limit !== undefined ? arr.slice(0, limit) : arr;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
