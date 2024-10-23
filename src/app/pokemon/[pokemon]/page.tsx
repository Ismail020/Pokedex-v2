import { fetchPokemon, fetchSpecies } from "@/service/action";
import { Pokemon } from "@/app/components/PokemonData";
import Image from 'next/image'
import BaseStats from "@/app/components/BaseStats";
import PokemonWrapper from "@/app/components/PokemonWrapper";
import capitalizeFirstLetter from "@/app/utils/capitalizeFirstLetter";
import Balancer from 'react-wrap-balancer'

interface Params {
    params: {
        pokemon: string;
    };
}

export default async function PokemonPage({ params }: Params) {
    const data: Pokemon = await fetchPokemon(params.pokemon);
    const species = await fetchSpecies(data.species.url);

    return (
        <PokemonWrapper image={data.sprites.other['official-artwork'].front_default}>
            <div className="flex flex-col space-y-20">
                <Image
                    src="/International_Pokémon_logo.svg"
                    alt="Pokemon logo"
                    width={180}
                    height={38}
                    priority
                    className="mx-auto py-10"
                />

                <div className="flex max-w-9xl m-auto px-5 md:px-50 justify-between w-full">
                    <div className="w-1/2 flex flex-col items-center relative mx-auto">
                        <div className="h-96 w-96 z-10">
                            <div className="w-full h-full relative">
                                <Image
                                    src={data.sprites.other['official-artwork'].front_default}
                                    alt={data.name}
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </div>
                        </div>
                        <p className="absolute -bottom-9 text-7xl text-opacity-60 vamp z-0 select-none">
                            {species.names[0].name}
                        </p>
                    </div>

                    <div className="w-1/2 flex flex-col gap-4">
                        <div className="flex relative w-fit">
                            <p className="s:text-4xl md:text-6xl text-white drop-shadow-2xl z-10">
                                {capitalizeFirstLetter(data.name)}
                            </p>

                            <p className="text-9xl absolute inset-0 text-opacity-60 -right-[400px] vamp z-0 flex justify-center items-center select-none">
                                {data.id.toString().padStart(3, '0')}
                            </p>
                        </div>

                        <div className="flex gap-2 mt-1">
                            {data.types.map((type: any, index: number) => {
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

                        <div>
                            <p className="text-xs mr-1 text-white">
                                Height: <span className="text-xs text-gray-400">{data.height} m</span>
                            </p>
                            <p className="text-xs mr-1 text-white">
                                Weight: <span className="text-xs text-gray-400">{data.weight} kg</span>
                            </p>
                        </div>

                        <div className="text-white flex flex-col">
                            <p>
                                Pokedex entry:
                            </p>
                            <Balancer>
                                <p className="text-sm font-light">
                                    {species.flavor_text_entries[0].flavor_text}
                                </p>
                            </Balancer>
                        </div>

                        <BaseStats stats={data.stats} />
                    </div>
                </div>
            </div>
        </PokemonWrapper>
    )
}