"use server"

export const fetchPokemons = async (page: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${page * 12}&limit=12`);

    const data = await response.json();
    const pokemons = data.results;

    for (const pokemon of pokemons) {
        pokemon.data = await fetch(pokemon.url).then(res => res.json());
    }

    return pokemons;
}