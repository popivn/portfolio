<template>
  <section class="py-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div 
        v-for="(experience, index) in experiences" 
        :key="index" 
        class="bg-gradient-secondary rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
      >
        <div class="p-6 flex flex-col items-center">
          <div class="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg w-full flex justify-center transform group-hover:scale-105 transition-transform duration-300">
            <img 
              :src="experience.image" 
              :alt="`${experience.name} logo`" 
              class="w-auto h-20 object-contain"
            />
          </div>
          
          <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
            {{ experience.name }}
          </h3>
          
          <div class="w-12 h-1 bg-primary rounded mb-3"></div>
          
          <p class="text-sm text-gray-600 dark:text-gray-300 text-center w-full">
            {{ experience.level }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
    experiences: {
        type: Array,
        required: true
    }
})
</script>