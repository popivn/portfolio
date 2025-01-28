<template>
    <div class="container mx-auto px-2 sm:px-6 lg:px-8 flex min-h-screen bg-gradient-primary relative">
        <button @click="isAsideOpen = !isAsideOpen" :class="[
            'fixed top-4 z-50 bg-primary p-2 rounded-full shadow-lg transition-transform duration-300 lg:hidden',
            isAsideOpen ? 'translate-x-64' : 'translate-x-0'
        ]">
            <svg v-if="!isAsideOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" class="w-6 h-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H8m0 0l4-4m-4 4l4 4" />
            </svg>
            <svg v-if="isAsideOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" class="w-6 h-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h8m0 0l-4-4m4 4l-4 4" />
            </svg>
        </button>

        <aside :class="[
            isAsideOpen ? 'translate-x-0' : '-translate-x-full',
            'fixed top-0 left-0 p-4 w-64 h-screen overflow-y-auto shadow-xl transform transition-transform duration-300 z-50 lg:translate-x-0 lg:sticky lg:top-0 lg:w-1/4 backdrop-blur-sm'
        ]">
            <ProfileSection />

            <nav class="tabs mt-8 flex flex-col">
                <button v-for="tab in tabs" :key="tab" @click="toggleTab(tab)" :class="[
                    'py-3 px-4 rounded-lg font-medium transition duration-200 ease-in-out mt-2',
                    activeTab === tab
                        ? 'text-primary bg-gradient-secondary shadow-lg transform scale-105 text-left'
                        : 'text-secondary hover:bg-gradient-hover hover:shadow-lg hover:transform hover:scale-105 text-right'
                ]">
                    {{ tab }}
                </button>
            </nav>

            <div class="min-h-[40vh]"></div>
        </aside>

        <main class="flex-1 overflow-y-auto p-0 sm:p-6">
            <slot :active-tab="activeTab"></slot>
        </main>
    </div>
</template>

<script setup>
import { ref } from "vue";
import ProfileSection from "@/components/ProfileSection.vue";

const isAsideOpen = ref(false);
const tabs = ["Experience", "Projects", "About", "Posts"];
const activeTab = ref("About");

function toggleTab(tab) {
    activeTab.value = tab;
}
</script>

<style>
.container {
    max-width: 1280px;
}
</style>