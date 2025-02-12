<template>
    <div class="relative">
      <div 
        v-show="showTimeline"
        class="relative flex flex-col space-y-6 w-full transition-all duration-500"
        :class="{'opacity-0 scale-95': !showTimeline}"
      >
        <div class="absolute left-1/4 transform -translate-x-1/2 top-0 h-full w-[2px] bg-primary"></div>
        
        <div v-for="(post, index) in posts" :key="index" class="flex items-center relative">
          <div class="w-1/4 text-lg text-primary text-right pr-4">
            {{ post.time }}
          </div>
    
          <div class="w-4 h-4 bg-secondary rounded-full absolute left-1/4 transform -translate-x-1/2"></div>
    
          <div class="w-3/4 pl-6">
            <div 
              class="text-xl font-bold text-secondary cursor-pointer hover:text-primary transition-colors" 
              @click="selectPost(post)"
            >
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
  
      <div 
        v-show="!showTimeline" 
        class="transition-all duration-500"
        :class="{'opacity-0 scale-95': showTimeline}"
      >
        <div class="flex justify-end mb-4">
          <button 
            @click="showTimelineView"
            class="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90 transition-colors"
          >
            Show Timeline
          </button>
        </div>
        <PostContent 
          v-if="selectedPost" 
          :post="selectedPost" 
          @close="showTimelineView"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  import PostContent from './PostContent.vue';
  
  const props = defineProps({
    posts: {
      type: Array,
      required: true
    }
  });
  
  const selectedPost = ref(null);
  const showTimeline = ref(true);
  
  const selectPost = (post) => {
    selectedPost.value = post;
    showTimeline.value = false;
  };
  
  const showTimelineView = () => {
    showTimeline.value = true;
    selectedPost.value = null;
  };
  </script>
