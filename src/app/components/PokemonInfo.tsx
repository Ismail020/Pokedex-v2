"use client";

import NextImage from "next/image";
import { useEffect, useState } from "react";
import { Species } from "../typescript/SpeciesData";
import { Pokemon, Type } from "../typescript/PokemonData";
import { MaleIcon, FemaleIcon } from "@/app/components/Icons";
import { addToRecentlyViewed } from "@/app/utils/recentlyViewed";
import capitalizeFirstLetter from "@/app/utils/capitalizeFirstLetter";
import { getForm, getBaseName } from "@/app/utils/formUtils";
import Radar from "./RadarChart";
import { EvolutionChainData } from "../typescript/EvolutionChainData";
import EvolutionChain from "./EvolutionChain";

interface PokemonInfoProps {
    pokemon: Pokemon;
    species: Species;
    evolutionChain: EvolutionChainData;
}

export default function PokemonInfo({
    pokemon,
    species,
    evolutionChain,
}: PokemonInfoProps) {
    const [imageUrl, setImageUrl] = useState("/transparent.png");

    useEffect(() => {
        addToRecentlyViewed(
            pokemon.name,
            pokemon.sprites.other?.home.front_default ||
                pokemon.sprites.other?.["official-artwork"]?.front_default ||
                "/PokemonEgg.png",
        );

        const gifUrl =
            "/gifs/" +
            pokemon.name.toLowerCase().replace(/-/g, "_") +
            (pokemon.forms &&
            pokemon.forms[0].name.toLowerCase() !== pokemon.name.toLowerCase()
                ? `_${pokemon.forms[0].name.toLowerCase().split("-")[1]}`
                : "") +
            ".gif";

        const checkImage = (url: string) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = url;
                img.onload = () => resolve(true);
                img.onerror = () => resolve(false);
            });
        };

        checkImage(gifUrl).then((exists) => {
            if (exists) {
                setImageUrl(gifUrl);
            } else if (pokemon.sprites.other?.home.front_default) {
                setImageUrl(pokemon.sprites.other.home.front_default);
            } else if (
                pokemon.sprites.other?.["official-artwork"]?.front_default
            ) {
                setImageUrl(
                    pokemon.sprites.other["official-artwork"].front_default,
                );
            } else {
                setImageUrl("/PokemonEgg.png");
            }
        });
    }, [pokemon]);

    const pokemonVariant = {
        name: getBaseName(pokemon.name),
        form: getForm(pokemon.name),
    };

    return (
        <div className="z-20 flex h-full w-full flex-col gap-8 px-5 py-16 sm:px-[7%]">
            <div className="flex w-full items-end justify-between">
                <div className="flex h-96 flex-col justify-between">
                    <div className="mt-1 flex flex-col gap-2">
                        {pokemon.types.map((type: Type, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className="relative h-[50px] w-[50px]"
                                >
                                    <NextImage
                                        src={`/types/${type.type.name}.svg`}
                                        alt="Pokemon type"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <div>
                        {pokemonVariant && (
                            <p className="text-2xl font-bold text-white">
                                {pokemonVariant.form}
                            </p>
                        )}
                        <h1 className="s:text-4xl font-sora font-extrabold text-white drop-shadow-2xl md:text-8xl">
                            {capitalizeFirstLetter(pokemonVariant.name)}
                        </h1>
                    </div>
                </div>

                <div className="h-96 w-96">
                    <div className="relative h-full w-full">
                        <NextImage
                            src={imageUrl}
                            alt={pokemon.name}
                            layout="fill"
                            objectFit="contain"
                        />

                        <p className="absolute right-[-30px] top-[26px] rotate-90 font-atkinson text-3xl text-white text-opacity-50">
                            {pokemon.id.toString().padStart(5, "0")}
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
                <div className="flex h-fit flex-col gap-16">
                    <div className="flex flex-col gap-2.5">
                        <h1 className="text-2xl text-white">Details</h1>

                        <div className="w-full overflow-hidden rounded-20 bg-foreground text-white shadow-custom">
                            <div className="flex p-5 shadow-custom">
                                <div className="w-[120px] flex-shrink-0 font-black">
                                    Gender ratio
                                </div>
                                <div>
                                    {species.gender_rate === -1 ? (
                                        <p>Genderless</p>
                                    ) : (
                                        <div className="flex gap-5">
                                            <div className="flex gap-2.5 text-male">
                                                <div>
                                                    <MaleIcon />
                                                </div>
                                                {((8 - species.gender_rate) /
                                                    8) *
                                                    100}
                                                %
                                            </div>
                                            <div className="flex gap-2.5 text-female">
                                                <div>
                                                    <FemaleIcon />
                                                </div>
                                                {(species.gender_rate / 8) *
                                                    100}
                                                %
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex p-5">
                                <div className="w-[120px] flex-shrink-0 font-black">
                                    Height
                                </div>
                                <div>{(pokemon.height / 10).toFixed(1)} m</div>
                            </div>
                            <div className="flex p-5 shadow-custom">
                                <div className="w-[120px] flex-shrink-0 font-black">
                                    Weight
                                </div>
                                <div>
                                    {pokemon.weight / 10} kg or{" "}
                                    {Math.round(
                                        (pokemon.weight / 10) * 2.20462,
                                    )}{" "}
                                    lbs
                                </div>
                            </div>
                            <div className="flex items-center p-5">
                                <div className="w-[120px] flex-shrink-0 font-black">
                                    Abilities
                                </div>
                                <div className="flex w-full">
                                    <p>
                                        {capitalizeFirstLetter(
                                            pokemon.abilities[0].ability.name,
                                        )}{" "}
                                        {pokemon.abilities[1] &&
                                            `and ${capitalizeFirstLetter(pokemon.abilities[1].ability.name)}`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Radar pokemonStats={pokemon.stats} />
                </div>

                <EvolutionChain
                    currentPokemon={pokemon.name}
                    evolutionChain={evolutionChain}
                    varieties={species.varieties}
                />
            </div>

            <div className="grid grid-cols-2"></div>
        </div>
    );
}
