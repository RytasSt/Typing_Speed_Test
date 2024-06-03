export default async function fetchURL() {
  const response = await fetch('https://poetrydb.org/random')
  const data = await response.json()
  return data
}


