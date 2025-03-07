/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { onMounted, ref, onUnmounted } from "vue";
import * as THREE from "three";
const threeCanvas = ref(null);
let scene, camera, renderer, sphere;
const initThree = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    setResponsiveSize();
    threeCanvas.value?.appendChild(renderer.domElement);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({
        color: 0x759abe,
        wireframe: true
    });
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    camera.position.z = 3;
    animate();
};
const animate = () => {
    requestAnimationFrame(animate);
    if (sphere) {
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
    }
    renderer?.render(scene, camera);
};
const setResponsiveSize = () => {
    const container = threeCanvas.value;
    if (container && renderer) {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }
};
const handleResize = () => {
    setResponsiveSize();
};
onMounted(() => {
    initThree();
    window.addEventListener("resize", handleResize);
});
onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
    if (renderer && threeCanvas.value) {
        threeCanvas.value.removeChild(renderer.domElement);
        renderer.dispose();
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "w-full" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "container mx-auto" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "w-full max-w-[400px] max-h-[256px] mx-auto pt-8" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ref: "threeCanvas",
    ...{ class: "w-full aspect-square" },
});
/** @type {typeof __VLS_ctx.threeCanvas} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-[400px]']} */ ;
/** @type {__VLS_StyleScopedClasses['max-h-[256px]']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-8']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['aspect-square']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            threeCanvas: threeCanvas,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
