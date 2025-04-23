<template>
  <BlogLayout>
    <div class="bg-gradient-secondary rounded-xl p-6 shadow-lg">
      <h1 class="text-2xl font-bold text-primary mb-6">Blog Posts</h1>
      <div class="space-y-6">
        <div v-for="post in posts" :key="post.id" class="bg-bgcolor/60 rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
          <h2 class="text-xl font-semibold text-secondary mb-2">{{ post.title }}</h2>
          <p class="text-primary/80 mb-4">{{ post.excerpt }}</p>
          <div class="flex justify-between items-center">
            <span class="text-sm text-primary/60">{{ post.date }}</span>
            <button @click="readMore(post.id)" class="text-primary hover:text-secondary transition-colors duration-200">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  </BlogLayout>
</template>

<script setup>
import BlogLayout from '@/components/Layout/BlogLayout.vue';
import { ref } from 'vue';
        
const posts = ref([
  {
    id: 1,
    title: 'Getting Started with Vue 3',
    excerpt: 'Learn the basics of Vue 3 and its composition API...',
    date: 'March 15, 2024'
  },
  {
    id: 2,
    title: 'Building Responsive Layouts',
    excerpt: 'Tips and tricks for creating responsive designs...',
    date: 'March 10, 2024'
  },
  {
    id: 3,
    title: 'State Management in Vue',
    excerpt: 'Understanding state management patterns in Vue applications...',
    date: 'March 5, 2024'
  }
]);

const readMore = (postId) => {
  // Handle reading more about a specific post
  console.log('Reading post:', postId);
};
</script> 