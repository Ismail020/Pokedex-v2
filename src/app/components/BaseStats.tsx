"use client";

import { Stat } from "../utils/PokemonData";
import { Tooltip } from "flowbite-react";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

type PokemonStatProps = {
    stats: Stat[];
};

export default function BaseStats({ stats }: PokemonStatProps) {
    const preStats = [
        {
            name: 'hp',
            shortName: 'HP',
            color: 'bg-red-600',
        },
        {
            name: 'attack',
            shortName: 'ATK',
            color: 'bg-orange-400',
        },
        {
            name: 'defense',
            shortName: 'DEF',
            color: 'bg-yellow-400',
        },
        {
            name: 'special-attack',
            shortName: 'SpA',
            color: 'bg-blue-400',
        },
        {
            name: 'special-defense',
            shortName: 'SpD',
            color: 'bg-green-400',
        },
        {
            name: 'speed',
            shortName: 'SPD',
            color: 'bg-pink-400',
        },
        {
            name: 'total',
            shortName: 'TOT',
            color: 'bg-purple-400',
        }
    ];


    return (
        <div className="flex flex-col">
            <p className="text-white">
                Base stats:
            </p>
            <div>
                {preStats.map((stat, index) => {
                    return (
                        <div key={index} className="flex-col inline-flex items-center border-none rounded-full p-1 mt-1 mr-1 bg-gray-100">
                            <Tooltip content={capitalizeFirstLetter(stat.name)} className="tooltip content">
                                <p className={`border-none rounded-full text-xs text-white w-7 h-7 text-center ${stat.color} flex items-center justify-center select-none`}>
                                    {stat.shortName}
                                </p>
                            </Tooltip>
                            <p className="text-xs mt-1 select-none">
                                {stat.name === 'total' ? (
                                    stats.reduce((acc, s) => acc + s.base_stat, 0)
                                ) : (
                                    stats.find((s) => s.stat.name === stat.name)?.base_stat
                                )}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}