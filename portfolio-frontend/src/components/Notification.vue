<template>
    <div v-if="visible" class="fixed bottom-5 right-5 flex items-center p-4 rounded-lg shadow-lg text-white"
         :class="notificationClasses">
      <span class="flex-1">{{ message }}</span>
      <button @click="closeNotification" class="ml-4 text-lg font-bold focus:outline-none">×</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  const props = defineProps({
    message: String,
    type: {
      type: String,
      default: "success", 
    },
    duration: {
      type: Number,
      default: 3000, 
    },
  });
  
  const visible = ref(true);
  
  const closeNotification = () => {
    visible.value = false;
  };
  
  onMounted(() => {
    setTimeout(() => {
      visible.value = false;
    }, props.duration);
  });
  
  const notificationClasses = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  }[props.type] || "bg-gray-500";
  </script>
  