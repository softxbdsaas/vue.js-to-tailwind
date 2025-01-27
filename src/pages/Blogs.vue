<template>
  <div class="w-full">
    <div class="mx-auto" style="max-width: 1400px; margin: auto;">
      <div class="py-8">
        <h2 class="text-2xl font-semibold text-gray-700 py-2 "> Blog posts</h2>
        <div v-if="loading" class="text-gray-500 mt-4">Loading posts...</div>
        <div v-if="error" class="text-red-500 mt-4">Error fetching posts: {{ error }}</div>
        <ul v-else class="mt-4 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          <li v-for="post in posts" :key="post.id" class="bg-blue-100 rounded p-2">
            <h1  class="capitalize text-[25px]">{{ post.name }}</h1>
            <p>{{ post.body }}</p>
            <RouterLink :to="`/blogs/${post?.id}`">Lorem</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import ProductCard from "@/components/home/ProductCard.vue";

export default {
  name: 'HomePage',
  components: {ProductCard},
  setup() {
    const loading = ref(true);
    const posts = ref([]);
    const error = ref(null);

    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        posts.value = data;
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchPosts);

    return {
      loading,
      posts,
      error
    };
  }
};
</script>

<style>
/* Optional Tailwind customizations */
</style>
