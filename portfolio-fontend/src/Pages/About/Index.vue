<template>
    <div>
        <Shape />
    </div>
    <div class="pb-8 w-full relative">
        <div class="avatar-container absolute -top-[130px] left-1/2 -translate-x-1/2 transition-transform duration-300 ease-in-out"
            :style="{ transform: `translateY(${avatarOffset}px) translateX(-50%)` }">
            <img :src="isValidImage(userDetails?.profile_image) ? userDetails.profile_image : defaultImage"
                alt="Profile Image"
                class="w-32 h-32 rounded-full border-4 border-primary shadow-lg object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_15px_4px_rgba(0,255,255,0.6)] hover:border-secondary" />
        </div>

        <div class="relative rounded-lg shadow-lg p-6 w-full backdrop-blur-sm bg-gradient-secondary mt-10 z-40">
            <div
                class="absolute -top-4 left-4 bg-gradient-secondary px-4 text-primary font-bold text-lg shadow-md border border-primary rounded-lg">
                About Me
            </div>
            <div v-if="loading" class="text-center">
                <p class="text-secondary">Loading...</p>
            </div>
            <div v-else-if="userDetails" class="space-y-2">
                <p class="flex flex-col sm:flex-row sm:gap-2">
                    <span class="text-secondary text-justify" v-html="formattedDescription"></span>
                </p>
            </div>
            <div v-else>
                <p class="text-secondary">No user details found.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from "vue";
import Shape from "@/components/Modal/Shape.vue";
import axios from "axios";

const userDetails = ref(null);
const loading = ref(true);

const formattedDescription = computed(() => {
    return userDetails.value?.description
        ? userDetails.value.description.replace(/\r\n\r\n/g, "<br><br>")
        : "";
});

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
<style>
.avatar-container {
    z-index: 10;
    /* Đảm bảo avatar luôn nằm trên nội dung */
}
</style>