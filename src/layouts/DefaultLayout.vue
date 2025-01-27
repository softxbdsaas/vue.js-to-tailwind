<template>
    <div>
        <Navbar />
        <main  class="min-h-[80vh]"> 
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
    components: { Navbar, Footer },
};
</script>