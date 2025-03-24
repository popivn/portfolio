<template>
  <div class="bg-gradient-secondary">
    <Layout :tabs="tabs" @change-tab="scrollToSection">
      <template #default="{ activeTab }">
        <div class="sections-container">
          <section id="About" ref="aboutSection">
            <AboutPage />
          </section>
          <section id="Experience" ref="experienceSection">
            <ExperiencePage />
          </section>
          <section id="Projects" ref="projectsSection">
            <ProjectsPage />
          </section>
          <section id="Posts" ref="postsSection">
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

const getSectionRefs = () => ({
  About: aboutSection.value,
  Experience: experienceSection.value,
  Projects: projectsSection.value,
  Posts: postsSection.value
});

const scrollToSection = (tabName) => {
  const sectionRefs = getSectionRefs();
  const section = sectionRefs[tabName];
  
  if (section) {
    // Removed smooth scrolling behavior, now it jumps directly to the section
    section.scrollIntoView({ behavior: 'auto' });
  }
};

const handleScroll = () => {
  const sectionRefs = getSectionRefs();
  
  let maxVisibleSection = null;
  let maxVisibleArea = 0;
  
  Object.entries(sectionRefs).forEach(([tabName, section]) => {
    if (!section) return;
    
    const rect = section.getBoundingClientRect();
    const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
    const visiblePercentage = visibleHeight / section.clientHeight;
    
    // Consider both visible area and position (give preference to sections near the top)
    const score = visibleHeight > 0 ? visibleHeight - (rect.top * 0.1) : 0;
    
    if (score > maxVisibleArea) {
      maxVisibleArea = score;
      maxVisibleSection = tabName;
    }
  });
  
  if (maxVisibleSection) {
    window.dispatchEvent(new CustomEvent('update-active-tab', { 
      detail: { tab: maxVisibleSection } 
    }));
  }
};

// Throttle function to limit how often scroll events fire
const throttle = (callback, delay) => {
  let lastCall = 0;
  return function(...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return callback(...args);
  };
};

const throttledHandleScroll = throttle(handleScroll, 100);

onMounted(() => {
  window.addEventListener('scroll', throttledHandleScroll);
  // Initial check to set the active tab based on visible section
  setTimeout(handleScroll, 100);
});

onUnmounted(() => {
  window.removeEventListener('scroll', throttledHandleScroll);
});
</script>