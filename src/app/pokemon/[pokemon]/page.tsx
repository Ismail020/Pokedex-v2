import { fetchPokemon, fetchSpecies } from "@/service/action";
import { Pokemon, Type } from "@/app/utils/PokemonData";
import Image from 'next/image'
import capitalizeFirstLetter from "@/app/utils/capitalizeFirstLetter";
import { MaleIcon, FemaleIcon } from "@/app/components/Icons";

interface Params {
    params: {
        pokemon: string;
    };
}

export default async function PokemonPage({ params }: Params) {
    const data: Pokemon = await fetchPokemon(params.pokemon);
    const species = await fetchSpecies(data.species.url);

    return (
        <div className="flex">
            <div className="max-w-[420px] w-full shadow-custom min-h-screen">
                Sidebar
            </div>
            <div className="w-full px-5 sm:px-[10%] flex flex-col gap-8 py-16 h-full">
                <div className="flex justify-between w-full items-end">
                    <div className="flex flex-col justify-between h-96">
                        <div className="flex flex-col gap-2 mt-1">
                            {data.types.map((type: Type, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        className="w-[50px] h-[50px] relative"
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

                        <h1 className="s:text-4xl md:text-8xl text-white drop-shadow-2xl z-10 font-sora font-extrabold">
                            {capitalizeFirstLetter(data.name)}
                        </h1>
                    </div>

                    <div className="h-96 w-96 z-10">
                        <div className="w-full h-full relative">
                            <Image
                                src={data.sprites.other?.home.front_default || "/PokemonEgg.png"}
                                alt={data.name}
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2.5">
                    <h1 className="text-2xl	text-white">
                        Details
                    </h1>

                    <div className="w-fit rounded-20 shadow-custom bg-foreground overflow-hidden divide-y-[0.1px] divide-[#3a3a3a] text-white">
                        <div className="shadow-custom p-5 flex">
                            <div className="font-black w-[120px]">
                                Gender ratio
                            </div>
                            <div>
                                {species.gender_rate === -1 ? (
                                    <p>Genderless</p>
                                ) : (
                                    <div className="flex gap-5">
                                        <div className="flex gap-2.5 text-male">
                                            <div>
                                                <MaleIcon />
                                            </div>
                                            {((8 - species.gender_rate) / 8) * 100}%
                                        </div>
                                        <div className="flex gap-2.5 text-female">
                                            <div>
                                                <FemaleIcon />
                                            </div>
                                            {(species.gender_rate / 8) * 100}%
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="shadow-custom p-5">
                            amk
                        </div>
                        <div className="shadow-custom p-5">
                            amk
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}