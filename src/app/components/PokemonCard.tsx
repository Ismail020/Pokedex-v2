"use client";

import Image from "next/image";
import { BasePokemon } from "../page";
import { useEffect, useState } from "react";
import Link from "next/link";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import typeColors from "../utils/typeColors";
import { Pokemon, Type } from "../utils/PokemonData";
import { Species } from "../utils/SpeciesData";
import useMouseMoveEffect from "../utils/useMouseMoveEffect";
import PokemonCardSkeleton from "./PokemonCardSkeleton";

type PokemonCardProps = {
    pokemonData: BasePokemon
    index: number;
};

export default function PokemonCard({ pokemonData }: PokemonCardProps) {
    const [pokemonDetails, setPokemonDetails] = useState<Pokemon | null>(null);
    const [pokemonSpecies, setPokemonSpecies] = useState<Species | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const res = await fetch(pokemonData.url);
                const data = await res.json();
                setPokemonDetails(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching Pokemon details:", error);
            }
        };

        fetchDetails();
    }, [pokemonData.url]);

    useEffect(() => {
        if (pokemonDetails && pokemonDetails.species?.url) {
            const fetchSpecies = async () => {
                try {
                    const res = await fetch(pokemonDetails.species.url);
                    const data = await res.json();
                    setPokemonSpecies(data);
                } catch (error) {
                    console.error("Error fetching Pokemon species:", error);
                }
            };

            fetchSpecies();
        }
    }, [pokemonDetails]);

    useMouseMoveEffect();

    const gradientStart = pokemonDetails?.types[0]?.type.name
        ? typeColors[pokemonDetails.types[0].type.name]
        : typeColors.default;

    const gradientEnd = pokemonDetails?.types[1]
        ? typeColors[pokemonDetails.types[1].type.name]
        : gradientStart;

    return (
        <div
            className="pokemon-card w-full bg-foreground border-none rounded-20 shadow-custom"
            style={{
                "--gradient-color-start": gradientStart,
                "--gradient-color-end": gradientEnd,
            } as React.CSSProperties}
        >
            {loading || !pokemonDetails ? (
                <PokemonCardSkeleton />
            ) : (
                <Link href={`/pokemon/${pokemonData.name}`} className="flex gap-4 p-5 relative">
                    <div className="rounded-full relative bg-white bg-opacity-10 w-28 h-28">
                        <Image
                            src={pokemonDetails.sprites.other?.home.front_default || "/PokemonEgg.png"}
                            alt={pokemonData.name}
                            layout="fill"
                            objectFit="contain"
                            className="rounded-20 mx-auto w-24"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <span className="text-white text-opacity-50 text-sm">
                            N°{pokemonDetails.id.toString().padStart(3, '0')}
                        </span>
                        {pokemonSpecies?.is_legendary && (
                            <span className="absolute bg-white bg-opacity-10 text-white text-opacity-50 py-1 px-3 rounded-xl text-sm top-2 right-2">
                                Legendary
                            </span>
                        )}
                        {pokemonSpecies?.is_mythical && (
                            <span className="absolute bg-white bg-opacity-10 text-white text-opacity-50 py-1 px-3 rounded-xl text-sm top-2 right-2">
                                Mythical
                            </span>
                        )}
                        <h3 className="font-medium text-lg text-white">
                            {capitalizeFirstLetter(pokemonDetails.name)}
                        </h3>
                        <div className="flex gap-2 mt-1">
                            {pokemonDetails.types.map((type: Type, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        className="w-[25px] h-[25px] relative"
                                    >
                                        <Image
                                            src={`/types/${type.type.name}.svg`}
                                            alt="Pokemon type"
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
}
