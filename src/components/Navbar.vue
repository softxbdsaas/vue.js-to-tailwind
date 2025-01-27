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
                <li><router-link to="/contact" class="hover:text-blue-300">Contact</router-link></li>
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
export default {
    data() {
        return {
            isMobileMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        },
        closeMenu() {
            this.isMobileMenuOpen = false;
        },
    },
};
</script>