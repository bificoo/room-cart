const DefaultMaximumPeople = 4
export const getMaximumPeople = (
  currentPeopleNumber: number,
  {
    total,
    max,
  }: {
    total: number
    max: number
  },
) => {
  if (max < DefaultMaximumPeople) return max - total + currentPeopleNumber
  else return DefaultMaximumPeople - total + currentPeopleNumber
}
