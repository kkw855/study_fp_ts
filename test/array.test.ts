import { head } from 'fp-ts/Array'
import { some, none } from 'fp-ts/Option'

test('head', () => {
  expect(head([1, 2, 3])).toEqual(some(1));
  expect(head([])).toEqual(none);
});
