<template>
  <div>
    <div class="flex flex-wrap justify-center gap-4 mb-8">
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-green-500"></span>
        <span class="text-sm text-secondary">Active</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-blue-500"></span>
        <span class="text-sm text-secondary">Completed</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-amber-500"></span>
        <span class="text-sm text-secondary">Upcoming</span>
      </div>
    </div>

    <div class="timeline space-y-6 relative">
      <div
        class="hidden sm:block absolute left-[28%] sm:left-1/4 transform -translate-x-1/2 top-0 h-full w-[2px] bg-primary">
      </div>

      <div v-for="(project, index) in sortedProjects" :key="index" class="event relative">
        <div class="block sm:hidden space-y-3">
          <div class="timestamp font-bold text-primary text-center mb-2">
            <div class="flex items-center justify-center gap-2">
              <span class="text-sm">{{ formatDate(project.startDate) }}</span>
              <span>—</span>
              <span class="text-sm">{{ project.endDate ? formatDate(project.endDate) : 'Present' }}</span>
              <span 
                :class="`w-3 h-3 rounded-full ml-1 ${getStatusColor(project)}`"
                :title="getStatusText(project)">
              </span>
            </div>
            <div class="text-xs text-secondary mt-1">
              {{ getProjectDuration(project) }}
            </div>
          </div>

          <div 
            class="project p-6 pt-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 pb-2 cursor-pointer"
            :class="{'border-l-4 border-green-500': isActive(project)}"
            @click="openLinkPopup(project, $event)">
            <h3 class="text-xl text-primary mb-2 font-bold flex items-center gap-2">
              {{ project.name }}
            </h3>
            <p class="text-sm text-secondary">{{ project.description }}</p>

            <div class="flex justify-between items-center mt-4">
              <div class="text-xs font-medium px-2 py-1 rounded-full" :class="getStatusBadgeClass(project)">
                {{ getStatusText(project) }}
              </div>
              <div class="icons flex space-x-2">
                <img v-for="(icon, i) in project.icons" :key="i" :src="icon" :alt="'Icon for ' + project.name"
                  class="w-6 h-6 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div class="hidden sm:flex items-start gap-6 relative">
          <div class="timestamp text-right font-bold text-primary break-words w-1/5">
            <div>
              <div>{{ formatDate(project.startDate) }}</div>
              <div class="text-xs text-secondary my-1">{{ getProjectDuration(project) }}</div>
              <div>{{ project.endDate ? formatDate(project.endDate) : 'Present' }}</div>
            </div>
          </div>

          <div 
            :class="`w-5 h-5 ${getStatusColor(project)} rounded-full absolute left-[28%] sm:left-1/4 transform -translate-x-1/2 border-2 border-white`"
            :title="getStatusText(project)">
          </div>

          <div
            class="bg-gradient-secondary ml-2 sm:ml-[8%] flex-1 p-6 pt-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 pb-4 cursor-pointer"
            :class="{'border-l-4': isActive(project)}" 
            :style="isActive(project) ? 'border-color: rgb(34, 197, 94);' : ''"
            @click="openLinkPopup(project, $event)">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl text-primary font-bold">{{ project.name }}</h3>
              <div class="text-xs font-medium px-2 py-1 rounded-full" :class="getStatusBadgeClass(project)">
                {{ getStatusText(project) }}
              </div>
            </div>
            <p class="text-sm text-secondary">{{ project.description }}</p>
            <div class="icons flex justify-end space-x-2 mt-4">
              <img v-for="(icon, i) in project.icons" :key="i" :src="icon" :alt="'Icon for ' + project.name"
                class="w-6 h-6 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Links Popup -->
    <div v-if="showLinkPopup" 
         class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
         @click="closeLinkPopup">
      <div class="bg-white bg-gradient-primary rounded-lg shadow-xl p-6 max-w-sm w-full mx-4 transform transition-all"
           @click.stop>
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold text-primary">{{ selectedProject?.name }}</h3>
          <button @click="closeLinkPopup" class="text-gray-500 hover:text-gray-700">
            <font-awesome-icon :icon="['fas', 'times']" />
          </button>
        </div>
        
        <div v-if="!hasLinks" class="text-center py-4 text-secondary">
          No links available for this project
        </div>
        
        <div v-else class="flex justify-center gap-8 py-4">
          <a v-if="selectedProject?.github?.length" 
             :href="selectedProject.github[0]" 
             target="_blank" 
             rel="noopener noreferrer"
             class="flex flex-col items-center gap-2 text-primary hover:text-primary-dark transition-colors">
            <font-awesome-icon :icon="['fab', 'github']" class="text-3xl" />
            <span class="text-sm">GitHub</span>
          </a>
          
          <a v-if="selectedProject?.website?.length" 
             :href="selectedProject.website[0]" 
             target="_blank" 
             rel="noopener noreferrer"
             class="flex flex-col items-center gap-2 text-primary hover:text-primary-dark transition-colors">
            <font-awesome-icon :icon="['fas', 'paper-plane']" class="text-3xl" />
            <span class="text-sm">Website</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
});

// Popup state
const showLinkPopup = ref(false);
const selectedProject = ref(null);

const hasLinks = computed(() => {
  if (!selectedProject.value) return false;
  
  return (
    (selectedProject.value.github && selectedProject.value.github.length > 0) || 
    (selectedProject.value.website && selectedProject.value.website.length > 0)
  );
});

const openLinkPopup = (project, event) => {
  // Prevent event bubbling
  event.stopPropagation();
  
  selectedProject.value = project;
  showLinkPopup.value = true;
};

const closeLinkPopup = () => {
  showLinkPopup.value = false;
  selectedProject.value = null;
};

const processedProjects = computed(() => {
  const today = new Date();
  
  return props.projects.map(project => {
    let startDate, endDate;
    
    if (project.date.includes('to')) {
      const [start, end] = project.date.split(' to ');
      startDate = new Date(start);
      endDate = end === 'Present' ? null : new Date(end);
    } else {
      startDate = new Date(project.date);
      endDate = new Date(project.date);
    }
    
    return {
      ...project,
      startDate,
      endDate,
      status: !endDate ? 'active' : 
              endDate > today ? 'upcoming' : 'completed'
    };
  });
});

const sortedProjects = computed(() => {
  return [...processedProjects.value].sort((a, b) => b.startDate - a.startDate);
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

const isActive = (project) => {
  return project.status === 'active';
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

const getStatusBadgeClass = (project) => {
  switch (project.status) {
    case 'active': return 'bg-green-100 text-green-800';
    case 'upcoming': return 'bg-amber-100 text-amber-800';
    case 'completed': return 'bg-blue-100 text-blue-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};
</script>

