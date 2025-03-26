<template>
  <div class="container mx-auto px-2 sm:px-6 lg:px-8 flex min-h-screen bg-gradient-primary relative">
    <button @click="isAsideOpen = !isAsideOpen" :class="[
      'fixed top-4 z-50 bg-primary p-2 rounded-full shadow-lg transition-transform duration-300 lg:hidden',
      isAsideOpen ? 'translate-x-64' : 'translate-x-0'
    ]">
      <svg v-if="!isAsideOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        class="w-6 h-6 text-white">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H8m0 0l4-4m-4 4l4 4" />
      </svg>
      <svg v-if="isAsideOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        class="w-6 h-6 text-white">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h8m0 0l-4-4m4 4l-4 4" />
      </svg>
    </button>

    <aside :class="[
      isAsideOpen ? 'translate-x-0' : '-translate-x-full',
      'fixed top-0 left-0 p-4 w-64 h-screen overflow-y-auto shadow-xl transform transition-transform duration-300 z-50 lg:translate-x-0 lg:sticky lg:top-0 lg:w-1/4 backdrop-blur-sm'
    ]">
      <ProfileSection />

      <nav class="tabs mt-8 flex flex-col">
        <button v-for="tab in tabs" :key="tab" @click="handleTabClick(tab)" :class="[
          'py-3 px-4 rounded-lg font-medium transition duration-200 ease-in-out mt-2',
          activeTab === tab
            ? 'text-primary bg-gradient-secondary shadow-lg text-left'
            : 'text-secondary hover:bg-gradient-hover hover:shadow-lg text-right'
        ]">
          {{ tab }}
        </button>
      </nav>

      <div class="mt-8 space-y-6">
        <!-- Education Section -->
        <div
          class="bg-gradient-secondary rounded-xl p-5 shadow-lg transition-all hover:shadow-xl">
          <div class="flex items-center mb-3">
            <font-awesome-icon icon="graduation-cap" class="h-5 w-5 text-primary mr-3" />
            <h3 class="font-bold text-lg text-secondary">Education</h3>
          </div>
          <div class="flex items-center">
            <img src="@/assets/images/icon/btec_icon.png" alt="BTEC Icon" class="h-8 w-8 mr-3" />
            <div>
              <p class="text-sm font-medium text-secondary">BTEC FPT College Cần Thơ</p>
              <a href="https://btec.fpt.edu.vn/" target="_blank" class="text-xs text-primary mt-1 hover:underline">UK Higher Education Program</a>
            </div>
          </div>
        </div>

        <!-- Internship Section -->
        <div
          class="bg-gradient-secondary rounded-xl p-5 shadow-lg transition-all hover:shadow-xl">
          <div class="flex items-center mb-3">
            <font-awesome-icon icon="briefcase" class="h-5 w-5 text-primary mr-3" />
            <h3 class="font-bold text-lg text-secondary">Internship</h3>
          </div>
          <div class="flex items-center">
            <img src="@/assets/images/icon/phuquocdevs_icon.png" alt="Phú Quốc Devs Icon" class="h-8 w-8 mr-3" />
            <div>
              <p class="text-sm font-medium text-secondary">Phú Quốc Devs</p>
              <a href="https://phuquocdevs.com/" target="_blank" class="text-xs text-primary mt-1 hover:underline">Current Intern</a>
            </div>
          </div>
        </div>

        <!-- Outstanding Awards Section -->
        <div
          class="bg-gradient-secondary rounded-xl p-5 shadow-lg transition-all hover:shadow-xl">
          <div class="flex items-center mb-3">
            <font-awesome-icon icon="award" class="h-5 w-5 text-primary mr-3" />
            <h3 class="font-bold text-lg text-secondary">Outstanding Awards</h3>
          </div>
          <ul class="mt-2 space-y-3 ml-1">
            <li v-for="(award, index) in awards" :key="index" class="flex items-start">
              <span class="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
              <span class="text-sm text-secondary">{{ award }}</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>

    <main class="flex-1 overflow-y-auto p-0 sm:p-6">
      <slot :active-tab="activeTab"></slot>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps, defineEmits } from "vue";
import ProfileSection from "@/components/ProfileSection.vue";

const awards = [
  'Excellence in Software Engineering - Spring 2025',
  'Excellence in Software Engineering - Fall 2024',
  'Excellence in Software Engineering - Summer 2024'
];


const props = defineProps({
  tabs: {
    type: Array,
    default: () => ["Experience", "Projects", "About", "Posts"]
  }
});

const emit = defineEmits(['changeTab']);

const isAsideOpen = ref(false);
const activeTab = ref("About");

function handleTabClick(tab) {
  activeTab.value = tab;
  emit('changeTab', tab);
}

const updateActiveTabFromScroll = (event) => {
  activeTab.value = event.detail.tab;
};

onMounted(() => {
  window.addEventListener('update-active-tab', updateActiveTabFromScroll);
});

onUnmounted(() => {
  window.removeEventListener('update-active-tab', updateActiveTabFromScroll);
});
</script>

<style>
.container {
  max-width: 1280px;
}
</style>