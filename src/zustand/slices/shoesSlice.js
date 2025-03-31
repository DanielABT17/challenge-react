export const createShoesSlice = (set) => ({
    shoes: [],
    fetch: async () => {
        const response = await fetch("../../../data/dataShoes.json");
        const data = await response.json();
        set({ shoes: data });
    }
});
 