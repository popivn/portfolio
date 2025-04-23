import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PostDetail from '@/Pages/Posts/PostDetail.vue';
import BlogLayout from '@/components/Layout/BlogLayout.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView, 
  },
  {
    path: '/blog',
    component: BlogLayout,
    children: [
      {
        path: 'posts/:id',
        name: 'post-detail',
        component: PostDetail,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
