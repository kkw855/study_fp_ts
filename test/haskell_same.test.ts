function lucky(x: number): string {
  return x === 7 ?
      "LUCKY NUMBER SEVEN!" :
      "Sorry, you're out of lucky, pal!"
}
test('head', () => {
  expect(lucky(7)).toEqual("LUCKY NUMBER SEVEN!");
  expect(lucky(1)).toEqual("Sorry, you're out of lucky, pal!");
});
