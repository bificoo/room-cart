import { getMaximumPeople } from "../utils"

describe("getMaximumPeople", () => {
  test("Left prople is more than 4", () => {
    // 大人情境
    expect(getMaximumPeople(1, { total: 1, left: 4 })).toBe(4)
    expect(getMaximumPeople(2, { total: 2, left: 4 })).toBe(4)
    expect(getMaximumPeople(3, { total: 3, left: 4 })).toBe(4)
    expect(getMaximumPeople(4, { total: 4, left: 4 })).toBe(4)
    expect(getMaximumPeople(1, { total: 2, left: 4 })).toBe(3)
    expect(getMaximumPeople(1, { total: 3, left: 4 })).toBe(2)
    expect(getMaximumPeople(1, { total: 4, left: 4 })).toBe(1)

    // 小孩情境
    expect(getMaximumPeople(0, { total: 1, left: 4 })).toBe(3)
    expect(getMaximumPeople(1, { total: 2, left: 4 })).toBe(3)
    expect(getMaximumPeople(2, { total: 3, left: 4 })).toBe(3)
    expect(getMaximumPeople(3, { total: 4, left: 4 })).toBe(3)
    expect(getMaximumPeople(0, { total: 2, left: 4 })).toBe(2)
    expect(getMaximumPeople(0, { total: 3, left: 4 })).toBe(1)
    expect(getMaximumPeople(0, { total: 4, left: 4 })).toBe(0)
  })

  test("Left prople is less than 4", () => {
    // 大人情境
    expect(getMaximumPeople(1, { total: 1, left: 3 })).toBe(4)
    expect(getMaximumPeople(2, { total: 2, left: 3 })).toBe(4)
    expect(getMaximumPeople(3, { total: 3, left: 3 })).toBe(4)
    expect(getMaximumPeople(4, { total: 4, left: 3 })).toBe(4)
    expect(getMaximumPeople(1, { total: 2, left: 3 })).toBe(3)
    expect(getMaximumPeople(1, { total: 3, left: 3 })).toBe(2)

    // 小孩情境
    expect(getMaximumPeople(0, { total: 1, left: 3 })).toBe(3)
    expect(getMaximumPeople(1, { total: 2, left: 3 })).toBe(3)
    expect(getMaximumPeople(2, { total: 3, left: 3 })).toBe(3)
    expect(getMaximumPeople(3, { total: 4, left: 4 })).toBe(3)
    expect(getMaximumPeople(0, { total: 2, left: 3 })).toBe(2)
    expect(getMaximumPeople(0, { total: 3, left: 3 })).toBe(1)
  })
})
