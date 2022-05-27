import axios from 'axios'
import TE from 'fp-ts/TaskEither'
import {unsafeCoerce, absurd} from "fp-ts/function";

test('map', () => {
  const te = TE.tryCatch(
      () => axios.get('https://httpstat.us/200'),
      (reason) => new Error('${reason}')
  )

  const s = unsafeCoerce<unknown, number>(2)
});
