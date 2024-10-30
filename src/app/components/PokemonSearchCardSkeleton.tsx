export default function PokemonSearchCardSkeleton() {
    return (
        <div className="flex animate-pulse justify-between gap-4 p-5">
            <div className="flex gap-4">
                <div className="h-16 w-16 flex-shrink-0 rounded-full bg-white bg-opacity-10"></div>
                <div className="flex flex-col justify-around">
                    <div className="mb-3 h-3 w-14 rounded bg-white bg-opacity-10"></div>
                    <div className="h-4 w-32 rounded bg-white bg-opacity-10"></div>
                </div>
            </div>
            <div className="flex w-full flex-col items-end justify-end gap-1">
                <div className="mt-3 h-[25px] w-[25px] rounded-full bg-white bg-opacity-10"></div>
            </div>
        </div>
    );
}
