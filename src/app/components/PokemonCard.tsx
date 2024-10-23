"use client";

import Image from "next/image";
import { Pokemon } from "./PokemonData";
import { useEffect, useState } from "react";
import Link from "next/link";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

type PokemonCardProps = {
    pokemonData: Pokemon;
    index: number;
};

const typeColors: { [key: string]: string } = {
    normal: "rgba(168, 168, 120, 0.1)",
    fire: "rgba(240, 128, 48, 0.1)",
    water: "rgba(104, 144, 240, 0.1)",
    grass: "rgba(120, 200, 80, 0.1)",
    flying: "rgba(168, 144, 240, 0.1)",
    fighting: "rgba(192, 48, 40, 0.1)",
    poison: "rgba(160, 64, 160, 0.1)",
    electric: "rgba(248, 208, 48, 0.1)",
    ground: "rgba(224, 192, 104, 0.1)",
    rock: "rgba(184, 160, 56, 0.1)",
    psychic: "rgba(248, 88, 136, 0.1)",
    ice: "rgba(152, 216, 216, 0.1)",
    bug: "rgba(168, 184, 32, 0.1)",
    ghost: "rgba(112, 88, 152, 0.1)",
    steel: "rgba(184, 184, 208, 0.1)",
    dragon: "rgba(112, 56, 248, 0.1)",
    dark: "rgba(112, 88, 72, 0.1)",
    fairy: "rgba(238, 153, 172, 0.1)",
    default: "rgba(255, 255, 255, 0.1)",
};

export default function PokemonCard({ pokemonData, index }: PokemonCardProps) {
    const [pokemonDetails, setPokemonDetails] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            const res = await fetch(pokemonData.url);
            const data = await res.json();
            setPokemonDetails(data);
            setLoading(false);
        };

        fetchDetails();
    }, [pokemonData.url]);

    useEffect(() => {
        const handleOnMouseMove = e => {
            const { currentTarget: target } = e;

            const rect = target.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            target.style.setProperty("--mouse-x", `${x}px`);
            target.style.setProperty("--mouse-y", `${y}px`);
        };

        const pokemonCards = document.querySelectorAll(".pokemon-card");
        pokemonCards.forEach(pokemonCard => {
            pokemonCard.addEventListener("mousemove", handleOnMouseMove);
        });

        return () => {
            pokemonCards.forEach(pokemonCard => {
                pokemonCard.removeEventListener("mousemove", handleOnMouseMove);
            });
        };
    }, []);

    const backgroundColor =
        pokemonDetails && pokemonDetails.types.length > 0
            ? typeColors[pokemonDetails.types[0].type.name] || typeColors.default
            : typeColors.default;

    return (
        <div
            className="pokemon-card w-full bg-foreground border-none rounded-20 shadow-custom"
            style={{
                "--gradient-color": backgroundColor,
            } as React.CSSProperties}
        >
            {loading ? (
                <div className="animate-pulse flex gap-4 p-5">
                    <div className="rounded-full bg-white bg-opacity-10	w-44 h-28">
                    </div>
                    <div className="flex flex-col justify-center gap-1 w-full">
                        <div className="h-3 bg-white bg-opacity-10 rounded w-10 mb-3"></div>
                        <div className="h-4 bg-white bg-opacity-10 rounded w-4/12"></div>
                        <div className="mt-3 w-[25px] h-[25px] rounded-full bg-white bg-opacity-10"></div>
                    </div>
                </div>
            ) : (
                <Link href={`/pokemon/${pokemonData.name}`} target="_blank" className="flex gap-4 p-5">
                    <div className="rounded-full bg-white bg-opacity-10	w-28 h-28">
                        <Image
                            src={pokemonDetails.sprites.other?.home.front_default}
                            alt={pokemonData.name}
                            width={200}
                            height={200}
                            className="rounded-20 mx-auto w-24"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <span className="text-white text-opacity-50 text-sm">
                            N°{pokemonDetails.id.toString().padStart(3, '0')}
                        </span>
                        <h3 className="font-medium text-lg text-white">
                            {capitalizeFirstLetter(pokemonDetails.name)}
                        </h3>
                        <div className="flex gap-2 mt-1">
                            {pokemonDetails.types.map((type: any, index: number) => {
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