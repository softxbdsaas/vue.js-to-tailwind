// stores/cart.js
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({
        cart: [],
    }),
    getters: {
        totalItems: (state) => state.cart.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: (state) =>
            state.cart.reduce((sum, item) => sum + item.quantity * item.price, 0),
    },
    actions: {
        addToCart(product) {
            const existingProduct = this.cart.find((item) => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart(productId) {
            const productIndex = this.cart.findIndex((item) => item.id === productId);
            if (productIndex !== -1) {
                this.cart.splice(productIndex, 1);
            }
        },
        updateQuantity(productId, quantity) {
            const product = this.cart.find((item) => item.id === productId);
            if (product && quantity > 0) {
                product.quantity = quantity;
            }
        },
        clearCart() {
            this.cart = [];
        },
    },
    persist: true, // Enable persistence for this store
});
