"use client";

import Link from "next/link";
import Image from "next/image";
import { BasePokemon } from "../page";
import { useEffect, useState } from "react";
import typeColors from "../typescript/typeColors";
import { Pokemon, Type } from "../typescript/PokemonData";
import PokemonSearchCardSkeleton from "./PokemonSearchCardSkeleton";
import useMouseMoveEffect from "../utils/useMouseMoveEffect";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import { getForm, getBaseName } from "@/app/utils/formUtils";
import { fetchPokemon } from "@/service/action";

type PokemonCardShortProps = {
    pokemonData: BasePokemon;
};

export default function PokemonCardShort({
    pokemonData,
}: PokemonCardShortProps) {
    const [pokemonDetails, setPokemonDetails] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState(true);

    const pokemonVariant = {
        name: getBaseName(pokemonData.name),
        form: getForm(pokemonData.name),
    };

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const data = await fetchPokemon(pokemonData.name);
                setPokemonDetails(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching Pokemon details:", error);
            }
        };

        fetchDetails();
    }, [pokemonData.name]);

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
                <PokemonSearchCardSkeleton />
            ) : (
                <Link
                    href={`/pokemon/${pokemonData.name}`}
                    className="relative flex justify-between gap-4 p-5"
                >
                    <div className="flex gap-4">
                        <div className="relative h-16 w-16 rounded-full bg-white bg-opacity-10">
                            <Image
                                src={
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
                        <div className="flex flex-col justify-around">
                            <span className="text-sm text-white text-opacity-50">
                                N°
                                {pokemonDetails.id.toString().padStart(3, "0")}
                            </span>
                            <h3 className="text-lg font-medium text-white">
                                {capitalizeFirstLetter(pokemonVariant.name)}{" "}
                                {pokemonVariant.form}
                            </h3>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end gap-1">
                        <div className="flex gap-2">
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
