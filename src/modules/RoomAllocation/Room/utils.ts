const DefaultMaximumPeople = 4
export const getMaximumPeople = (
  currentPeopleNumber: number, // 1
  {
    total, // 1
    left, // 3
  }: {
    total: number
    left: number
  },
) => {
  const anotherPeopleNumber = total - currentPeopleNumber
  if (total + left < DefaultMaximumPeople) return total + left - anotherPeopleNumber
  else return DefaultMaximumPeople - anotherPeopleNumber
}
