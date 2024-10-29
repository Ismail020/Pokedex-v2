"use client";

import { SearchIcon } from "./Icons";
import { useState, useEffect, useRef } from "react";
import { fetchAllPokemons } from "@/service/action";
import { useRouter } from "next/navigation";
import { BasePokemon } from "../page";
import PokemonCard from "./PokemonCard";

export default function Searchbar() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [allPokemons, setAllPokemons] = useState<BasePokemon[]>([]);
    const [searchResults, setSearchResults] = useState<BasePokemon[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [searching, setSearching] = useState(false);

    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            const data = await fetchAllPokemons();
            setAllPokemons(data);
        };

        fetchPokemons();
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setOpen(false);
                setSelectedIndex(0);
            }
            if (e.key === "k" && e.metaKey) {
                setOpen(true);
                setTimeout(() => inputRef.current?.focus(), 0);
            }
            if (e.key === "ArrowDown" && open) {
                setSelectedIndex((prevIndex) => {
                    const newIndex = Math.min(
                        prevIndex + 1,
                        searchResults.length - 1,
                    );
                    itemRefs.current[newIndex]?.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                    });
                    return newIndex;
                });
            }
            if (e.key === "ArrowUp" && open) {
                setSelectedIndex((prevIndex) => {
                    const newIndex = Math.max(prevIndex - 1, 0);
                    itemRefs.current[newIndex]?.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                    });
                    return newIndex;
                });
            }
            if (e.key === "Enter" && selectedIndex >= 0 && open) {
                const selectedPokemon = searchResults[selectedIndex];
                setOpen(false);
                setSelectedIndex(0);
                setSearchResults([]);
                setQuery("");
                router.push(`/pokemon/${selectedPokemon.name}`);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [open, searchResults, selectedIndex, router]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery = e.target.value;
        setQuery(searchQuery);

        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

        setSearching(true);

        debounceTimeout.current = setTimeout(() => {
            if (searchQuery) {
                const filteredResults = allPokemons.filter((pokemon) =>
                    pokemon.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()),
                );
                setSearchResults(filteredResults);
                setSelectedIndex(filteredResults.length > 0 ? 0 : -1);
            } else {
                setSearchResults([]);
                setSelectedIndex(-1);
            }

            setSearching(false);
        }, 200);
    };

    return (
        <div>
            <div
                className="flex w-full cursor-pointer items-center justify-between rounded-md bg-foreground py-1.5 pl-2 pr-3 text-gray-400 shadow-custom transition duration-300 ease-in-out hover:bg-foregroundHover"
                onClick={() => setOpen(!open)}
            >
                <div className="flex items-center gap-3">
                    <SearchIcon />
                    Search
                </div>
                <p className="flex gap-0.5 text-xs">
                    <abbr title="Command" className="no-underline">
                        ⌘
                    </abbr>
                    K
                </p>
            </div>

            {open && (
                <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-background/80 p-[1.4rem] backdrop-blur md:p-[10vh] lg:p-[12vh]">
                    <div className="relative mx-auto flex h-fit max-h-full w-full max-w-[47.375rem] flex-col items-center overflow-scroll rounded bg-foreground shadow-custom">
                        <div className="relative w-full">
                            <div className="sticky top-0 z-50 w-full">
                                <form className="w-full">
                                    <label
                                        htmlFor="default-search"
                                        className="sr-only mb-2 text-sm font-medium text-white"
                                    >
                                        Search
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 start-0 flex select-none items-center ps-3 text-white">
                                            <SearchIcon />
                                        </div>
                                        <input
                                            type="search"
                                            id="default-search"
                                            ref={inputRef}
                                            className="block w-full border-transparent bg-foreground p-4 ps-10 text-sm text-white shadow-custom focus:border-transparent focus:ring-0"
                                            placeholder="Search for a Pokemon"
                                            value={query}
                                            onChange={handleSearch}
                                            required
                                        />
                                        <kbd
                                            className="absolute bottom-2.5 end-2.5 cursor-pointer rounded-lg border border-gray-200 border-transparent bg-aboveForeground px-2 py-1.5 text-xs font-semibold text-white"
                                            onClick={() => setOpen(false)}
                                        >
                                            ESC
                                        </kbd>
                                    </div>
                                </form>
                            </div>

                            <div className="w-full text-white shadow-custom">
                                {searching ? (
                                    <div className="flex w-full items-center justify-center p-5 text-gray-400">
                                        Loading...
                                    </div>
                                ) : searchResults.length > 0 ? (
                                    <ul className="flex flex-col gap-2 px-3 py-3">
                                        {searchResults.map((pokemon, index) => (
                                            <PokemonCard
                                                key={index}
                                                pokemonData={pokemon}
                                                index={index}
                                            />
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="flex w-full items-center justify-center p-5 text-gray-400">
                                        No matching Pokémon found
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
