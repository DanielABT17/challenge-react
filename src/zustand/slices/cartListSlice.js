
import { useShoesStore } from "../shoesStore";

export const createCartList = (set) => ({
    cartList: JSON.parse(localStorage.getItem('cartList')) || [],
    quantity: 1,

    AddQuantity: (quantity) => {
        set(() => ({
            quantity: quantity
        }));
    },



    addCart: (id, quantity) => {
        set((state) => {
        const existingItem = state.cartList.find(item => item.id === id);
        
        if (existingItem) {
            // If the product already exists in the cart, update the quantity
            const updatedCartList = state.cartList.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
            
            // Update local storage after modifying the cartList
            localStorage.setItem("cartList", JSON.stringify(updatedCartList));
            
            return { cartList: updatedCartList };
        } else {
            // If the product is not in the cart, add it as a new item
            const updatedCartList = [...state.cartList, { id, quantity }];
            
            // Update local storage after adding the new item
            localStorage.setItem("cartList", JSON.stringify(updatedCartList));
            
            return { cartList: updatedCartList };
        }
    });
        
    },
     updateCartIncreace: (id) => {
    set((state) => {
      const updatedCart = state.cartList.map((item) => {
        if (item.id !== id) return item;

        const stock = state.shoes.find((shoe) => shoe.id === id)?.stock;

        if (item.quantity >= stock) return item;
        return { ...item, quantity: item.quantity + 1 };
      });

      // Save updated cart to localStorage
      localStorage.setItem('cartList', JSON.stringify(updatedCart));

      return { cartList: updatedCart };
    });
    },
    
    updateCartDecreace: (id) => {
        set((state) => {
        const updatedCart = state.cartList
            .map((item) => {
            if (item.id !== id) return item;

            if (item.quantity <= 1) return null;
            return { ...item, quantity: item.quantity - 1 };
            })
            .filter((item) => item !== null);

        // Save updated cart to localStorage
        localStorage.setItem('cartList', JSON.stringify(updatedCart));

        return { cartList: updatedCart };
        });
    },

    removeCart: (id) => {
    set((state) => {
      const updatedCart = state.cartList.filter((item) => item.id !== id);

      // Save updated cart to localStorage
      localStorage.setItem('cartList', JSON.stringify(updatedCart));

      return { cartList: updatedCart };
    });
    },


    countItems: () => {
        const cartList = useShoesStore.getState().cartList;
        return cartList.reduce((total, item) => total + item.quantity, 0);
    },

    clearCart: () => {
        set({ cartList: [] });
        localStorage.removeItem("cartList");
    }
});
 