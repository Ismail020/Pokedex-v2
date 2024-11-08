"use client";

import Image from "next/image";
import { BasePokemon } from "../page";
import { useEffect, useState } from "react";
import Link from "next/link";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import typeColors from "../typescript/typeColors";
import { Pokemon, Type } from "../typescript/PokemonData";
import { Species } from "../typescript/SpeciesData";
import useMouseMoveEffect from "../utils/useMouseMoveEffect";
import PokemonCardSkeleton from "./PokemonCardSkeleton";

type PokemonCardProps = {
    pokemonData: BasePokemon;
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
            className="pokemon-card w-full rounded-20 border-none bg-foreground shadow-custom"
            style={
                {
                    "--gradient-color-start": gradientStart,
                    "--gradient-color-end": gradientEnd,
                } as React.CSSProperties
            }
        >
            {loading || !pokemonDetails ? (
                <PokemonCardSkeleton />
            ) : (
                <Link
                    href={`/pokemon/${pokemonData.name}`}
                    className="relative flex gap-4 p-5"
                >
                    <div className="relative h-28 w-28 rounded-full bg-white bg-opacity-10">
                        <Image
                            src={
                                "/gifs/" +
                                    pokemonDetails.name.replace(/-/g, "_") +
                                    (pokemonDetails.forms &&
                                    pokemonDetails.forms[0].name !==
                                        pokemonDetails.name
                                        ? `_${pokemonDetails.forms[0].name.split("-")[1]}`
                                        : "") +
                                    ".gif" ||
                                pokemonDetails.sprites.other?.home
                                    .front_default ||
                                pokemonDetails.sprites.other?.[
                                    "official-artwork"
                                ]?.front_default ||
                                "/PokemonEgg.png"
                            }
                            alt={pokemonData.name}
                            layout="fill"
                            objectFit="contain"
                            className="mx-auto w-24 rounded-20"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <span className="text-sm text-white text-opacity-50">
                            N°
                            {pokemonDetails.id.toString().padStart(3, "0")}
                        </span>
                        {pokemonSpecies?.is_legendary && (
                            <span className="absolute right-2 top-2 rounded-xl bg-white bg-opacity-10 px-3 py-1 text-sm text-white text-opacity-50">
                                Legendary
                            </span>
                        )}
                        {pokemonSpecies?.is_mythical && (
                            <span className="absolute right-2 top-2 rounded-xl bg-white bg-opacity-10 px-3 py-1 text-sm text-white text-opacity-50">
                                Mythical
                            </span>
                        )}
                        <h3 className="text-lg font-medium text-white">
                            {capitalizeFirstLetter(pokemonDetails.name)}
                        </h3>
                        <div className="mt-1 flex gap-2">
                            {pokemonDetails.types.map(
                                (type: Type, index: number) => {
                                    return (
                                        <div
                                            key={index}
                                            className="relative h-[25px] w-[25px]"
                                        >
                                            <Image
                                                src={`/types/${type.type.name}.svg`}
                                                alt="Pokemon type"
                                                layout="fill"
                                                objectFit="contain"
                                            />
                                        </div>
                                    );
                                },
                            )}
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
}
