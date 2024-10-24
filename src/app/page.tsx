import Image from "next/image";
import PokemonCard from "./components/PokemonCard";
import LoadMore from "./components/LoadMore";
import { fetchPokemons } from "@/service/action";

export interface BasePokemon {
    name: string;
    url: string;
}

export default async function Home() {
    const data: BasePokemon[] = await fetchPokemons(0);

    return (
        <main className="m-auto max-w-9xl px-5 pb-50 md:px-50">
            <div className="flex flex-col space-y-20">
                <Image
                    src="/International_Pokémon_logo.svg"
                    alt="Pokemon logo"
                    width={180}
                    height={38}
                    priority
                    className="mx-auto my-10"
                />

                <section className="grid w-full grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {data.map((pokemon: BasePokemon, index: number) => {
                        return (
                            <PokemonCard
                                key={index}
                                pokemonData={pokemon}
                                index={index}
                            />
                        );
                    })}
                </section>

                <LoadMore />
            </div>
        </main>
    );
}
