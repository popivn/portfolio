<template>
    <div>
        <GradientButton @click="togglePopup"
            class="transition-transform duration-300 ease-in-out hover:border hover:border-primary hover:scale-105">
            Contact Me
        </GradientButton>

        <Transition name="fade">
            <div v-if="showFormPopup"
                class="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-[9999] p-4"
                @click="closeOnOutsideClick">
                <div class="bg-gradient-secondary border border-primary/30 p-8 rounded-2xl shadow-2xl w-full max-w-md relative transform transition-all duration-500 ease-out"
                    :class="{ 'scale-100 opacity-100': showFormPopup, 'scale-95 opacity-0': !showFormPopup }"
                    @click.stop>
                    <div
                        class="absolute -top-5 -left-5 w-24 h-24 bg-gradient-primary rounded-full -z-10 blur-xl opacity-60">
                    </div>
                    <div
                        class="absolute -bottom-5 -right-5 w-24 h-24 bg-gradient-primary rounded-full -z-10 blur-xl opacity-60">
                    </div>
                    <div class="absolute top-1/4 right-0 w-16 h-16 bg-primary/30 rounded-full -z-10 blur-lg opacity-30">
                    </div>
                    <div
                        class="absolute bottom-1/4 left-0 w-16 h-16 bg-primary/30 rounded-full -z-10 blur-lg opacity-30">
                    </div>

                    <div class="absolute inset-0 opacity-5 -z-5 overflow-hidden rounded-2xl">
                        <div class="absolute inset-0 bg-repeat opacity-10"
                            style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMCAyMGMwIDUuNTIzIDQuNDc3IDEwIDEwIDEwczEwLTQuNDc3IDEwLTEwLTQuNDc3LTEwLTEwLTEwLTEwIDQuNDc3LTEwIDEwem0xOCAwYzAgNC40MTgtMy41ODIgOC04IDhzLTgtMy41ODItOC04IDMuNTgyLTggOC04IDggMy41ODIgOCA4eiIvPjwvZz48L3N2Zz4=');">
                        </div>
                    </div>

                    <h2 class="text-3xl font-bold text-white mb-8 flex items-center gap-3 relative">
                        <span class="inline-block w-1.5 h-8 bg-primary rounded-full mr-1"></span>
                        Contact Me
                        <div class="absolute -bottom-3 left-0 w-16 h-0.5 bg-primary/50 rounded-full"></div>
                    </h2>

                    <form @submit.prevent="submitForm" class="space-y-6">
                        <div class="space-y-2">
                            <label class="block text-secondary text-sm font-medium">Full Name</label>
                            <div class="relative group">
                                <span
                                    class="absolute left-3 top-1/2 -translate-y-1/2 text-primary/70 group-focus-within:text-primary transition-colors duration-200">
                                    <font-awesome-icon icon="fa-solid fa-user" class="w-4 h-4" />
                                </span>
                                <input type="text" v-model="form.name" :class="{ 'border-red-500': errors.name }"
                                    class="w-full pl-10 pr-4 py-3.5 bg-bgcolor/60 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none text-white transition-all duration-200 group-hover:border-primary/40"
                                    placeholder="Enter your full name">
                                <p v-if="errors.name" class="text-red-400 text-xs mt-1 ml-1">{{ errors.name }}</p>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="block text-secondary text-sm font-medium">Email</label>
                            <div class="relative group">
                                <span
                                    class="absolute left-3 top-1/2 -translate-y-1/2 text-primary/70 group-focus-within:text-primary transition-colors duration-200">
                                    <font-awesome-icon icon="fa-solid fa-envelope" class="w-4 h-4" />
                                </span>
                                <input type="email" v-model="form.email" :class="{ 'border-red-500': errors.email }"
                                    class="w-full pl-10 pr-4 py-3.5 bg-bgcolor/60 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none text-white transition-all duration-200 group-hover:border-primary/40"
                                    placeholder="example@email.com">
                                <p v-if="errors.email" class="text-red-400 text-xs mt-1 ml-1">{{ errors.email }}</p>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="block text-secondary text-sm font-medium">Message</label>
                            <div class="relative group">
                                <span
                                    class="absolute left-3 top-4 text-primary/70 group-focus-within:text-primary transition-colors duration-200">
                                    <font-awesome-icon icon="fa-solid fa-message" class="w-4 h-4" />
                                </span>
                                <textarea v-model="form.message" rows="4" :class="{ 'border-red-500': errors.message }"
                                    class="w-full pl-10 pr-4 py-3.5 bg-bgcolor/60 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none text-white transition-all duration-200 resize-none group-hover:border-primary/40"
                                    placeholder="Enter your message..."></textarea>
                                <p v-if="errors.message" class="text-red-400 text-xs mt-1 ml-1">{{ errors.message }}</p>
                            </div>
                        </div>

                        <div class="flex justify-end gap-3 mt-8">
                            <button type="button" @click="togglePopup"
                                class="px-5 py-3 bg-bgcolor/80 border border-primary/30 text-secondary rounded-xl hover:bg-bgcolor/60 transition-all duration-200 hover:shadow-md">
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

                    <button @click="togglePopup"
                        class="absolute -top-4 -right-4 bg-gradient-primary text-white p-2.5 rounded-full hover:bg-gradient-hover transition-all duration-200 shadow-lg hover:scale-110 hover:rotate-90">
                        <font-awesome-icon icon="fa-solid fa-times" class="w-4 h-4" />
                    </button>
                </div>
            </div>
        </Transition>

        <Transition name="notification">
            <div v-if="notification.show"
                class="fixed bottom-6 right-6 p-5 rounded-xl shadow-2xl max-w-md z-[110] flex items-center gap-4"
                :class="notification.type === 'success' ? 'bg-green-800/90 text-white backdrop-blur-sm border border-green-600/30' : 'bg-red-800/90 text-white backdrop-blur-sm border border-red-600/30'">
                <div class="p-2 rounded-full" :class="notification.type === 'success' ? 'bg-green-700' : 'bg-red-700'">
                    <font-awesome-icon icon="fa-solid fa-check-circle" v-if="notification.type === 'success'"
                        class="w-5 h-5 flex-shrink-0" />
                    <font-awesome-icon icon="fa-solid fa-exclamation-circle" v-if="notification.type === 'error'"
                        class="w-5 h-5 flex-shrink-0" />
                </div>
                <div>
                    <h4 class="font-medium text-sm">{{ notification.type === 'success' ? 'Success!' : 'Error!' }}</h4>
                    <p class="text-sm opacity-90">{{ notification.message }}</p>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import GradientButton from "@/components/Button/GradientButton.vue";

