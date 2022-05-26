import { isEqual } from 'lodash'

interface Person {
  name: string
  age: number
  address: {
    country: string
    city: string
  };
}

interface Student {
  name2: string
  age2: number
}

function getKeysFromDiffValue<T>(a: T, b: T): Array<keyof T> {
  const keys = [] as Array<keyof T>

  for (const k in a) {
    const x = a[k]
    const y = b[k]

    // TODO: 비교하는데에 fp-ts Eq 사용 가능 한가?
    if (x !== y) {
      keys.push(k)
    }
  }

  return keys
}

test('get not equal keys of object', () => {
  const p1: Person = {
    name: 'Tom',
    age: 30,
    address: {
      country: 'Chile',
      city: 'Santiago',
    },
  };

  const p2: Person = {
    address: {
      country: 'Chile',
      city: 'Santiago',
    },
    age: 30,
    name: 'Tom',
  };

  const p3: Person = {
    name: 'Tom',
    age: 30,
    address: {
      country: 'Chile',
      city: 'Santiago',
    },
  };

  const p4: Person = {
    address: {
      country: 'Korea',
      city: 'Santiago',
    },
    age: 30,
    name: 'Tom',
  };

  const s1: Student = {
    name2: 'a',
    age2: 1
  }
  const s2: Student = {
    name2: 'ab',
    age2: 2
  }

  // expect(p1 === p2).toBeTruthy()
  expect(isEqual(p1, p2)).toBeTruthy()
  expect(isEqual(p1.address, p2.address)).toBeTruthy()

  expect(getKeysFromDiffValue(p1, p2)).toEqual(['name', 'cars'])
  const propsOfPerson: Array<keyof Person> = getKeysFromDiffValue(p1, p2)
  const propsOfStudent: Array<keyof Student> = getKeysFromDiffValue(s1, s2)

  // const ss = p1['age']
  // const s1241 = p1[propsOfPerson[0]]
  // const waga3wg = s2[propsOfPerson[0]]
})
