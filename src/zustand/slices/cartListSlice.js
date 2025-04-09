import { useShoesStore } from "../shoesStore";

export const createCartList = (set) => ({
    cartList: [{id:1 , quantity: 5}, {id:2, quantity: 1}, {id:3, quantity: 1}],
    addCart: (id, quantity) => {
        set((state) => {
            const existingItem = state.cartList.find(item => item.id === id);
    
            if (existingItem) {
                // Si el producto ya está en el carrito, actualiza la cantidad
                return {
                    cartList: state.cartList.map(item =>
                        item.id === id
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    )
                };
            } else {
                // Si no está en el carrito, lo agrega como nuevo
                return {
                    cartList: [...state.cartList, { id, quantity }]
                };
            }
        });
    },
    updateCartIncreace: (id) => {
        set((state) => ({

            cartList: state.cartList.map((item) =>{
                if(item.id !== id){
                    return item;
                }
                const quantityItem = state.shoes.find((shoe) => shoe.id === id).stock;
                
                if(item.quantity >= quantityItem){
                    return item;
                }
                return { ...item, quantity: item.quantity + 1 }
        }),
        }));
    },
    updateCartDecreace: (id) => {
        set((state) => ({
            cartList: state.cartList.map((item) => {
                if (item.id !== id) {
                    return item;
                }
                if(item.quantity === 1){
                    return null;
                }
                if (item.quantity <= 1) {
                    return item;
                }
                return { ...item, quantity: item.quantity - 1 };
            }).filter((item) => item !== null)
        }));
    },
    removeCart: (id) => {
        set((state) => ({
            cartList: state.cartList.filter((item) => item.id !== id),
        }));
    },

    countItems: () => {
        const cartList = useShoesStore.getState().cartList;
        return cartList.reduce((total, item) => total + item.quantity, 0);
    },

    clearCart: () => {
        set({ cartList: [] });
    }
});
 