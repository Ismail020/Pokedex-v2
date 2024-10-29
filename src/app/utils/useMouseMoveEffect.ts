import { useEffect } from "react";

const useMouseMoveEffect = () => {
    useEffect(() => {
        const handleOnMouseMove = (e: MouseEvent) => {
            const target = e.currentTarget as HTMLElement;
            const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            target.style.setProperty("--mouse-x", `${x}px`);
            target.style.setProperty("--mouse-y", `${y}px`);
        };

        const pokemonCards = document.querySelectorAll(".pokemon-card");
        pokemonCards.forEach((pokemonCard) => {
            if (pokemonCard instanceof HTMLElement) {
                pokemonCard.addEventListener("mousemove", handleOnMouseMove);
            }
        });

        return () => {
            pokemonCards.forEach((pokemonCard) => {
                if (pokemonCard instanceof HTMLElement) {
                    pokemonCard.removeEventListener(
                        "mousemove",
                        handleOnMouseMove,
                    );
                }
            });
        };
    }, []);
};

export default useMouseMoveEffect;
