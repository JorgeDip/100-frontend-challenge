export const api = {
  fetchPokemon: async (pokemon: string) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    let response
    let data

    try {
      response = await fetch(URL)
      data = await response.json()
    } catch {
      data = null
    }

    return { response, data }
  },
  getPokemons: async (offset: number = 0) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=25`)
    const data = await response.json()

    const promises = data.results.map(async (pokemon: { name: string }) => {
      if (pokemon.name === "gible") return (await api.fetchPokemon("443")).data

      return (await api.fetchPokemon(pokemon.name)).data
    })

    const pokemonList = Promise.all(promises)
    return pokemonList
  },
}
