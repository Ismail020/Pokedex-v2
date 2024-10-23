import Image from "next/image";
import PokemonCard from "./components/PokemonCard";
import LoadMore from "./components/LoadMore";
import { fetchPokemons } from "@/service/action";
import ScrollToTop from "./components/ScrollToTop";

export interface Pokemon {
  name: string;
  url: string;
  id: number;
}

export default async function Home() {
  const data: Pokemon[] = await fetchPokemons(0);

  return (
    <main className="m-auto max-w-9xl px-5 md:px-50 pb-50">
      <div className="flex flex-col space-y-20">
        <Image
          src="/International_Pokémon_logo.svg"
          alt="Pokemon logo"
          width={180}
          height={38}
          priority
          className="mx-auto my-10"
        />

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-8 w-full">
          {data.map((pokemon: Pokemon, index: number) => {
            return <PokemonCard key={index} pokemonData={pokemon} index={index} />;
          })}
        </section>

        <LoadMore />
        <ScrollToTop />
      </div>
    </main>
  );
}