"use client";

import Image from "next/image";
import Searchbar from "./Searchbar";
import { useState, useEffect } from "react";
import { getRecentlyViewed } from "../utils/recentlyViewed";
import Link from "next/link";

export interface RecentlyViewedPokemon {
    name: string;
    image: string;
}

export default function Sidebar() {
    const [recentlyViewed, setRecentlyViewed] = useState([]);

    useEffect(() => {
        setRecentlyViewed(getRecentlyViewed());
    }, []);

    return (
        <div className="z-30 flex min-h-screen w-full max-w-[420px] flex-col justify-between gap-[60px] shadow-custom">
            <div className="flex flex-col gap-5">
                <Searchbar />

                <div>
                    <p className="p-5 font-atkinson text-2xl text-white">
                        Recently viewed
                    </p>
                    <div className="flex gap-5 overflow-x-auto whitespace-nowrap px-5">
                        {recentlyViewed.map(
                            (
                                recentlyViewed: RecentlyViewedPokemon,
                                index: number,
                            ) => (
                                <Link
                                    className="relative h-28 w-28 flex-shrink-0 rounded-full bg-white bg-opacity-10"
                                    href={`/pokemon/${recentlyViewed.name}`}
                                    key={index}
                                >
                                    <Image
                                        src={
                                            recentlyViewed.image ||
                                            "/PokemonEgg.png"
                                        }
                                        alt={recentlyViewed.name}
                                        layout="fill"
                                        objectFit="contain"
                                        className="mx-auto w-24 rounded-20"
                                    />
                                </Link>
                            ),
                        )}
                    </div>
                </div>
            </div>

            <div className="w-full p-5">
                <Link
                    href={`/pokemon/${
                        Math.random() < 0.5
                            ? Math.floor(Math.random() * 1025) + 1
                            : Math.floor(Math.random() * 277) + 10001
                    }`}
                    className="flex w-full items-center justify-center rounded-md py-6 text-white shadow-custom"
                >
                    Random pokemon
                </Link>
            </div>
        </div>
    );
}
