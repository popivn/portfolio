<template>
    <div class="experience-section">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="(experience, index) in experiences" :key="index" class="bg-gradient-secondary shadow-lg experience-item flex flex-col items-center gap-4 p-1">
          <img :src="experience.image" alt="technology logo" class="w-auto h-24 rounded-lg object-cover shadow-lg" />
          <h3 class="text-xl font-semibold text-primary text-center w-full">{{ experience.name }}</h3>
          <p class="text-sm text-secondary text-justify w-full">{{ experience.level }}</p>
        </div>
      </div>
    </div>
  </template>
<script setup>
defineProps({
    experiences: {
        type: Array,
        required: true
    }
})
</script>