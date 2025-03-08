<template>
    <div>
      <Shape />
    </div>
  
    <div class="pb-8 w-full relative z-100">
      <div 
        class="avatar-container absolute -top-[130px] left-1/2 -translate-x-1/2 transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateY(${avatarOffset}px) translateX(-50%)` }" 
        @click="showPopup = true"
      >
        <img 
          :src="isValidImage(userProfile.image) ? userProfile.image : userProfile.image" 
          alt="Profile Image"
          class="w-32 h-32 rounded-full border-4 border-primary shadow-lg object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_15px_4px_rgba(0,255,255,0.6)] hover:border-secondary" 
        />
      </div>
  
      <div class="relative rounded-lg shadow-lg p-6 backdrop-blur-sm bg-gradient-secondary mt-10 z-10 hover:border hover:border-primary">
        <div class="absolute -top-4 left-4 bg-gradient-secondary px-4 py-1 text-primary font-bold text-lg shadow-md border border-primary rounded-lg">
          About Me
        </div>
        
        <div class="mt-4 space-y-4">
          <div v-for="(paragraph, index) in formattedParagraphs" :key="index" 
               class="text-secondary text-justify leading-relaxed">
            <p>{{ paragraph }}</p>
          </div>
        </div>
  
        <div class="mt-6 pt-4 border-t border-primary/30">
          <h3 class="text-primary font-semibold mb-2">Skills & Expertise</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="(skill, index) in skills" :key="index" 
                  class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
      <ContactForm/>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, reactive, onMounted, onUnmounted } from "vue";
  import Shape from "@/components/Modal/Shape.vue";
  import ContactForm from './Contact_Form.vue';
  
  const showPopup = ref(false);
  
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
  const avatarOffset = ref(0);
  
  const formattedParagraphs = computed(() => {
    const text = userProfile.description;
    return [
      text.substring(0, text.indexOf("I am currently")),
      text.substring(text.indexOf("I am currently"), text.indexOf("With experience")),
      text.substring(text.indexOf("With experience"), text.indexOf("My career objective")),
      text.substring(text.indexOf("My career objective"))
    ].filter(p => p.trim().length > 0);
  });
  
  const skills = [
    "PHP", "Laravel", "Vue.js", "ReactJS", "ASP.NET", 
    "Front-end Development", "Back-end Development", 
    "Web Security", "Problem Solving", "Teamwork"
  ];
  
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