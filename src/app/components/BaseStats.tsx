"use client";

import { Stat } from "../typescript/PokemonData";
import { Tooltip } from "flowbite-react";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

type PokemonStatProps = {
    stats: Stat[];
};

export default function BaseStats({ stats }: PokemonStatProps) {
    const preStats = [
        {
            name: "hp",
            shortName: "HP",
            color: "bg-red-600",
        },
        {
            name: "attack",
            shortName: "ATK",
            color: "bg-orange-400",
        },
        {
            name: "defense",
            shortName: "DEF",
            color: "bg-yellow-400",
        },
        {
            name: "special-attack",
            shortName: "SpA",
            color: "bg-blue-400",
        },
        {
            name: "special-defense",
            shortName: "SpD",
            color: "bg-green-400",
        },
        {
            name: "speed",
            shortName: "SPD",
            color: "bg-pink-400",
        },
        {
            name: "total",
            shortName: "TOT",
            color: "bg-purple-400",
        },
    ];

    return (
        <div className="flex flex-col">
            <p className="text-white">Base stats:</p>
            <div>
                {preStats.map((stat, index) => {
                    return (
                        <div
                            key={index}
                            className="mr-1 mt-1 inline-flex flex-col items-center rounded-full border-none bg-gray-100 p-1"
                        >
                            <Tooltip
                                content={capitalizeFirstLetter(stat.name)}
                                className="content tooltip"
                            >
                                <p
                                    className={`h-7 w-7 rounded-full border-none text-center text-xs text-white ${stat.color} flex select-none items-center justify-center`}
                                >
                                    {stat.shortName}
                                </p>
                            </Tooltip>
                            <p className="mt-1 select-none text-xs">
                                {stat.name === "total"
                                    ? stats.reduce(
                                          (acc, s) => acc + s.base_stat,
                                          0,
                                      )
                                    : stats.find(
                                          (s) => s.stat.name === stat.name,
                                      )?.base_stat}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
