import {functorResponse, Response} from '../src/Response'

test('', () => {
  const res: Response<string> = {
    url: 'url',
    status: 0,
    headers: { head: 'abc'},
    body: "body",
  }

  expect(functorResponse.map(res, s => 10)).toStrictEqual({
    ...res,
    body: 10
  })
});
