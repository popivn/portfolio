<template>
    <div>
      <GradientButton @click="togglePopup"
        class="transition-transform duration-300 ease-in-out hover:border hover:border-primary hover:scale-105">
        Contact Me
      </GradientButton>
  
      <Transition name="fade">
        <div v-if="showFormPopup"
          class="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-[9999] p-4 backdrop"
          @click="closeOnOutsideClick">
          <div class="bg-gradient-secondary border border-primary/30 p-8 rounded-2xl shadow-2xl w-full max-w-md relative z-[9999] transform transition-all duration-500 ease-out"
            :class="{ 'scale-100 opacity-100': showFormPopup, 'scale-95 opacity-0': !showFormPopup }"
            @click.stop>
            
            <h2 class="text-3xl font-bold text-white mb-8 flex items-center gap-3 relative">
              Contact Me
              <div class="absolute -bottom-3 left-0 w-16 h-0.5 bg-primary/50 rounded-full"></div>
            </h2>
  
            <form @submit.prevent="submitForm" class="space-y-6">
              <FormField label="Full Name" v-model="form.name" type="text" icon="user" :error="errors.name" />
              <FormField label="Email" v-model="form.email" type="email" icon="envelope" :error="errors.email" />
              <FormField label="Message" v-model="form.message" type="textarea" icon="message" :error="errors.message" />
  
              <div class="flex justify-end gap-3 mt-8">
                <button type="button" @click="togglePopup"
                  class="px-5 py-3 bg-gray-700 text-white rounded-xl transition-all duration-200 hover:bg-gray-600">
                  Cancel
                </button>
                <button type="submit"
                  class="px-5 py-3 bg-gradient-primary hover:bg-gradient-hover text-white rounded-xl transition-all duration-200 flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
                  :disabled="isSubmitting">
                  <span v-if="isSubmitting">
                    <font-awesome-icon icon="fa-solid fa-spinner" class="w-4 h-4 animate-spin mr-1" />
                    Sending...
                  </span>
                  <span v-else>
                    <font-awesome-icon icon="fa-solid fa-paper-plane" class="w-4 h-4 mr-1" />
                    Send Message
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Transition>
  
      <Notification v-if="notification.show" :message="notification.message" :type="notification.type" />
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  import GradientButton from "@/components/Button/GradientButton.vue";
  import FormField from "@/components/FormField.vue";
  import Notification from "@/components/Notification.vue";
  
  // Popup control
  const showFormPopup = ref(false);
  const isSubmitting = ref(false);
  
  // Form state
  const form = reactive({ name: '', email: '', message: '' });
  const errors = reactive({ name: '', email: '', message: '' });
  
  // Notification state
  const notification = ref({ show: false, message: "", type: "success" });
  
  const showNotification = (type, message) => {
    notification.value = { show: true, message, type };
    setTimeout(() => notification.value.show = false, 3000);
  };
  
  const togglePopup = () => {
    showFormPopup.value = !showFormPopup.value;
    if (!showFormPopup.value) resetForm();
  };
  
  const closeOnOutsideClick = (event) => {
    if (event.target.classList.contains('backdrop')) togglePopup();
  };
  
  const resetForm = () => {
    form.name = ''; form.email = ''; form.message = '';
    errors.name = ''; errors.email = ''; errors.message = '';
  };
  
  const validateForm = () => {
    let isValid = true;
    errors.name = ''; errors.email = ''; errors.message = '';
  
    if (!form.name.trim()) { errors.name = 'Please enter your full name'; isValid = false; }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errors.email = 'Invalid email'; isValid = false; }
    if (!form.message.trim()) { errors.message = 'Please enter a message'; isValid = false; }
  
    return isValid;
  };
  
  const submitForm = async () => {
    if (!validateForm()) return;
  
    isSubmitting.value = true;
    try {
      const response = await fetch('http://localhost:8000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form)
      });
  
      const responseText = await response.text();
      let data;
      try { data = JSON.parse(responseText); } catch (e) { console.error("Invalid JSON response:", e); }
  
      if (!response.ok) throw new Error(data?.message || `Server returned ${response.status}: ${responseText}`);
  
      showNotification('success', data?.message || 'Message sent successfully!');
      togglePopup();
    } catch (error) {
      console.error("Error:", error);
      showNotification('error', error.message || 'Failed to send message.');
    } finally {
      isSubmitting.value = false;
    }
  };
  </script>
  