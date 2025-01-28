<template>
    <nav class="bg-blue-600 text-white">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <!-- Logo -->
            <div class="text-2xl font-bold">
                <router-link to="/" class="hover:text-blue-300">MyApp</router-link>
            </div>

            <!-- Navigation Links -->
            <ul class="flex  gap-11">
                <li><router-link to="/" class="hover:text-blue-300">Home</router-link></li>
                <li><router-link to="/about" class="hover:text-blue-300">About</router-link></li>
                <li><router-link to="/blogs" class="hover:text-blue-300">Blogs</router-link></li>
                <li><router-link to="/shops" class="hover:text-blue-300">Shops</router-link></li>
                <li><router-link to="/contact" class="hover:text-blue-300">Contact</router-link></li>
                <li><router-link to="/cards" class="hover:text-blue-300">
                        <p class="  relative"><font-awesome-icon icon="fa-solid fa-cart-shopping" />
                            <span
                                class="text-white flex justify-center items-center  font-medium -top-3 -right-2 absolute bg-red-500 h-[20px] w-[20px] rounded-full">{{
                                    cart?.length }}
                            </span>
                        </p>
                    </router-link></li>
                <li><router-link v-if="!isLogin" to="/login" class="hover:text-blue-300">login</router-link></li>
                <li>
                    <div v-if="isLogin" @click="logout" class="hover:text-blue-300">logout</div>
                </li>


            </ul>

            <!-- Mobile Menu Icon -->
            <div class="md:hidden">
                <button @click="toggleMenu" class="focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="isMobileMenuOpen" class="md:hidden bg-red-500">
            <ul class="space-x-4 px-4 py-3">
                <li><router-link to="/" @click="closeMenu" class="block hover:text-blue-300">Home</router-link></li>
                <li><router-link to="/about" @click="closeMenu" class="block hover:text-blue-300">About</router-link>
                </li>
                <li><router-link to="/services" @click="closeMenu"
                        class="block hover:text-blue-300">Services</router-link></li>
                <li><router-link to="/contact" @click="closeMenu"
                        class="block hover:text-blue-300">Contact</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { useCartStore } from '@/store/cart';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            isMobileMenuOpen: false,
        };
    },
    computed: {
        cart() {
            return this.cartStore.cart;
        },
    },
    methods: {
        toggleMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        },
        closeMenu() {
            this.isMobileMenuOpen = false;
        },
        isLogin() {
            const token = Cookies.get('auth_token');
            return token ? true : false;
        },
        logout() {
            Cookies.remove('auth_token');
            Swal.fire('Success!', 'Logout successful.', 'success');
            this.$router.push({ name: 'Home' });
        }
    },
    setup() {
        const cartStore = useCartStore();
        return { cartStore };
    },



};
</script>