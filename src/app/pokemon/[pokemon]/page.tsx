interface Params {
    params: {
        pokemon: string;
    };
}

export default async function PokemonPage({ params }: Params) {
    return (
        <div>
            <h1>Pokemon</h1>
            <p>{params.pokemon}</p>
        </div>
    )
}