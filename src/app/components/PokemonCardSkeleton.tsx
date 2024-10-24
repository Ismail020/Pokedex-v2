export default function PokemonCardSkeleton() {
    return (
        <div className="animate-pulse flex gap-4 p-5">
            <div className="rounded-full bg-white bg-opacity-10 w-28 h-28 flex-shrink-0">
            </div>
            <div className="flex flex-col justify-center gap-1 w-full">
                <div className="h-3 bg-white bg-opacity-10 rounded w-10 mb-3"></div>
                <div className="h-4 bg-white bg-opacity-10 rounded w-4/12"></div>
                <div className="mt-3 w-[25px] h-[25px] rounded-full bg-white bg-opacity-10"></div>
            </div>
        </div>
    )
}