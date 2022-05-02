"use strict";

export function sayMyName(name: string): void {
  if (name === "Heisenberg") {
    console.log("You're right 👍");
  } else {
    console.log("You're wrong 👎");
  }
}

sayMyName("Heisenberg");


export const addition = (a: number, b: number): number => {
  return a + b;
};

const number1: number = 5;
const number2: number = 10;
const result: number = addition(number1, number2);

console.log('The result is %d', result);

import { option } from "fp-ts";
const value: option.Option<number> = option.some(1);
console.log(value);

// const myCoolString : string = 9;

console.log('value222');
