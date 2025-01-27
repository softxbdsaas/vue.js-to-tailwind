<template>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'BlogDetails',
  setup() {
    const route = useRoute();

    // Access the post data directly from route params
    const post = computed(() => route.params.postData || null);

    return {
      post
    };
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
