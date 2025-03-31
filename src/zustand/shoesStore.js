import {create} from "zustand";
import {createShoesSlice}  from "./slices/shoesSlice.js";
 
export const useShoesStore = create((...a) => ({
    ...createShoesSlice(...a)        
}));