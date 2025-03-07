/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, onMounted, onUnmounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
const threeContainer = ref(null);
let camera, scene, renderer, bulbLight, bulbMat, hemiLight;
let ballMat, cubeMat, floorMat;
let previousShadowMap = false;
const initScene = () => {
    const container = threeContainer.value;
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(-4, 2, 4);
    scene = new THREE.Scene();
    const bulbGeometry = new THREE.SphereGeometry(0.02, 16, 8);
    bulbLight = new THREE.PointLight(0xffee88, 1, 100, 2);
    bulbMat = new THREE.MeshStandardMaterial({
        emissive: 0xffffee,
        emissiveIntensity: 1,
        color: 0x000000,
    });
    bulbLight.add(new THREE.Mesh(bulbGeometry, bulbMat));
    bulbLight.position.set(0, 2, 0);
    bulbLight.castShadow = true;
    scene.add(bulbLight);
    hemiLight = new THREE.HemisphereLight(0xddeeff, 0x0f0e0d, 0.02);
    scene.add(hemiLight);
    floorMat = new THREE.MeshStandardMaterial({ roughness: 0.8, color: 0xffffff, metalness: 0.2 });
    const floorGeometry = new THREE.PlaneGeometry(20, 20);
    const floorMesh = new THREE.Mesh(floorGeometry, floorMat);
    floorMesh.receiveShadow = true;
    floorMesh.rotation.x = -Math.PI / 2.0;
    scene.add(floorMesh);
    ballMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, metalness: 1.0 });
    const ballGeometry = new THREE.SphereGeometry(0.25, 32, 32);
    const ballMesh = new THREE.Mesh(ballGeometry, ballMat);
    ballMesh.position.set(1, 0.25, 1);
    ballMesh.castShadow = true;
    scene.add(ballMesh);
    cubeMat = new THREE.MeshStandardMaterial({ roughness: 0.7, color: 0xffffff, metalness: 0.2 });
    const boxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const boxMesh = new THREE.Mesh(boxGeometry, cubeMat);
    boxMesh.position.set(-0.5, 0.25, -1);
    boxMesh.castShadow = true;
    scene.add(boxMesh);
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ReinhardToneMapping;
    container.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 1;
    controls.maxDistance = 20;
    const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize);
    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };
    animate();
};
onMounted(() => {
    initScene();
});
onUnmounted(() => {
    // Clean up resources
    while (threeContainer.value.firstChild) {
        threeContainer.value.removeChild(threeContainer.value.firstChild);
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fixed inset-0 flex items-center justify-center bg-gray-900" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "relative w-full h-full" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ref: "threeContainer",
    ...{ class: "absolute inset-0" },
});
/** @type {typeof __VLS_ctx.threeContainer} */ ;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "absolute bottom-4 left-4 text-white text-sm space-y-1" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://threejs.org",
    target: "_blank",
    rel: "noopener",
    ...{ class: "underline" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "http://clara.io",
    target: "_blank",
    rel: "noopener",
    ...{ class: "underline" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-4']} */ ;
/** @type {__VLS_StyleScopedClasses['left-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-1']} */ ;
/** @type {__VLS_StyleScopedClasses['underline']} */ ;
/** @type {__VLS_StyleScopedClasses['underline']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            threeContainer: threeContainer,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
