import {head} from "fp-ts/Array";
import {none, some} from "fp-ts/Option";

const hi = { makePerson: (name: string, age: number) =>({name, age, married:undefined}) }

test('equal', () => {
  expect(hi.makePerson("sanghoony", 12)).toEqual({ name:"sanghoony", age:12})
  expect(hi.makePerson("sanghoony", 12)).toStrictEqual({ name:"sanghoony", age:12, married:undefined})
});
