import { Option, none, some, fromNullable, map, flatten, chain } from 'fp-ts/Option'

test('fromNullable', () => {
  expect(fromNullable(undefined)).toStrictEqual({ _tag: 'None' })
  expect(fromNullable(null)).toStrictEqual(none)
  expect(fromNullable({})).toStrictEqual({ _tag: 'Some', value: {} })
});

test('map', () => {
  expect(map((n: number) => n * 10)(some(5))).toStrictEqual(some(50))
});

test('flatten', () => {
  expect(some(some(1))).toStrictEqual({
    _tag: 'Some',
    value: { _tag: 'Some', value: 1 }
  })
  expect(flatten(some(some(1)))).toStrictEqual({ _tag: 'Some', value: 1 })
});

test('chain', () => {
  expect(chain((n: number) => some(n * 10))(some(1))).toStrictEqual(some(10))
  expect(map((n: number) => n * 10)(some(5))).toStrictEqual(some(50))
});
