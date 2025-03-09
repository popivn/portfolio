<template>
  <div v-if="show" 
       class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
       @click="closePopup">
    <div class="bg-white bg-gradient-primary rounded-lg shadow-xl p-6 max-w-md w-full mx-4 transform transition-all"
         @click.stop>
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-bold text-primary">{{ project?.name }}</h3>
        <button @click="closePopup" class="text-gray-500 hover:text-gray-700">
          <font-awesome-icon :icon="['fas', 'times']" />
        </button>
      </div>
      
      <div v-if="project" class="mb-4">
        <div class="flex items-center gap-2 mb-2">
          <span :class="`w-3 h-3 rounded-full ${getStatusColor(project)}`"></span>
          <span class="text-sm font-medium" :class="getStatusTextClass(project)">
            {{ getStatusText(project) }}
          </span>
          <span class="text-xs text-secondary ml-2">
            ({{ getProjectDuration(project) }})
          </span>
        </div>
        
        <div class="text-sm text-secondary mb-4">
          {{ formatDate(project.startDate) }} — 
          {{ project.endDate ? formatDate(project.endDate) : 'Present' }}
        </div>
        
        <div class="text-sm text-secondary mb-4 border-l-2 border-primary pl-3 py-1">
          {{ project.description }}
        </div>
        
        <div class="mb-4">
          <h4 class="text-sm font-bold text-primary mb-2">Technologies Used:</h4>
          <div class="flex flex-wrap gap-3">
            <div v-for="(icon, i) in project.icons" :key="i" 
                 class="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
              <img :src="icon" :alt="getTechName(icon)" class="w-5 h-5 rounded-full" />
              <span class="text-xs font-medium">{{ getTechName(icon) }}</span>
            </div>
          </div>
        </div>
        
        <div v-if="hasLinks" class="flex justify-center gap-8 py-4 border-t border-gray-200 mt-4 pt-4">
          <a v-if="project?.github?.length" 
             :href="project.github[0]" 
             target="_blank" 
             rel="noopener noreferrer"
             class="flex flex-col items-center gap-2 text-primary hover:text-primary-dark transition-colors">
            <font-awesome-icon :icon="['fab', 'github']" class="text-3xl" />
            <span class="text-sm">GitHub</span>
          </a>
          
          <a v-if="project?.website?.length" 
             :href="project.website[0]" 
             target="_blank" 
             rel="noopener noreferrer"
             class="flex flex-col items-center gap-2 text-primary hover:text-primary-dark transition-colors">
            <font-awesome-icon :icon="['fas', 'paper-plane']" class="text-3xl" />
            <span class="text-sm">Website</span>
          </a>
        </div>
        
        <div v-else class="text-center py-4 text-secondary border-t border-gray-200 mt-4 pt-4">
          No links available for this project
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  project: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['close']);

const closePopup = () => {
  emit('close');
};

const hasLinks = computed(() => {
  if (!props.project) return false;
  
  return (
    (props.project.github && props.project.github.length > 0) || 
    (props.project.website && props.project.website.length > 0)
  );
});

const formatDate = (date) => {
  if (!date) return 'Present';
  
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const getProjectDuration = (project) => {
  if (!project.endDate) {
    const now = new Date();
    const months = (now.getFullYear() - project.startDate.getFullYear()) * 12 + 
                  (now.getMonth() - project.startDate.getMonth());
    
    if (months < 1) {
      const days = Math.floor((now - project.startDate) / (1000 * 60 * 60 * 24));
      return `${days} days`;
    }
    return months === 1 ? '1 month' : `${months} months`;
  } else if (project.startDate.getTime() === project.endDate.getTime()) {
    return '1 day';
  } else {
    const months = (project.endDate.getFullYear() - project.startDate.getFullYear()) * 12 + 
                  (project.endDate.getMonth() - project.startDate.getMonth());
    
    if (months < 1) {
      const days = Math.floor((project.endDate - project.startDate) / (1000 * 60 * 60 * 24));
      return `${days} days`;
    }
    return months === 1 ? '1 month' : `${months} months`;
  }
};

const getStatusColor = (project) => {
  switch (project.status) {
    case 'active': return 'bg-green-500';
    case 'upcoming': return 'bg-amber-500';
    case 'completed': return 'bg-blue-500';
    default: return 'bg-gray-500';
  }
};

const getStatusText = (project) => {
  switch (project.status) {
    case 'active': return 'Active';
    case 'upcoming': return 'Upcoming';
    case 'completed': return 'Completed';
    default: return 'Unknown';
  }
};

const getStatusTextClass = (project) => {
  switch (project.status) {
    case 'active': return 'text-green-600';
    case 'upcoming': return 'text-amber-600';
    case 'completed': return 'text-blue-600';
    default: return 'text-gray-600';
  }
};

const getTechName = (iconPath) => {
  const filename = iconPath.split('/').pop();
  const techName = filename.split('_')[0];
  
  const techMap = {
    'laravel': 'Laravel',
    'vue': 'Vue.js',
    'mysql': 'MySQL',
    'sql': 'SQL',
    'tailwind': 'Tailwind CSS',
    'bootstrap': 'Bootstrap',
    'sqlite': 'SQLite',
    'asp': 'ASP.NET',
    'react': 'React'
  };
  
  return techMap[techName] || techName.charAt(0).toUpperCase() + techName.slice(1);
};
</script>