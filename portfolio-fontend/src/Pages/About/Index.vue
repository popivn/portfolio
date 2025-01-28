<template>
    <div>
        <Shape />
    </div>
    <div class="pb-8 w-full relative z-0">
        <div class="avatar-container absolute -top-[130px] left-1/2 -translate-x-1/2 transition-transform duration-300 ease-in-out"
            :style="{ transform: `translateY(${avatarOffset}px) translateX(-50%)` }">
            <img :src="isValidImage(userDetails?.profile_image) ? userDetails.profile_image : defaultImage"
                alt="Profile Image"
                class="w-32 h-32 rounded-full border-4 border-primary shadow-lg object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_15px_4px_rgba(0,255,255,0.6)] hover:border-secondary" />
        </div>

        <div class="relative rounded-lg shadow-lg p-6 w-full backdrop-blur-sm bg-gradient-secondary mt-10 z-10">
            <div
                class="absolute -top-4 left-4 bg-gradient-secondary px-4 text-primary font-bold text-lg shadow-md border border-primary rounded-lg">
                About Me
            </div>
            <div v-if="loading" class="text-center">
                <p class="text-secondary">Loading...</p>
            </div>
            <div v-else-if="userDetails" class="flex flex-col sm:flex-row sm:items-start sm:gap-4">
                <div class="flex-1">
                    <p class="text-secondary text-justify" v-html="formattedDescription"></p>
                </div>
                <div class="flex-none mt-2 relative sparkle-container">
                    <img :src="theChariotImage" alt="The Chariot"
                        class="w-32 h-full rounded-lg shadow-lg object-cover hover:animate-spin-y" />
                    <div class="sparkles"></div>
                </div>
            </div>
            <div v-else>
                <p class="text-secondary">No user details found.</p>
            </div>
        </div>

        <!-- Contact section với Font Awesome icons -->
        <div class="relative flex items-center gap-4 mt-4 ">
            <GradientButton @click="toggleSocialIcons" :class="[
                'transition-transform duration-300 ease-in-out',
                isIconsVisible ? 'translate-x-[120%]' : 'translate-x-0'
            ]">
                Contact Me
            </GradientButton>

            <!-- Social Icons -->
            <div class="absolute top-0 left-0 flex items-center gap-4 mt-4 bg-gradient-secondary rounded-full p-2 pt-"
                :class="[
                    'transition-all duration-300 ease-in-out',
                    isIconsVisible
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-0 pointer-events-none'
                ]">
                <!-- GitHub -->
                <a href="#"
                    class="text-primary hover:text-secondary transition-colors duration-200 transform hover:scale-110">
                    <font-awesome-icon :icon="['fab', 'github']" class="w-5 h-5" />
                </a>

                <!-- LinkedIn -->
                <a href="#"
                    class="text-primary hover:text-secondary transition-colors duration-200 transform hover:scale-110">
                    <font-awesome-icon :icon="['fab', 'linkedin']" class="w-5 h-5" />
                </a>

                <!-- Facebook -->
                <a href="#"
                    class="text-primary hover:text-secondary transition-colors duration-200 transform hover:scale-110">
                    <font-awesome-icon :icon="['fab', 'facebook']" class="w-5 h-5" />
                </a>

                <!-- Phone -->
                <a href="#"
                    class="text-primary hover:text-secondary transition-colors duration-200 transform hover:scale-110">
                    <font-awesome-icon :icon="['fas', 'phone']" class="w-5 h-5" />
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-[20vh]">
    </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from "vue";
import Shape from "@/components/Modal/Shape.vue";
import GradientButton from "@/components/Button/GradientButton.vue";
import axios from "axios";

const userDetails = ref(null);
const loading = ref(true);
const isIconsVisible = ref(false);

const formattedDescription = computed(() => {
    return userDetails.value?.description
        ? userDetails.value.description.replace(/\r\n\r\n/g, "<br><br>")
        : "";
});

const toggleSocialIcons = () => {
    isIconsVisible.value = !isIconsVisible.value;
};

import theChariotImage from "@/assets/images/the_chariot.png";

const defaultImage = theChariotImage;

const avatarOffset = ref(0);

const isValidImage = (url) => {
    if (!url || typeof url !== "string") return false;
    return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url);
};

const handleScroll = () => {
    const maxOffset = 64;
    const scrollY = window.scrollY;
    avatarOffset.value = Math.min(scrollY / 2, maxOffset);
};

const fetchUserDetails = async () => {
    try {
        const response = await axios.get("https://portfolio-nro7.onrender.com/api/user-detail");
        if (response.data?.data) {
            userDetails.value = response.data.data;
        } else {
            console.error("Invalid response format:", response.data);
        }
    } catch (error) {
        console.error("Error fetching user details:", error);
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    fetchUserDetails();
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Giữ nguyên các styles khác */
@keyframes spinY {
    from {
        transform: rotateY(0deg);
    }

    to {
        transform: rotateY(360deg);
    }
}

.hover\:animate-spin-y:hover {
    animation: spinY 3s linear infinite;
    transform-style: preserve-3d;
}

.sparkle-container {
    position: relative;
}

.sparkles {
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    pointer-events: none;
}

.sparkles::before,
.sparkles::after {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 4px 2px rgba(255, 255, 255, 0.4);
    animation: sparkle 1.5s infinite;
}

@keyframes sparkle {

    0%,
    100% {
        opacity: 0;
        transform: scale(0.5);
    }

    50% {
        opacity: 1;
        transform: scale(1.2);
    }
}

.sparkles::before {
    top: 20%;
    left: 20%;
    animation-delay: 0s;
}

.sparkles::after {
    top: 60%;
    right: 20%;
    animation-delay: 0.4s;
}

.sparkles::before:nth-child(3) {
    bottom: 30%;
    left: 50%;
    animation-delay: 0.8s;
}

.sparkle-container::before,
.sparkle-container::after {
    content: "";
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 4px 2px rgba(255, 255, 255, 0.5);
    animation: sparkle 2s infinite;
}

.sparkle-container::before {
    top: 40%;
    right: 10%;
    animation-delay: 0.2s;
}

.sparkle-container::after {
    bottom: 20%;
    left: 30%;
    animation-delay: 0.6s;
}
</style>