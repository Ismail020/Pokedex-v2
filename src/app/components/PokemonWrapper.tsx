"use client";

import { useExtractColors } from "react-extract-colors";
import { ReactNode } from "react";
import Loader from "./Loader";

export default function PokemonWrapper({ image, children }: { image: string; children: ReactNode }) {
    const { colors, dominantColor, darkerColor, lighterColor, loading, error } = useExtractColors(image);

    return (
        loading ? (
            <Loader />
        ) : (
            <div className="h-screen w-full">
                {children}
            </div>
        )
    );
}
