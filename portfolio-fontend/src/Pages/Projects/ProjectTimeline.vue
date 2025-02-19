<template>
    <div class="timeline space-y-6 relative">
        <div class="absolute left-[22%] transform -translate-x-1/2 top-0 h-full w-[2px] bg-primary"></div>

        <div v-for="(project, index) in projects" :key="index" class="event flex items-start gap-6 relative">
            <div class="timestamp w-40 text-right font-bold text-primary">
                {{ project.date }}
            </div>
            <div class="w-4 h-4 bg-secondary rounded-full absolute left-[22%] transform -translate-x-1/2"></div>

            <div class="project flex-1 p-6 pt-0 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-xl text-primary mb-4 font-bold">{{ project.name }}</h3>
                <p class="text-sm text-secondary">{{ project.description }}</p>
            </div>
        </div>
    </div>

</template>

<script setup>
defineProps({
    projects: {
        type: Array,
        required: true
    }
})
</script>