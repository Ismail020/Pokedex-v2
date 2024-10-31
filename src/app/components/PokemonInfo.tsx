"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Species } from "../typescript/SpeciesData";
import { Pokemon, Type } from "../typescript/PokemonData";
import { MaleIcon, FemaleIcon } from "@/app/components/Icons";
import { addToRecentlyViewed } from "@/app/utils/recentlyViewed";
import capitalizeFirstLetter from "@/app/utils/capitalizeFirstLetter";
import { getForm, getBaseName } from "@/app/utils/formUtils";

interface PokemonInfoProps {
    pokemon: Pokemon;
    species: Species;
}

export default function PokemonInfo({ pokemon, species }: PokemonInfoProps) {
    useEffect(() => {
        addToRecentlyViewed(pokemon.name);
    }, [pokemon.name]);

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
                        <Image
                            src={
                                pokemon.sprites.other?.home.front_default ||
                                "/PokemonEgg.png"
                            }
                            alt={pokemon.name}
                            layout="fill"
                            objectFit="contain"
                        />

                        <p className="font-atkinson absolute right-[-30px] top-[26px] rotate-90 text-3xl text-white text-opacity-50">
                            {pokemon.id.toString().padStart(5, "0")}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2.5">
                <h1 className="text-2xl text-white">Details</h1>

                <div className="w-fit overflow-hidden rounded-20 bg-foreground text-white shadow-custom">
                    <div className="flex p-5 shadow-custom">
                        <div className="w-[120px] font-black">Gender ratio</div>
                        <div>
                            {species.gender_rate === -1 ? (
                                <p>Genderless</p>
                            ) : (
                                <div className="flex gap-5">
                                    <div className="flex gap-2.5 text-male">
                                        <div>
                                            <MaleIcon />
                                        </div>
                                        {((8 - species.gender_rate) / 8) * 100}%
                                    </div>
                                    <div className="flex gap-2.5 text-female">
                                        <div>
                                            <FemaleIcon />
                                        </div>
                                        {(species.gender_rate / 8) * 100}%
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="p-5">amk</div>
                    <div className="p-5 shadow-custom">amk</div>
                </div>
            </div>
        </div>
    );
}
