/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import Layout from '@/components/Layout/Layout.vue';
import { AboutPage, ProjectsPage, ExperiencePage, PostsPage } from '@/Pages';
const tabs = ['About', 'Experience', 'Projects', 'Posts'];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "bg-gradient-secondary" },
});
/** @type {[typeof Layout, typeof Layout, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Layout, new Layout({
    tabs: (__VLS_ctx.tabs),
}));
const __VLS_1 = __VLS_0({
    tabs: (__VLS_ctx.tabs),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_2.slots.default;
{
    const { default: __VLS_thisSlot } = __VLS_2.slots;
    const [{ activeTab }] = __VLS_getSlotParams(__VLS_thisSlot);
    if (activeTab === 'About') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        const __VLS_3 = {}.AboutPage;
        /** @type {[typeof __VLS_components.AboutPage, ]} */ ;
        // @ts-ignore
        const __VLS_4 = __VLS_asFunctionalComponent(__VLS_3, new __VLS_3({}));
        const __VLS_5 = __VLS_4({}, ...__VLS_functionalComponentArgsRest(__VLS_4));
    }
    if (activeTab === 'Experience') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        const __VLS_7 = {}.ExperiencePage;
        /** @type {[typeof __VLS_components.ExperiencePage, ]} */ ;
        // @ts-ignore
        const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
        const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
    }
    if (activeTab === 'Projects') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        const __VLS_11 = {}.ProjectsPage;
        /** @type {[typeof __VLS_components.ProjectsPage, ]} */ ;
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({}));
        const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
    }
    if (activeTab === 'Posts') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        const __VLS_15 = {}.PostsPage;
        /** @type {[typeof __VLS_components.PostsPage, ]} */ ;
        // @ts-ignore
        const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({}));
        const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
    }
}
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['bg-gradient-secondary']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Layout: Layout,
            AboutPage: AboutPage,
            ProjectsPage: ProjectsPage,
            ExperiencePage: ExperiencePage,
            PostsPage: PostsPage,
            tabs: tabs,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
