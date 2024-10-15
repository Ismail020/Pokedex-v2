"use server";
import { notFound } from "next/navigation";

export const getPokemon = async (id: number) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
            signal: AbortSignal.timeout(5000),
            next: {
                tags: ["content"],
            },
        });

        if (response.status === 404) {
            notFound();
        }

        const pokemons = await response.json();
        return pokemons;
    } catch (error: any) {
        if (error.message === "NEXT_NOT_FOUND") {
            notFound();
        }
        const ogError = new Error(`Error fetching pokemons: ${error.message}`);
        throw ogError;
    }
}