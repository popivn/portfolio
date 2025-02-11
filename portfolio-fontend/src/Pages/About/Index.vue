<template>
    <div>
        <Shape />
    </div>
    
    <div class="pb-8 w-full relative z-0">
        <div class="avatar-container absolute -top-[130px] left-1/2 -translate-x-1/2 transition-transform duration-300 ease-in-out"
            :style="{ transform: `translateY(${avatarOffset}px) translateX(-50%)` }" @click="showPopup = true">
            <img :src="isValidImage(userDetails?.profile_image) ? userDetails.profile_image : defaultImage"
                alt="Profile Image"
                class="w-32 h-32 rounded-full border-4 border-primary shadow-lg object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_15px_4px_rgba(0,255,255,0.6)] hover:border-secondary" />
        </div>
    
        <Transition>
            <div v-if="showPopup" class="fixed inset-0 flex items-center justify-center bg-black/50 z-50" @click="showPopup = false">
                <div class="bg-white p-6 rounded-lg shadow-lg text-center relative" @click.stop>
                    <h1 class="text-2xl font-bold text-primary mb-4 animate-bounce">🎉 Happy New Year! 🎉</h1>
                    <button @click="showPopup = false" class="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-700">✖</button>
                </div>
            </div>
        </Transition>
    
        <div class="relative rounded-lg shadow-lg p-4 backdrop-blur-sm bg-gradient-secondary mt-10 z-10 hover:border hover:border-primary">
            <div class="absolute -top-4 left-4 bg-gradient-secondary px-4 text-primary font-bold text-lg shadow-md border border-primary rounded-lg">
                About Me
            </div>
            
            <div v-if="loading" class="text-center text-secondary">Loading...</div>
            <div v-else class="flex flex-col sm:flex-row sm:gap-4">
                <p class="flex-1 text-secondary text-justify" v-html="formattedDescription"></p>
                <div class="flex-none mt-2 relative sparkle-container">
                    <img :src="theChariotImage" alt="The Chariot" class="w-32 rounded-lg shadow-lg object-cover hover:animate-spin-y" />
                    <div class="sparkles"></div>
                </div>
            </div>
        </div>
    
        <div class="relative flex items-center gap-4 mt-4">
            <GradientButton @click="toggleSocialIcons" class="transition-transform duration-300 ease-in-out hover:border hover:border-primary"
                :class="isIconsVisible ? 'translate-x-[120%]' : 'translate-x-0'">
                Contact Me
            </GradientButton>
    
            <div class="absolute top-0 left-0 flex items-center gap-4 mt-4 bg-gradient-secondary rounded-full p-2 transition-all duration-300 ease-in-out"
                :class="isIconsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-0 pointer-events-none'">
                <a v-for="icon in socialIcons" :key="icon.name" :href="icon.link"
                    class="text-primary hover:text-secondary transition-colors duration-200 transform hover:scale-110">
                    <font-awesome-icon :icon="icon.icon" class="w-5 h-5" />
                </a>
            </div>
        </div>
    </div>
    
    <div class="min-h-[20vh]"></div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from "vue";
import Shape from "@/components/Modal/Shape.vue";
import GradientButton from "@/components/Button/GradientButton.vue";
import axios from "axios";
import theChariotImage from "@/assets/images/the_chariot.png";

const userDetails = ref(null);
const loading = ref(true);
const isIconsVisible = ref(false);
const avatarOffset = ref(0);
const showPopup = ref(false);
const defaultImage = theChariotImage;

const socialIcons = [
    { name: 'Github', icon: ['fab', 'github'], link: 'https://github.com/lenhatquangg' },
    { name: 'LinkedIn', icon: ['fab', 'linkedin'], link: 'https://www.linkedin.com/in/hi%E1%BA%BFu-t%C3%B4-trung-89b347335/' },
    { 
        name: 'Email', 
        icon: ['fas', 'envelope'], 
        link: 'https://mail.google.com/mail/u/0/#inbox?compose=new&to=hieutt.fw@gmail.com' 
    }
];

const formattedDescription = computed(() => {
    return userDetails.value?.description
        ? userDetails.value.description.replace(/\r\n\r\n/g, "<br><br>")
        : "Contrary to popular belief, Lorem Ipsum is not simply random text...";
});

const toggleSocialIcons = () => {
    isIconsVisible.value = !isIconsVisible.value;
};

const isValidImage = (url) => url && /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url);

const handleScroll = () => {
    avatarOffset.value = Math.min(window.scrollY / 2, 64);
};

const fetchUserDetails = async () => {
    try {
        const response = await axios.get("https://portfolio-nro7.onrender.com/api/user-detail");
        userDetails.value = response.data?.data || null;
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
@keyframes spinY {
    from { transform: rotateY(0deg); }
    to { transform: rotateY(360deg); }
}

.hover\:animate-spin-y:hover {
    animation: spinY 3s linear infinite;
    transform-style: preserve-3d;
}
</style>