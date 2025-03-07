/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import PostTimeline from './PostTimeline.vue';
import { reactive } from 'vue';
const posts = reactive([
    { time: '2025-02-01', title: 'Understanding Vue 3', description: 'An in-depth guide to Vue 3 reactivity system.', author: 'John Doe' },
    { time: '2025-02-02', title: 'CSS Grid vs Flexbox', description: 'Comparing two popular CSS layout techniques.', author: 'Jane Smith' },
    { time: '2025-02-03', title: 'JavaScript Async Patterns', description: 'Exploring promises, async/await, and event loops.', author: 'Alice Johnson' },
    { time: '2025-02-04', title: 'Building RESTful APIs', description: 'A beginner-friendly introduction to REST API design.', author: 'Bob Brown' }
]);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {[typeof PostTimeline, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(PostTimeline, new PostTimeline({
    posts: (__VLS_ctx.posts),
}));
const __VLS_1 = __VLS_0({
    posts: (__VLS_ctx.posts),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
var __VLS_3 = {};
var __VLS_2;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            PostTimeline: PostTimeline,
            posts: posts,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
