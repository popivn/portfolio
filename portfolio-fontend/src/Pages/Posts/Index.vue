<template>
  <h1>About me</h1>
  <PostTimeline :posts="posts" />
</template>

<script setup>
import PostTimeline from './PostTimeline.vue';
import { reactive } from 'vue';

const posts = reactive([
  { time: '2025-02-01', title: 'Understanding Vue 3', description: 'An in-depth guide to Vue 3 reactivity system.', author: 'John Doe' },
  { time: '2025-02-02', title: 'CSS Grid vs Flexbox', description: 'Comparing two popular CSS layout techniques.', author: 'Jane Smith' },
  { time: '2025-02-03', title: 'JavaScript Async Patterns', description: 'Exploring promises, async/await, and event loops.', author: 'Alice Johnson' },
  { time: '2025-02-04', title: 'Building RESTful APIs', description: 'A beginner-friendly introduction to REST API design.', author: 'Bob Brown' }
]);
</script>