"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { fetchPokemons } from "@/service/action";
import PokemonCard from "./PokemonCard";
import { BasePokemon } from "../page";

let page = 1;

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<BasePokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);

 useEffect(() => {
    if (inView && !isLoading) {
      setIsLoading(true);
      fetchPokemons(page)
        .then((res) => {
          setData((prevData) => [...prevData, ...res]);
          page++;
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [inView, isLoading]);

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-8 w-full !mt-8">
        {data.map((pokemon: BasePokemon, index: number) => {
          return <PokemonCard key={index} pokemonData={pokemon} index={index} />;
        })}
      </section>

      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="/spinner.svg"
            alt="spinner"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;