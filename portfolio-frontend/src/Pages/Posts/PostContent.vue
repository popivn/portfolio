<template>
    <div class="bg-gradient-secondary p-6 rounded-lg shadow-lg w-full relative">
        <button @click="$emit('close')"
            class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        <h2 class="text-2xl font-bold text-primary">{{ post.title }}</h2>
        <p class="text-secondary mt-2">By {{ post.author }} - {{ post.time }}</p>
        <p class="mt-4 text-secondary">{{ post.description }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Layout from '@/components/Layout/Layout.vue';
defineOptions({ layout: Layout })
defineProps({
    post: {
        type: Object,
        required: true
    }
});
</script>