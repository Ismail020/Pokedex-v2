"use server"

export const fetchPokemons = async (page: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${page * 24}&limit=24`);

    const data = await response.json();
    return data.results;
};