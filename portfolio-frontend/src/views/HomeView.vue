<template>
  <div class="bg-gradient-secondary">
    <Layout :tabs="tabs" @change-tab="scrollToSection">
      <template #default="{ activeTab }">
        <div class="sections-container">
          <section id="About" ref="aboutSection" class="section">
            <AboutPage />
          </section>
          <section id="Experience" ref="experienceSection" class="section">
            <ExperiencePage />
          </section>
          <section id="Projects" ref="projectsSection" class="section">
            <ProjectsPage />
          </section>
          <section id="Posts" ref="postsSection" class="section">
            <PostsPage />
          </section>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Layout from '@/components/Layout/Layout.vue';
import { AboutPage, ProjectsPage, ExperiencePage, PostsPage } from '@/Pages';

const tabs = ['About', 'Experience', 'Projects', 'Posts'];
const aboutSection = ref(null);
const experienceSection = ref(null);
const projectsSection = ref(null);
const postsSection = ref(null);

// Get all section refs in an object
const getSectionRefs = () => ({
  About: aboutSection.value,
  Experience: experienceSection.value,
  Projects: projectsSection.value,
  Posts: postsSection.value
});

// Function to scroll to a specific section
const scrollToSection = (tabName) => {
  const sectionRefs = getSectionRefs();
  const section = sectionRefs[tabName];
  
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

// Function to determine which section is currently in view
const handleScroll = () => {
  const sectionRefs = getSectionRefs();
  
  // Find which section is most visible in the viewport
  let maxVisibleSection = null;
  let maxVisibleArea = 0;
  
  Object.entries(sectionRefs).forEach(([tabName, section]) => {
    if (!section) return;
    
    const rect = section.getBoundingClientRect();
    const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
    
    if (visibleHeight > maxVisibleArea) {
      maxVisibleArea = visibleHeight;
      maxVisibleSection = tabName;
    }
  });
  
  // Update the active tab in the Layout component
  if (maxVisibleSection) {
    window.dispatchEvent(new CustomEvent('update-active-tab', { 
      detail: { tab: maxVisibleSection } 
    }));
  }
};

// Set up scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // Initial check to set the active tab based on visible section
  setTimeout(handleScroll, 100);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.sections-container {
  scroll-behavior: smooth;
}

.section {
  min-height: 100vh;
  padding: 2rem 0;
}
</style>