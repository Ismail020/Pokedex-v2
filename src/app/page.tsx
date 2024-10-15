import Image from "next/image";
import PokemonCard from "./components/PokemonCard";
import LoadMore from "./components/LoadMore";
import { fetchPokemons } from "@/service/action";

export interface Pokemons {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export default async function Home() {
  const data: Pokemons = await fetchPokemons(0);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <Image
        src="/International_Pokémon_logo.svg"
        alt="Pokemon logo"
        width={180}
        height={38}
        priority
        className="m-auto"
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full">
        {data.map((pokemon: Result) => {
          const index = pokemon.url.split("/").filter(Boolean).pop();
          return <PokemonCard key={index} index={index}/>;
        })}
      </section>

      <LoadMore />
    </main>
  );
}