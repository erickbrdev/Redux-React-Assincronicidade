const ENDPOINT = "https://rickandmortyapi.com/api/character"

async function fetchRickAndMorty () {
  const response = await fetch(ENDPOINT)
  const data = await response.json()

  return response.ok ? Promise.resolve(data) : Promise.reject(data);
}

export default fetchRickAndMorty;