/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, computed, reactive, onMounted, onUnmounted } from "vue";
import Shape from "@/components/Modal/Shape.vue";
import ContactForm from './Contact_Form.vue';
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
        description: "Hi, my name is To Trung Hieu, also known as PoPi, a dedicated web developer with a focus on PHP and Laravel. " +
            "I am currently pursuing a degree in Software Engineering at BTEC FPT British College, Cần Thơ, expected to graduate in April 2025. " +
            "With experience from internships at PhuQuocDevs and various real-world projects, I have honed my skills in both front-end and back-end development, " +
            "including frameworks like Vue.js, ReactJS, and ASP.NET. Additionally, I am actively learning about online security to broaden my expertise. " +
            "My career objective is to become a Full-Stack Developer within the next 12 months, leveraging strong problem-solving and teamwork skills. " +
            "Long-term, I aspire to take on leadership roles like Tech Lead or Solution Architect, contributing to innovative product strategies and driving sustainable growth."
    }
]);
const userProfile = userProfiles[0];
const avatarOffset = ref(0);
const formattedDescription = computed(() => {
    return userProfile.description.replace(/\r\n\r\n/g, "<br><br>");
});
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
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
/** @type {[typeof Shape, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Shape, new Shape({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "pb-8 w-full relative z-0" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.showPopup = true;
        } },
    ...{ class: "avatar-container absolute -top-[130px] left-1/2 -translate-x-1/2 transition-transform duration-300 ease-in-out" },
    ...{ style: ({ transform: `translateY(${__VLS_ctx.avatarOffset}px) translateX(-50%)` }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.isValidImage(__VLS_ctx.userProfile.image) ? __VLS_ctx.userProfile.image : __VLS_ctx.userProfile.image),
    alt: "Profile Image",
    ...{ class: "w-32 h-32 rounded-full border-4 border-primary shadow-lg object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_15px_4px_rgba(0,255,255,0.6)] hover:border-secondary" },
});
const __VLS_3 = {}.Transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.Transition, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(__VLS_3, new __VLS_3({
    name: "fade",
}));
const __VLS_5 = __VLS_4({
    name: "fade",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
__VLS_6.slots.default;
if (__VLS_ctx.showPopup) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.showPopup))
                    return;
                __VLS_ctx.showPopup = false;
            } },
        ...{ class: "fixed inset-0 flex items-center justify-center bg-black/50 z-50" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: () => { } },
        ...{ class: "bg-white p-6 rounded-lg shadow-lg text-center relative" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: "text-2xl font-bold text-primary mb-4 animate-bounce" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.showPopup))
                    return;
                __VLS_ctx.showPopup = false;
            } },
        ...{ class: "absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-700" },
    });
}
var __VLS_6;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "relative rounded-lg shadow-lg p-4 backdrop-blur-sm bg-gradient-secondary mt-10 z-10 hover:border hover:border-primary" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "absolute -top-4 left-4 bg-gradient-secondary px-4 text-primary font-bold text-lg shadow-md border border-primary rounded-lg" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col sm:flex-row sm:gap-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "flex-1 text-secondary text-justify" },
});
__VLS_asFunctionalDirective(__VLS_directives.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.userProfile.description) }, null, null);
/** @type {[typeof ContactForm, ]} */ ;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(ContactForm, new ContactForm({}));
const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
/** @type {__VLS_StyleScopedClasses['pb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['z-0']} */ ;
/** @type {__VLS_StyleScopedClasses['avatar-container']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['-top-[130px]']} */ ;
/** @type {__VLS_StyleScopedClasses['left-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-x-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['ease-in-out']} */ ;
/** @type {__VLS_StyleScopedClasses['w-32']} */ ;
/** @type {__VLS_StyleScopedClasses['h-32']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['border-4']} */ ;
/** @type {__VLS_StyleScopedClasses['border-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['ease-in-out']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:scale-110']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-[0_0_15px_4px_rgba(0,255,255,0.6)]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:border-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-black/50']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['animate-bounce']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['top-2']} */ ;
/** @type {__VLS_StyleScopedClasses['right-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-red-700']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gradient-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-10']} */ ;
/** @type {__VLS_StyleScopedClasses['z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:border']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:border-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['-top-4']} */ ;
/** @type {__VLS_StyleScopedClasses['left-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gradient-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-md']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['text-justify']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Shape: Shape,
            ContactForm: ContactForm,
            userProfile: userProfile,
            avatarOffset: avatarOffset,
            isValidImage: isValidImage,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
