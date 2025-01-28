<template>
    <div class="container mx-auto p-4" style="max-width: 1440px; margin: auto;"> 

        <h1>Total Product: {{ cart?.length }}</h1>
        <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 space-x-1 gap-3">
            <div v-for="product in cart" :key="product.id"
                class="relative flex m-2 flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    <img :src="product.thumbnail" :alt="product.title" class="object-cover w-full h-full" />
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
                        class="rounded-md uppercase bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useCartStore } from '@/store/cart';


export default {
    computed: {
        cart() {
            return this.cartStore.cart;
        },
    },

    setup() {
        const cartStore = useCartStore();
        return { cartStore };
    },



};

</script>