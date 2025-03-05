<template>
  <div class="timeline space-y-6 relative">
    <div class="hidden sm:block absolute left-[28%] sm:left-1/4 transform -translate-x-1/2 top-0 h-full w-[2px] bg-primary"></div>

    <div v-show="showTimeline">
      <div v-for="(post, index) in posts" :key="index" class="event relative">
        <div class="block sm:hidden space-y-3">
          <div class="timestamp font-bold text-primary text-center mb-2">
            <span v-if="post.time.includes('to')">
              {{ post.time.split(' to ')[0] }} — {{ post.time.split(' to ')[1] }}
            </span>
            <span v-else>
              {{ post.time }}
            </span>
          </div>
          
          <div class="project p-6 pt-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-xl text-primary mb-4 font-bold cursor-pointer hover:text-primary" @click="selectPost(post)">
              {{ post.title }}
            </h3>
            <p class="text-sm text-secondary">{{ post.description }}</p>
            <div class="text-xs text-gray-400 italic mt-2">
              By {{ post.author }}
            </div>
          </div>
        </div>

        <div class="hidden sm:flex items-start gap-6 relative">
          <div class="timestamp text-right font-bold text-primary break-words">
            <span v-if="post.time.includes('to')">
              <span>{{ post.time.split(' to ')[0] }}</span><br />
              <span>---------</span><br />
              <span>{{ post.time.split(' to ')[1] }}</span>
            </span>
            <span v-else>
              {{ post.time }}
            </span>
          </div>
          
          <div class="w-4 h-4 bg-secondary rounded-full absolute left-[28%] sm:left-1/4 transform -translate-x-1/2"></div>

          <div class="ml-2 sm:ml-[14%] project flex-1 p-6 pt-0 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-xl text-primary mb-4 font-bold cursor-pointer hover:text-primary" @click="selectPost(post)">
              {{ post.title }}
            </h3>
            <p class="text-sm text-secondary">{{ post.description }}</p>
            <div class="text-xs text-gray-400 italic mt-2">
              By {{ post.author }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="!showTimeline">
      <PostContent v-if="selectedPost" :post="selectedPost" @close="showTimelineView" />
      
      <div class="flex justify-end mt-4">
        <button @click="showTimelineView" class="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90 transition-colors">
          Show Timeline
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
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

