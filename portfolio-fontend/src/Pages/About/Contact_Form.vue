<template>
    <div>
        <GradientButton @click="togglePopup"
            class="transition-transform duration-300 ease-in-out hover:border hover:border-primary">
            Contact Me
        </GradientButton>

        <Transition name="fade">
            <div v-if="showFormPopup"
                class="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
                @click="closeOnOutsideClick">
                <div class="bg-gradient-secondary border border-primary/20 p-6 rounded-xl shadow-2xl w-full max-w-md relative transform transition-all duration-300 ease-out"
                    :class="{ 'scale-100 opacity-100': showFormPopup, 'scale-95 opacity-0': !showFormPopup }"
                    @click.stop>
                    <div
                        class="absolute -top-3 -left-3 w-16 h-16 bg-gradient-primary rounded-lg -z-10 blur-xl opacity-70">
                    </div>
                    <div
                        class="absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-primary rounded-lg -z-10 blur-xl opacity-70">
                    </div>

                    <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        Contact Me
                    </h2>

                    <form @submit.prevent="submitForm" class="space-y-4">
                        <div class="space-y-2">
                            <label class="block text-secondary text-sm font-medium">Full Name</label>
                            <div class="relative">
                                <input type="text" v-model="form.name" :class="{ 'border-red-500': errors.name }"
                                    class="w-full pl-10 pr-4 py-3 bg-bgcolor/80 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none text-white transition-all duration-200"
                                    placeholder="Enter your full name">
                                <p v-if="errors.name" class="text-red-400 text-xs mt-1">{{ errors.name }}</p>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="block text-secondary text-sm font-medium">Email</label>
                            <div class="relative">
                                <input type="email" v-model="form.email" :class="{ 'border-red-500': errors.email }"
                                    class="w-full pl-10 pr-4 py-3 bg-bgcolor/80 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none text-white transition-all duration-200"
                                    placeholder="example@email.com">
                                <p v-if="errors.email" class="text-red-400 text-xs mt-1">{{ errors.email }}</p>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="block text-secondary text-sm font-medium">Message</label>
                            <div class="relative">
                                <textarea v-model="form.message" rows="4" :class="{ 'border-red-500': errors.message }"
                                    class="w-full pl-10 pr-4 py-3 bg-bgcolor/80 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none text-white transition-all duration-200 resize-none"
                                    placeholder="Enter your message..."></textarea>
                                <p v-if="errors.message" class="text-red-400 text-xs">{{ errors.message }}</p>
                            </div>
                        </div>

                        <div class="flex justify-end gap-3 mt-6">
                            <button type="button" @click="togglePopup"
                                class="px-4 py-2.5 bg-bgcolor border border-primary/30 text-secondary rounded-lg hover:bg-bgcolor/80 transition-all duration-200">
                                Cancel
                            </button>
                            <button type="submit"
                                class="px-4 py-2.5 bg-gradient-primary hover:bg-gradient-hover text-white rounded-lg transition-all duration-200 flex items-center gap-2"
                                :disabled="isSubmitting">
                                <span v-if="isSubmitting">Submitting...</span>
                                <span v-else>Send</span>
                            </button>
                        </div>
                    </form>

                    <button @click="togglePopup"
                        class="absolute -top-3 -right-3 bg-gradient-primary text-white p-2 rounded-lg hover:bg-gradient-hover transition-all duration-200 shadow-lg">
                        <font-awesome-icon icon="fa-solid fa-times" class="w-4 h-4" />
                    </button>
                </div>
            </div>
        </Transition>

        <Transition name="notification">
            <div v-if="notification.show"
                class="fixed bottom-4 right-4 p-4 rounded-lg shadow-lg max-w-md z-50 flex items-center gap-3"
                :class="notification.type === 'success' ? 'bg-green-800 text-white' : 'bg-red-800 text-white'">
                <font-awesome-icon icon="fa-solid fa-check-circle" v-if="notification.type === 'success'" class="w-5 h-5 flex-shrink-0" />
                <font-awesome-icon icon="fa-solid fa-exclamation-circle" v-if="notification.type === 'error'" class="w-5 h-5 flex-shrink-0" />
                <p>{{ notification.message }}</p>
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
    }, 3000);
};

const submitForm = async () => {
    if (!validateForm()) return;

    isSubmitting.value = true;

    try {
        showNotification('success', `Successfully sent! Thank you ${form.name}, we will contact you soon.`);

        togglePopup();
    } catch (error) {
        showNotification('error', 'An error occurred. Please try again later.');
    } finally {
        isSubmitting.value = false;
    }
};
</script>
