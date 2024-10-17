"use client"

import Image from "next/image";
import { Pokemon } from "./PokemonData";
import { useEffect, useState } from "react";
import Link from "next/link";

type PokemonCardProps = {
    pokemonData: Pokemon;
    index: number;
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

    return (
        <div className="w-full bg-white border-none rounded-2xl shadow-lg h-36 transition-transform duration-200 ease-in-out hover:scale-110">
            {loading ? (
                <div className="animate-pulse">
                    <div className="w-24 h-24 rounded-full -mt-16 mx-auto bg-gray-300"></div>
                    <div className="pt-6 flex flex-col justify-center items-center">
                        <div className="h-3 bg-gray-300 rounded w-10 mb-3"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-5 mt-3 w-12 rounded bg-gray-300"></div>
                    </div>
                </div>
            ) : (
                <Link href={`/pokemon/${pokemonData.name}`}>
                    <div>
                        <Image
                            src={pokemonDetails.sprites.other?.home.front_default}
                            alt={pokemonData.name}
                            width={200}
                            height={200}
                            className="rounded -mt-16 mx-auto w-24"
                        />
                        <div className="pt-6 flex flex-col justify-center items-center">
                            <span className="text-gray-500 text-sm">
                                N°{pokemonDetails.id.toString().padStart(3, '0')}
                            </span>
                            <h3 className="font-medium text-lg">
                                {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}
                            </h3>
                            <div className="flex gap-2 justify-center mt-1">
                                {pokemonDetails.types.map((type: any, index: number) => {
                                    return (
                                        <div
                                            key={index}
                                            className="w-[50px] h-[22px] relative"
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
                    </div>
                </Link>
            )}
        </div>
    );
}