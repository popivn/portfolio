/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import ExperienceSection from './ExperienceSection.vue';
import htmlcssImage from '@/assets/images/htmlcss.png';
import laravelImage from '@/assets/images/laravel.png';
import mysqlImage from '@/assets/images/mysql.png';
import phpImage from '@/assets/images/php.png';
import tailwindImage from '@/assets/images/tailwind.png';
import vueImage from '@/assets/images/vue.png';
const experiences = [
    {
        name: 'HTML & CSS',
        image: htmlcssImage,
        level: 'I am familiar with HTML and CSS, and have used them to create basic responsive layouts and simple designs.'
    },
    {
        name: 'Laravel',
        image: laravelImage,
        level: 'I have experience with Laravel, primarily focusing on building simple web applications and working with routing and database management.'
    },
    {
        name: 'MySQL',
        image: mysqlImage,
        level: 'I have worked with MySQL databases for basic tasks, including creating simple queries and managing data.'
    },
    {
        name: 'PHP',
        image: phpImage,
        level: 'I have used PHP in several projects, mostly focusing on backend development and creating basic API endpoints.'
    },
    {
        name: 'Tailwind CSS',
        image: tailwindImage,
        level: 'I have explored Tailwind CSS and used it in building responsive user interfaces with simple styling.'
    },
    {
        name: 'Vue.js',
        image: vueImage,
        level: 'I have worked with Vue.js on a few small projects, focusing on understanding the basics of component-based architecture and simple data binding.'
    }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    id: "app",
    ...{ class: "gradient-primary  py-12 px-4 sm:px-6 lg:px-8" },
});
/** @type {[typeof ExperienceSection, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(ExperienceSection, new ExperienceSection({
    experiences: (__VLS_ctx.experiences),
}));
const __VLS_1 = __VLS_0({
    experiences: (__VLS_ctx.experiences),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {__VLS_StyleScopedClasses['gradient-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['py-12']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-8']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ExperienceSection: ExperienceSection,
            experiences: experiences,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
