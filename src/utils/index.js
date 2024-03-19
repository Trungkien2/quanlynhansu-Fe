export const convertParams = (params) => {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => [key, JSON.stringify(value)]),
  )
}
