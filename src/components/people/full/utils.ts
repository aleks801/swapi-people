export const getAbbroviation = (name: string) => {
  return name
    .split(' ')
    .map((item) => item[0])
    .join('')
}
