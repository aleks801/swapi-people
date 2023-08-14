export const extractIdFromUrl = (url: string) => {
  if (!url) {
    return ''
  }

  return url
    .split('/')
    .filter((e) => e)
    .pop()
}
