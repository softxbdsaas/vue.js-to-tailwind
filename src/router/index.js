import { createRouter, createWebHistory } from 'vue-router';
import BlogDetails from "@/pages/BlogDetails.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'), // Lazy-loaded
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue'), // Lazy-loaded
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import('../pages/Blogs.vue'), // Lazy-loaded
  },
  {
    path: '/blogs/:id',
    name: 'PostDetail',
    component: BlogDetails,
    beforeEnter: async (to, from, next) => {
      try {
        const postId = to.params.id;
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const data = await response.json();

        // Pass the data as a prop to the BlogDetails component
        to.params.postData = data;

        // Continue navigation
        next();
      } catch (error) {
        console.error('Error fetching post:', error);
        next();  // Proceed to the route even if there is an error
      }
    }
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all for 404
    name: 'NotFound',
    component: () => import('../pages/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes,
});

export default router;
