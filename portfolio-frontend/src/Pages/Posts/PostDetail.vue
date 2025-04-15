<template>
  <div class="post-detail max-w-4xl mx-auto px-4 py-8">
    <div v-if="post" class="mb-8">
      <button 
        @click="router.back()" 
        class="mb-6 text-primary hover:text-primary/80 flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
        Back to Timeline
      </button>

      <div class="flex justify-between items-start mb-4">
        <span class="text-sm font-medium px-3 py-1 rounded-full" :class="getCategoryBadgeClass(post.category)">
          {{ post.category }}
        </span>
        <span class="text-sm text-gray-500">{{ getReadTime(post.content) }} min read</span>
      </div>

      <h1 class="text-3xl font-bold text-primary mb-4">{{ post.title }}</h1>
      
      <div class="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          By {{ post.author }}
        </div>
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {{ formatDate(post.time) }}
        </div>
      </div>

      <div class="prose prose-lg max-w-none" v-html="post.content"></div>
    </div>
    <div v-else class="text-center py-8">
      <p class="text-gray-500">Post not found</p>
      <button 
        @click="router.push('/')" 
        class="mt-4 text-primary hover:text-primary/80"
      >
        Return to Home
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();
const route = useRoute();
const post = ref(null);

onMounted(() => {
  // Get post data from route state
  const routeState = window.history.state;
  if (routeState?.post) {
    post.value = routeState.post;
  } else {
    // If no post in state, redirect to home
    router.push('/');
  }
});

const formatDate = (dateString) => {
  if (!dateString) return '';
  
  if (dateString.includes('to')) {
    const [start, end] = dateString.split(' to ');
    return `${formatSingleDate(start)} to ${formatSingleDate(end)}`;
  }
  
  return formatSingleDate(dateString);
};

const formatSingleDate = (dateString) => {
  try {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  } catch (e) {
    return dateString;
  }
};

const getReadTime = (content) => {
  if (!content) return 1;
  
  const wordCount = content.trim().split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);
  return readTime > 0 ? readTime : 1;
};

const getCategoryBadgeClass = (category) => {
  switch (category?.toLowerCase()) {
    case 'technology': return 'bg-blue-100 text-blue-800';
    case 'design': return 'bg-purple-100 text-purple-800';
    case 'business': return 'bg-green-100 text-green-800';
    case 'lifestyle': return 'bg-amber-100 text-amber-800';
    case 'tutorial': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};
</script> 