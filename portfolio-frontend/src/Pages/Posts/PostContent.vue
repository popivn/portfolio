<template>
    <div class="bg-gradient-secondary rounded-lg shadow-lg w-full relative overflow-hidden">
      <div class="absolute top-4 right-4 z-10">
        <span class="text-xs font-medium px-3 py-1 rounded-full" :class="getCategoryBadgeClass(post.category)">
          {{ post.category }}
        </span>
      </div>
      
      <button 
        @click="$emit('close')"
        class="absolute top-4 left-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-secondary/80 text-gray-700 hover:bg-secondary transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div class="w-full h-48 bg-priamry-200 relative">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-end p-6">
          <h1 class="text-3xl font-bold text-primary">{{ post.title }}</h1>
          <div class="flex items-center justify-between mt-2">
            <p class="text-secondary/90">By {{ post.author }}</p>
            <p class="text-secondary/90">{{ formatDate(post.time) }}</p>
          </div>
        </div>
      </div>
      
      <div class="p-6">
        <p class="text-lg text-secondary font-medium italic mb-6 border-l-4 border-primary/30 pl-4">
          {{ post.description }}
        </p>
        
        <div class="prose prose-lg max-w-none text-secondary">
          <div v-html="formattedContent"></div>
        </div>
        
        <div class="mt-8 pt-4 border-t border-gray-200 flex flex-wrap justify-between items-center">
          <div class="text-sm text-gray-500">
            {{ getReadTime(post.content) }} min read • {{ formatDate(post.time) }}
          </div>
          
          <!-- <div class="flex gap-2">
            <button class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </button>
            <button class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </button>
            <button class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    post: {
      type: Object,
      required: true
    }
  });
  
  const formattedContent = computed(() => {
    if (!props.post.content) return '';
    
    return props.post.content
      .split('\n\n')
      .map(paragraph => `<p>${paragraph}</p>`)
      .join('');
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