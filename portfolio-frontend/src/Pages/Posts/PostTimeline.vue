<template>
  <div class="blog-timeline relative">
    <div class="mb-6 flex flex-wrap justify-center gap-2">
      <button 
        @click="activeCategory = 'all'" 
        class="px-3 py-1 text-sm rounded-full transition-colors"
        :class="activeCategory === 'all' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
      >
        All Posts
      </button>
      <button 
        v-for="category in uniqueCategories" 
        :key="category"
        @click="activeCategory = category"
        class="px-3 py-1 text-sm rounded-full transition-colors"
        :class="activeCategory === category ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
      >
        {{ category }}
      </button>
    </div>

    <div class="timeline space-y-6 relative">
      <div class="hidden sm:block absolute left-[28%] sm:left-1/4 transform -translate-x-1/2 top-0 h-full w-[2px] bg-primary"></div>

      <div v-for="(post, index) in filteredPosts" :key="index" class="event relative">
        <div class="block sm:hidden space-y-3">
          <div class="timestamp font-bold text-primary text-center mb-2">
            <div class="flex items-center justify-center">
              <span class="text-sm">{{ formatDate(post.time) }}</span>
            </div>
          </div>
          
          <div class="post p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4" 
               :class="getCategoryBorderColor(post.category)">
            <div class="flex justify-between items-start mb-2">
              <span class="text-xs font-medium px-2 py-1 rounded-full" :class="getCategoryBadgeClass(post.category)">
                {{ post.category }}
              </span>
              <span class="text-xs text-gray-500">{{ getReadTime(post.content) }} min read</span>
            </div>
            
            <h3 class="text-xl text-primary font-bold cursor-pointer hover:text-primary/80 transition-colors" 
                @click="navigateToPost(post)">
              {{ post.title }}
            </h3>
            
            <p class="text-sm text-secondary mt-2 line-clamp-3">{{ post.description }}</p>
            
            <div class="flex justify-between items-center mt-4">
              <div class="text-xs text-gray-500 italic">
                By {{ post.author }}
              </div>
              <button 
                @click="navigateToPost(post)" 
                class="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1"
              >
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="hidden sm:flex items-start gap-6 relative">
          <div class="timestamp text-right font-bold text-primary break-words w-1/5">
            <div>{{ formatDate(post.time) }}</div>
          </div>
          
          <div 
            class="w-5 h-5 rounded-full absolute left-[28%] sm:left-1/4 transform -translate-x-1/2 border-2 border-white"
            :class="getCategoryDotColor(post.category)">
          </div>

          <div class="bg-gradient-secondary ml-2 sm:ml-[8%] post flex-1 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4"
               :class="getCategoryBorderColor(post.category)">
            <div class="flex justify-between items-start mb-2">
              <span class="text-xs font-medium px-2 py-1 rounded-full" :class="getCategoryBadgeClass(post.category)">
                {{ post.category }}
              </span>
              <span class="text-xs text-gray-500">{{ getReadTime(post.content) }} min read</span>
            </div>
            
            <h3 class="text-xl text-primary font-bold cursor-pointer hover:text-primary/80 transition-colors" 
                @click="navigateToPost(post)">
              {{ post.title }}
            </h3>
            
            <p class="text-sm text-secondary mt-2">{{ post.description }}</p>
            
            <div class="flex justify-between items-center mt-4">
              <div class="text-xs text-gray-500 italic">
                By {{ post.author }}
              </div>
              <button 
                @click="navigateToPost(post)" 
                class="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1"
              >
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
});

const activeCategory = ref('all');

const uniqueCategories = computed(() => {
  const categories = props.posts.map(post => post.category);
  return [...new Set(categories)];
});

const filteredPosts = computed(() => {
  if (activeCategory.value === 'all') {
    return props.posts;
  }
  return props.posts.filter(post => post.category === activeCategory.value);
});

const navigateToPost = (post) => {
  router.push({
    name: 'post-detail',
    params: { id: post.id || post.title.toLowerCase().replace(/\s+/g, '-') },
    state: { post }
  });
};

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

const getCategoryDotColor = (category) => {
  switch (category?.toLowerCase()) {
    case 'technology': return 'bg-blue-500';
    case 'design': return 'bg-purple-500';
    case 'business': return 'bg-green-500';
    case 'lifestyle': return 'bg-amber-500';
    case 'tutorial': return 'bg-red-500';
    default: return 'bg-gray-500';
  }
};

const getCategoryBorderColor = (category) => {
  switch (category?.toLowerCase()) {
    case 'technology': return 'border-blue-500';
    case 'design': return 'border-purple-500';
    case 'business': return 'border-green-500';
    case 'lifestyle': return 'border-amber-500';
    case 'tutorial': return 'border-red-500';
    default: return 'border-gray-500';
  }
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
