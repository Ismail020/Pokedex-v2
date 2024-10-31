"use server";

export const fetchPokemons = async (page: number) => {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${page * 24}&limit=24`,
    );

    const data = await response.json();
    return data.results;
};

export const fetchPokemon = async (name: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    const data = await response.json();
    return data;
};

export const fetchSpecies = async (url: string) => {
    const response = await fetch(url);

    const data = await response.json();
    return data;
};

export const fetchAllPokemons = async () => {
    const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10000",
    );
    const data = await response.json();

    return data.results;
};
