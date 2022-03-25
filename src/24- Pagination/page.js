export const Page = (items) => {
  const pages = 10
  const contentPerPage = Math.ceil(items.length / pages)
  const newItems = Array.from({ length: pages }, (_, index) => {
    const start = index * contentPerPage
    const newArr = items.slice(start, start + contentPerPage)
    return newArr
  })
  return newItems
}
