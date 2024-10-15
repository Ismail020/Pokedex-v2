"use client"

import Image from "next/image";
import { Pokemon } from "./PokemonData";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

type PokemonCardProps = {
    pokemonData: Pokemon;
    index: number;
};

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PokemonCard({ pokemonData, index }: PokemonCardProps) {
    const cardRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if (cardRef.current) {
            const delay = (index % 4) * 0.1;

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 95%",
                    toggleActions: "play none none none",
                },
            });

            timeline.fromTo(
                cardRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: delay,
                    ease: "power2.out",
                }
            );
        }
    });

    return (
        <div ref={cardRef} className="w-full opacity-0 bg-white border-none rounded-2xl shadow-lg h-36">
            <Image
                src={pokemonData.data.sprites.other?.home.front_default}
                alt={pokemonData.name}
                width={200}
                height={200}
                className="rounded -mt-16 mx-auto w-24"
            />
            <div className="pt-6 flex flex-col justify-center items-center">
                <span className="text-gray-500 text-sm">
                    N°{pokemonData.data.id.toString().padStart(3, '0')}
                </span>
                <h3 className="font-medium text-lg">{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h3>

                <div className="flex gap-2 justify-center mt-1">
                    {pokemonData.data.types.map((type, index) => {
                        return (
                            <div
                                key={index}
                                className="w-[50px] h-[22px] relative"
                            >
                                <Image
                                    src={`/types/${type.type.name}.svg`}
                                    alt="Pokemon logo"
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}