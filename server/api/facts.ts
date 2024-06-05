export default defineEventHandler(async (event) => {
  const response = await fetch('https://meowfacts.herokuapp.com/?count=20')
  const { data } = await response.json()

  return data
})

