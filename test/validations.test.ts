import { validatePathOnWindows } from '../src/validations'

test('validate windows path', () => {
  expect(validatePathOnWindows('a:\\한글\\abc.txt')).toEqual(true);
  expect(validatePathOnWindows('a:\\a\\b.txt\\')).toEqual(true);

  expect(validatePathOnWindows('Z:\\\\')).toEqual(false);
  expect(validatePathOnWindows('Z:\\abc\\\\')).toEqual(false);
  expect(validatePathOnWindows('Z:\\a<c')).toEqual(false);
  expect(validatePathOnWindows('Z:\\a?c')).toEqual(false);
  expect(validatePathOnWindows('abc.txt')).toEqual(false);
});
