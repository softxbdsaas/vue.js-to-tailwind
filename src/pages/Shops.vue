<template>
    <div class="mx-auto pt-16" style="max-width: 1400px; margin: auto;">
        <h1>Total Product: {{ products?.length }}</h1>
        <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 space-x-1 gap-3">
            <div
                v-for="product in products"
                :key="product.id"
                class="relative flex m-2 flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg"
            >
                <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    <img
                        :src="product.thumbnail"
                        :alt="product.title"
                        class="object-cover w-full h-full"
                    />
                </div>
                <div class="p-4">
                    <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                        {{ product.title }}
                    </h6>
                    <p class="text-slate-600 leading-normal font-light">
                        {{ product.description }}
                    </p>
                </div>
                <div class="px-4 pb-4 pt-0 mt-2">
                    <button
                        @click="addToCart(product)"
                        class="rounded-md uppercase bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

        <div class="mt-10">
            <h2 class="text-2xl font-bold">Cart</h2>
            <div v-if="cart.length" class="mt-5 ">
                <div
                    v-for="item in cart"
                    :key="item.id"
                    class="flex justify-between items-center mb-4 my-2 p-4 bg-gray-100 rounded-md"
                >
                    <div>
                        <h3 class="font-semibold">{{ item.title }}</h3>
                        <p class="text-sm">Quantity: {{ item.quantity }}</p>
                        <p class="text-sm">Price: ${{ item.price }}</p>
                    </div>
                    <div class="flex items-center gap-1">
                        <button
                            @click="updateQuantity(item.id, item.quantity + 1)"
                            class="px-2 py-1 cursor-pointer bg-green-600 text-white rounded-md"
                        >
                            +
                        </button>
                        <button
                            @click="updateQuantity(item.id, item.quantity - 1)"
                            class="px-2 py-1  cursor-pointer bg-yellow-600 text-white rounded-md"
                        >
                            -
                        </button>
                        <button
                            @click="removeFromCart(item.id)"
                            class="px-2 py-1 bg-red-600 text-white rounded-md"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
            <div v-else>
                <p>Your cart is empty.</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { useCartStore } from "@/store/cart";

export default {
    data() {
        return {
            products: null,
        };
    },
    computed: {
        cart() {
            return this.cartStore.cart;
        },
    },
    methods: {
        addToCart(product) {
            this.cartStore.addToCart(product);
        },
        removeFromCart(productId) {
            this.cartStore.removeFromCart(productId);
        },
        updateQuantity(productId, quantity) {
            this.cartStore.updateQuantity(productId, quantity);
        },
    },
    async mounted() {
        try {
            const response = await axios.get("https://dummyjson.com/products");
            this.products = response.data.products;
        } catch (error) {
            console.error(error);
        }
    },
    setup() {
        const cartStore = useCartStore();
        return { cartStore };
    },
};
</script>
