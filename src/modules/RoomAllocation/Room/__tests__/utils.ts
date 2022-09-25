import { getMaximumPeople } from "../utils"

describe("getMaximumPeople", () => {
  test("Left prople is more than 4", () => {
    expect(getMaximumPeople(1, { total: 1, max: 4 })).toBe(4)
    expect(getMaximumPeople(2, { total: 2, max: 4 })).toBe(4)
    expect(getMaximumPeople(3, { total: 3, max: 4 })).toBe(4)
    expect(getMaximumPeople(4, { total: 4, max: 4 })).toBe(4)
    expect(getMaximumPeople(1, { total: 2, max: 4 })).toBe(3)
    expect(getMaximumPeople(1, { total: 3, max: 4 })).toBe(2)
    expect(getMaximumPeople(1, { total: 4, max: 4 })).toBe(1)
  })
})