const showFormPopup = ref(false);
const isSubmitting = ref(false);
const form = reactive({
    name: '',
    email: '',
    message: ''
});

const errors = reactive({
    name: '',
    email: '',
    message: ''
});

const notification = reactive({
    show: false,
    type: 'success',
    message: ''
});

const togglePopup = () => {
    showFormPopup.value = !showFormPopup.value;

    if (!showFormPopup.value) {
        resetForm();
    }
};

const closeOnOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
        togglePopup();
    }
};

const resetForm = () => {
    form.name = '';
    form.email = '';
    form.message = '';

    errors.name = '';
    errors.email = '';
    errors.message = '';
};

const validateForm = () => {
    let isValid = true;

    errors.name = '';
    errors.email = '';
    errors.message = '';

    if (!form.name.trim()) {
        errors.name = 'Please enter your full name';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
        errors.email = 'Please enter your email';
        isValid = false;
    } else if (!emailRegex.test(form.email)) {
        errors.email = 'Invalid email';
        isValid = false;
    }

    if (!form.message.trim()) {
        errors.message = 'Please enter a message';
        isValid = false;
    }

    return isValid;
};

const showNotification = (type, message) => {
    notification.type = type;
    notification.message = message;
    notification.show = true;

    setTimeout(() => {
        notification.show = false;
    }, 4000);
};

const submitForm = async () => {
    if (!validateForm()) return;

    isSubmitting.value = true;

    try {
        await new Promise(resolve => setTimeout(resolve, 1500));

        showNotification('success', `Successfully sent! Thank you ${form.name}, we will contact you soon.`);
        togglePopup();
    } catch (error) {
        showNotification('error', 'An error occurred. Please try again later.');
    } finally {
        isSubmitting.value = false;
    }
};
</script>
