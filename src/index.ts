import { Kind, URIS } from 'fp-ts/HKT';
import { Functor } from 'fp-ts/Functor';
import { Show } from 'fp-ts/Show';

// export function sayMyName(name: string): void {
//   if (name === "Heisenberg") {
//     console.log("You're right 👍");
//   } else {
//     console.log("You're wrong 👎");
//   }
// }
//
// sayMyName("Heisenberg");
//
//
// export const addition = (a: number, b: number): number => {
//   return a + b;
// };
//
// const number1: number = 5;
// const number2: number = 10;
// const result: number = addition(number1, number2);
//
// console.log('The result is %d', result);
//
// import { option } from "fp-ts";
// const value: option.Option<number> = option.some(1);
// console.log(value);
//
// // const myCoolString : string = 9;
//
// console.log('value222');
//
// function getText<T>(text: T): T {
//   return text;
// }
// const str1: <T>(text: T) => T = getText
// const str2: { <T>(text: T): T} = getText
// interface GenericLogTextFn {
//   <T>(text: T): T
// }
// const myString: GenericLogTextFn = getText
//
// console.log(getText('hi'))
// console.log(getText(10))
// console.log(getText(true))
//
// class GenericMath<T> {
//   pi: T;
//   sum: (x: T, y: T) => T;
// }
//
// new GenericMath<string>()
//
// interface LogWise {
//   length: number;
// }
//
// function logText<T extends LogWise>(text: T) {
//   console.log(text.length);
//   return text;
// }
//
// logText({ length: 100, value: 'hi' });
//
// function getProperty<T, O extends keyof T>(obj: T, key: O) {
//   return obj[key]
// }
// const obj = { a: 1, b: 2, c: 3 };
// console.log(getProperty(obj, "a"))
// console.log(getProperty(obj, "z"))
//
// type MapForSet   = <A, B>(f: (a: A) => B) => (as: Set<A>) => Set<B>;
//
// interface URItoKind<A> {
//   'Array': Array<A>;
//   'Set': Set<A>;
// } // a dictionary for 1-arity types: Array, Set, Tree, Promise, Maybe, Task...
// interface URItoKind2<A, B> {
//   'Map': Map<A, B>;
// } // a dictionary for 2-arity types: Map, Either, Bifunctor...
//
// type URIS = keyof URItoKind<unknown>; // sum type of names of all 1-arity types
// type URIS2 = keyof URItoKind2<unknown, unknown>; // sum type of names of all 2-arity types
// // and so on, as you desire
//
// type Kind<F extends URIS, A> = URItoKind<A>[F];
// type Kind2<F extends URIS2, A, B> = URItoKind2<A, B>[F];
// // and so on
//
// interface Mappable<F extends URIS> {
//   readonly map: <A, B>(f: (a: A) => B) => (as: Kind<F, A>) => Kind<F, B>;
// }
//
// const mappableArray: Mappable<'Array'> = {
//   // here `as` will have type A[], without any menthioning of the utility type `Kind`:
//   map: f => as => as.map(f)
// };
// const mappableSet: Mappable<'Set'> = {
//   // a little bit unfair — you can make it more efficient by iterating over the iterator for the set manually,
//   // but the purpose of this article is not to make the implementation as efficient as possible, but to explain the concept
//   map: f => as => new Set(Array.from(as).map(f))
// };
// // here I will assume that Tree is a normal inductive type with two constructors: Leaf and Node,
// // leaves store data, nodes store a set of subtrees:
// const mappableTree: Mappable<'Tree'> = {
//   map: f => as => {
//     switch (true) {
//       case as.tag === 'Leaf': return f(as.value);
//       case as.tag === 'Node': return node(as.children.map(mappableTree.map(f)));
//     }
//   }
// };
//
// import { Eq } from 'fp-ts/lib/Eq'
// import * as S from 'fp-ts/string'
// import * as N from 'fp-ts/number'
//
// const eqNumber: Eq<number> = {
//   equals: (x, y) => x === y
// }
// function elem<A>(E: Eq<A>): (a: A, as: A[]) => boolean {
//   return (a, as) => as.some(item => E.equals(a, item))
// }
// console.log(elem(eqNumber)(1, [1, 2, 3]))
// console.log(elem(eqNumber)(4, [1, 2, 3]))

type Point = {
  x: number
  y: number
}
const eqPoint: Eq<Point> = {
  equals: (p1, p2) => p1.x === p2.x && p1.y === p2.y
}
const point1: Point = { x: 1, y: 1}
const point2: Point = { x: 1, y: 2}
console.log(eqPoint.equals(point1, point2))

export interface Eq<A> {
  readonly equals: (x: A, y: A) => boolean
}

const eqN: Eq<number> = {
  equals: (x, y) => x === y
}
console.log(eqN.equals(3, 3))

type Heroes = 'Hulk' | 'Thor' | 'Capt';

type fff = keyof Array<Show<any>>

const getShowTuple = <T extends Array<Show<any>>>(
    ...shows: T
): Show<{ [K in keyof T]: T[K] extends Show<infer A> ? A : never}> => ({
  show: t => `[${t.map((a, i) => shows[i].show(a)).join(', ')}]`
})
