interface Params {
    params: {
        id: string;
    };
}

export default async function PokemonPage({ params }: Params) {
    return (
        <div>
            <h1>Pokemon</h1>
            <p>{params.id}</p>
        </div>
    )
}