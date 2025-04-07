import {create} from "zustand";
import {createShoesSlice}  from "./slices/shoesSlice.js";
import {createCartList} from "./slices/cartListSlice.js";
 
export const useShoesStore = create((...a) => ({
    ...createShoesSlice(...a)
    ,...createCartList(...a)
}));