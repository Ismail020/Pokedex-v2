import { fetchPokemon, fetchSpecies } from "@/service/action";
import { Pokemon, Type } from "@/app/typescript/PokemonData";
import Sidebar from "@/app/components/Sidebar";
import typeColors from "@/app/typescript/typeColors";
import PokemonView from "@/app/components/PokemonInfo";

interface Params {
    params: {
        pokemon: string;
    };
}

export default async function PokemonPage({ params }: Params) {
    const data: Pokemon = await fetchPokemon(params.pokemon);
    const species = await fetchSpecies(data.species.url);

    const gradientStart = data?.types[0]?.type.name
        ? typeColors[data.types[0].type.name]
        : typeColors.default;

    const gradientEnd = data?.types[1]
        ? typeColors[data.types[1].type.name]
        : `${gradientStart}33`;

    return (
        <div
            className="relative z-10 flex overflow-hidden"
            style={
                {
                    "--gradient-color-start": gradientStart,
                    "--gradient-color-end": gradientEnd,
                } as React.CSSProperties
            }
        >
            <div className="rotate-gradient absolute right-0 top-0 h-[300px] w-[300px]"></div>

            <Sidebar />
            <PokemonView pokemon={data} species={species} />
        </div>
    );
}
