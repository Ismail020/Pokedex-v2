export default function PokemonCardSkeleton() {
    return (
        <div className="flex animate-pulse gap-4 p-5">
            <div className="h-28 w-28 flex-shrink-0 rounded-full bg-white bg-opacity-10"></div>
            <div className="flex w-full flex-col justify-center gap-1">
                <div className="mb-3 h-3 w-10 rounded bg-white bg-opacity-10"></div>
                <div className="h-4 w-4/12 rounded bg-white bg-opacity-10"></div>
                <div className="mt-3 h-[25px] w-[25px] rounded-full bg-white bg-opacity-10"></div>
            </div>
        </div>
    );
}
