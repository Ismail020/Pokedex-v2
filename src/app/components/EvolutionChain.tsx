import { EvolutionChainData } from "../typescript/EvolutionChainData";
import { Variety } from "../typescript/SpeciesData";
import PokemonCardShort from "./PokemonCardShort";

interface EvolutionChainProps {
    currentPokemon: string;
    evolutionChain: EvolutionChainData;
    varieties: Variety[];
}

export default function EvolutionChain({
    currentPokemon,
    evolutionChain,
    varieties,
}: EvolutionChainProps) {
    const filteredVarieties = varieties.filter(
        (variety) => variety.pokemon.name !== currentPokemon,
    );

    return (
        <div>
            <div className="flex flex-col gap-16">
                {evolutionChain.chain.evolves_to.length > 0 && (
                    <>
                        <div className="flex flex-col gap-2.5">
                            <h1 className="text-2xl text-white">
                                Evolution chain
                            </h1>
                            <PokemonCardShort
                                pokemonData={evolutionChain.chain.species}
                            />

                            {evolutionChain.chain.evolves_to.length > 0 &&
                                evolutionChain.chain.evolves_to.map(
                                    (evolution, index) => {
                                        return (
                                            <PokemonCardShort
                                                key={index}
                                                pokemonData={evolution.species}
                                            />
                                        );
                                    },
                                )}

                            {evolutionChain.chain.evolves_to.some(
                                (evolution) => evolution.evolves_to.length > 0,
                            ) &&
                                evolutionChain.chain.evolves_to.map(
                                    (evolution, index) => {
                                        return evolution.evolves_to.map(
                                            (nextEvolution, nextIndex) => {
                                                return (
                                                    <PokemonCardShort
                                                        key={`${index}-${nextIndex}`}
                                                        pokemonData={
                                                            nextEvolution.species
                                                        }
                                                    />
                                                );
                                            },
                                        );
                                    },
                                )}
                        </div>
                    </>
                )}

                <div className="flex flex-col gap-2.5">
                    {varieties.length > 1 && (
                        <>
                            <h1 className="text-2xl text-white">
                                Related pokemon
                            </h1>
                            {filteredVarieties.map((variety, index) => {
                                return (
                                    <PokemonCardShort
                                        key={index}
                                        pokemonData={variety.pokemon}
                                    />
                                );
                            })}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
