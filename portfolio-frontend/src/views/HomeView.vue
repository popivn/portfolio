<template>
  <div>Ci/Cd test 22</div>
  <div class="bg-gradient-secondary">
    <Layout :tabs="tabs">
      <template #default="{ activeTab }">
        <div v-if="activeTab === 'About'">
          <AboutPage />
        </div>
        <div v-if="activeTab === 'Experience'">
          <ExperiencePage />
        </div>
        <div v-if="activeTab === 'Projects'">
          <ProjectsPage />
        </div>
        <div v-if="activeTab === 'Posts'">
          <PostsPage />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script setup>
import Layout from '@/components/Layout/Layout.vue';
import { AboutPage, ProjectsPage, ExperiencePage, PostsPage } from '@/Pages';

const tabs = ['About', 'Experience', 'Projects', 'Posts'];
</script>
