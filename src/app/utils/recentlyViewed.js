export const addToRecentlyViewed = (pokemonName, imageUrl) => {
    if (typeof window !== "undefined") {
        let recentlyViewed =
            JSON.parse(localStorage.getItem("recentlyViewed")) || [];

        recentlyViewed = recentlyViewed.filter(
            (item) => item.name !== pokemonName,
        );

        recentlyViewed.unshift({ name: pokemonName, image: imageUrl });

        if (recentlyViewed.length > 5) {
            recentlyViewed.pop();
        }

        localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
    }
};

export const getRecentlyViewed = () => {
    if (typeof window !== "undefined") {
        return JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    }
    return [];
};
