"use server"

export const fetchPokemons = async (page: number) => {
    console.log("fetching pokemons");
    console.log("page", page * 20);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${page * 20}&limit=20`);

    const data = await response.json();

    return data.results;
}