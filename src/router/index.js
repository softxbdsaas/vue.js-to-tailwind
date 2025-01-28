import { createRouter, createWebHistory } from 'vue-router';
import BlogDetails from "@/pages/BlogDetails.vue";
import Cookies from 'js-cookie';
// import Router from 'vue-router';
// Vue.use(Router);
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
    path: '/shops',
    name: 'Shops',
    component: () => import('../pages/Shops.vue'), // Lazy-loaded
    meta: { requiresAuth: true },
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('../pages/Productcard.vue'), // Lazy-loaded
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../pages/Register.vue'), // Lazy-loaded
    beforeEnter: (to, from, next) => {
      // Check if token exists
      const token = Cookies.get("auth_token");
      if (token) {
        // If token exists, redirect to home
        next({ name: "Home" });
      } else {
        next(); // Continue to register page
      }
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue'), // Lazy-loaded
    beforeEnter: (to, from, next) => {
      // Check if token exists
      const token = Cookies.get('auth_token');
      if (token) {
        // If token exists, redirect to home
        next({ name: 'Home' });
      } else {
        next(); // Continue to login page
      }
    }
  },
  {
    path: '/icons',
    name: 'icons',
    component: () => import('../pages/Icon.vue'), // Lazy-loaded
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

router.beforeEach((to, from, next) => {
  const token = Cookies.get('auth_token');
  
  // If the route requires authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      // If not authenticated, redirect to login page
      next({ name: 'login' });
    } else {
      next(); // Continue to the protected route
    }
  } else {
    next(); // Continue to the public route
  }
});

export default router;
