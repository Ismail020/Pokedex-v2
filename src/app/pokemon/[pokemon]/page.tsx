import { fetchPokemon, fetchSpecies } from "@/service/action";
import { Pokemon, Type } from "@/app/utils/PokemonData";
import Image from "next/image";
import capitalizeFirstLetter from "@/app/utils/capitalizeFirstLetter";
import { MaleIcon, FemaleIcon } from "@/app/components/Icons";
import Sidebar from "@/app/components/Sidebar";
import typeColors from "@/app/utils/typeColors";

interface Params {
    params: {
        pokemon: string;
    };
}

export default async function PokemonPage({ params }: Params) {
    const data: Pokemon = await fetchPokemon(params.pokemon);
    const species = await fetchSpecies(data.species.url);
    const form = {
        name: data.name.includes("gmax")
            ? data.name.replace("-gmax", "")
            : data.name,
        form: getForm(),
    };

    const gradientStart = data?.types[0]?.type.name
        ? typeColors[data.types[0].type.name]
        : typeColors.default;

    const gradientEnd = data?.types[1]
        ? typeColors[data.types[1].type.name]
        : `${gradientStart}33`;

    function getForm() {
        return data.name.includes("gmax") ? "Gigantamax" : "";
    }

    return (
        <div
            className="relative z-10 flex"
            style={
                {
                    "--gradient-color-start": gradientStart,
                    "--gradient-color-end": gradientEnd,
                } as React.CSSProperties
            }
        >
            <div className="rotate-gradient absolute right-0 top-0 h-[300px] w-[300px]"></div>

            <Sidebar />
            <div className="flex h-full w-full flex-col gap-8 px-5 py-16 sm:px-[10%]">
                <div className="flex w-full items-end justify-between">
                    <div className="flex h-96 flex-col justify-between">
                        <div className="mt-1 flex flex-col gap-2">
                            {data.types.map((type: Type, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        className="relative h-[50px] w-[50px]"
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
                            {form && (
                                <p className="text-2xl font-bold text-white">
                                    {form.form}
                                </p>
                            )}
                            <h1 className="s:text-4xl font-sora font-extrabold text-white drop-shadow-2xl md:text-8xl">
                                {capitalizeFirstLetter(form.name)}
                            </h1>
                        </div>
                    </div>

                    <div className="h-96 w-96">
                        <div className="relative h-full w-full">
                            <Image
                                src={
                                    data.sprites.other?.home.front_default ||
                                    "/PokemonEgg.png"
                                }
                                alt={data.name}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2.5">
                    <h1 className="text-2xl text-white">Details</h1>

                    <div className="w-fit overflow-hidden rounded-20 bg-foreground text-white shadow-custom">
                        <div className="flex p-5 shadow-custom">
                            <div className="w-[120px] font-black">
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
                                            {((8 - species.gender_rate) / 8) *
                                                100}
                                            %
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
                        <div className="p-5">amk</div>
                        <div className="p-5 shadow-custom">amk</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
