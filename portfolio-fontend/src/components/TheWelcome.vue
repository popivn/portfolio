<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const projects = ref<any[]>([]); 
const loading = ref<boolean>(true);  
const error = ref<string | null>(null); 

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/projects');
    projects.value = response.data;
  } catch (err: any) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div>
    <h1>Danh sách dự án</h1>

    <div v-if="loading">Đang tải...</div>

    <div v-if="error" class="error">
      <p>Có lỗi xảy ra khi tải dữ liệu: {{ error }}</p>
    </div>

    <ul v-if="projects.length > 0">
      <li v-for="project in projects" :key="project.id" class="project-item">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <img :src="project.image_url" alt="Project Image" class="project-image" />
        <a :href="project.url" target="_blank">Xem chi tiết</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.project-item {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
}

.project-image {
  width: 100px;
  height: auto;
}

.error {
  color: red;
}
</style>
