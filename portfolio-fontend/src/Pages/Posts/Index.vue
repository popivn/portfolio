<template>
    <div class="relative flex flex-col space-y-6">
      <div class="absolute left-1/4 transform -translate-x-1/2 top-0 h-full w-[2px] bg-primary"></div>
  
      <div v-for="(post, index) in posts" :key="index" class="flex items-center relative">
        <div class="w-1/4 text-lg text-primary text-right pr-4">
          {{ post.time }}
        </div>
  
        <div class="w-4 h-4 bg-secondary rounded-full absolute left-1/4 transform -translate-x-1/2"></div>
  
        <div class="w-3/4 pl-6">
          <div class="text-xl font-bold text-secondary">
            {{ post.title }}
          </div>
          <div class="text-sm text-gray-500">
            {{ post.description }}
          </div>
          <div class="text-xs text-gray-400 italic">
            By {{ post.author }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
  const posts = reactive([
    { time: '2025-02-01', title: 'Understanding Vue 3', description: 'An in-depth guide to Vue 3 reactivity system.', author: 'John Doe' },
    { time: '2025-02-02', title: 'CSS Grid vs Flexbox', description: 'Comparing two popular CSS layout techniques.', author: 'Jane Smith' },
    { time: '2025-02-03', title: 'JavaScript Async Patterns', description: 'Exploring promises, async/await, and event loops.', author: 'Alice Johnson' },
    { time: '2025-02-04', title: 'Building RESTful APIs', description: 'A beginner-friendly introduction to REST API design.', author: 'Bob Brown' }
  ]);
  </script>
  
  <style scoped>
  .w-1\/4 { width: 25%; }
  .w-3\/4 { width: 75%; }
  </style>
  