<template>
    <div>
        <Shape />
    </div>

    <div class="pb-8 w-full relative z-0">
        <div class="avatar-container absolute -top-[130px] left-1/2 -translate-x-1/2 transition-transform duration-300 ease-in-out"
            :style="{ transform: `translateY(${avatarOffset}px) translateX(-50%)` }" @click="showPopup = true">
            <img :src="isValidImage(userProfile.image) ? userProfile.image : userProfile.image"
                alt="Profile Image"
                class="w-32 h-32 rounded-full border-4 border-primary shadow-lg object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_15px_4px_rgba(0,255,255,0.6)] hover:border-secondary" />
        </div>

        <Transition>
            <div v-if="showPopup" class="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
                @click="showPopup = false">
                <div class="bg-white p-6 rounded-lg shadow-lg text-center relative" @click.stop>
                    <h1 class="text-2xl font-bold text-primary mb-4 animate-bounce">🎉 Happy New Year! 🎉</h1>
                    <button @click="showPopup = false"
                        class="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-700">✖</button>
                </div>
            </div>
        </Transition>

        <div
            class="relative rounded-lg shadow-lg p-4 backdrop-blur-sm bg-gradient-secondary mt-10 z-10 hover:border hover:border-primary">
            <div
                class="absolute -top-4 left-4 bg-gradient-secondary px-4 text-primary font-bold text-lg shadow-md border border-primary rounded-lg">
                About Me
            </div>
            <div class="flex flex-col sm:flex-row sm:gap-4">
                <p class="flex-1 text-secondary text-justify" v-html="userProfile.description"></p>
            </div>
        </div>

        <div class="relative flex items-center gap-4 mt-4">
            <GradientButton @click="toggleSocialIcons"
                class="transition-transform duration-300 ease-in-out hover:border hover:border-primary">
                Contact Me
            </GradientButton>
        </div>
    </div>
    <div class="min-h-[20vh]"></div>
</template>

<script setup>
import { ref, computed, reactive, onMounted, onUnmounted } from "vue";
import Shape from "@/components/Modal/Shape.vue";
import GradientButton from "@/components/Button/GradientButton.vue";

const userProfiles = reactive([
    {
        name: "To Trung Hieu",
        nickname: "PoPi",
        image: 'src/assets/images/meow.jpg',
        email: "hieutt.fw@gmail.com",
        socialLinks: [
            { name: "Github", icon: ["fab", "github"], link: "https://github.com/lenhatquangg" },
            { name: "LinkedIn", icon: ["fab", "linkedin"], link: "https://www.linkedin.com/in/hi%E1%BA%BFu-t%C3%B4-trung-89b347335/" },
            { name: "Email", icon: ["fas", "envelope"], link: "https://mail.google.com/mail/u/0/#inbox?compose=new&to=hieutt.fw@gmail.com" }
        ],
        description:
            "Hi, my name is To Trung Hieu, also known as PoPi, a dedicated web developer with a focus on PHP and Laravel. " +
            "I am currently pursuing a degree in Software Engineering at BTEC FPT British College, Cần Thơ, expected to graduate in April 2025. " +
            "With experience from internships at PhuQuocDevs and various real-world projects, I have honed my skills in both front-end and back-end development, " +
            "including frameworks like Vue.js, ReactJS, and ASP.NET. Additionally, I am actively learning about online security to broaden my expertise. " +
            "My career objective is to become a Full-Stack Developer within the next 12 months, leveraging strong problem-solving and teamwork skills. " +
            "Long-term, I aspire to take on leadership roles like Tech Lead or Solution Architect, contributing to innovative product strategies and driving sustainable growth."
    }
]);

const userProfile = userProfiles[0];
const showPopup = ref(false);
const isIconsVisible = ref(false);
const avatarOffset = ref(0);

const formattedDescription = computed(() => {
    return userProfile.description.replace(/\r\n\r\n/g, "<br><br>");
});

function toggleSocialIcons() {
    isIconsVisible.value = !isIconsVisible.value;
}

function isValidImage(imageUrl) {
    return imageUrl && imageUrl.startsWith("http");
}

const handleScroll = () => {
    avatarOffset.value = Math.min(window.scrollY / 2, 64);
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>