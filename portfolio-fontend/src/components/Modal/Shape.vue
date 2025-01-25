<template>
    <div class="min-h-screen w-full">
        <!-- Main container -->
        <div class="container mx-auto">
            <!-- Three.js canvas container -->
            <div class="w-full max-w-[400px] mx-auto pt-8">
                <div ref="threeCanvas" class="w-full aspect-square"></div>
            </div>

            <!-- Profile content -->
            <div class="px-4 pb-8 w-full">
                <div class="rounded-lg shadow-lg p-6 max-w-md w-full mx-auto backdrop-blur-sm">
                    <h2 class="text-2xl font-bold text-primary mb-4">About Me</h2>

                    <div v-if="loading" class="text-center">
                        <p class="text-secondary">Loading...</p>
                    </div>

                    <div v-else-if="userDetails" class="space-y-2">
                        <p class="flex flex-col sm:flex-row sm:gap-2">
                            <strong class="text-primary min-w-[100px]">Nickname:</strong>
                            <span class="text-secondary">{{ userDetails.nickname }}</span>
                        </p>
                        <p class="flex flex-col sm:flex-row sm:gap-2">
                            <strong class="text-primary min-w-[100px]">Birthday:</strong>
                            <span class="text-secondary">{{ userDetails.birthday }}</span>
                        </p>
                        <p class="flex flex-col sm:flex-row sm:gap-2">
                            <strong class="text-primary min-w-[100px]">School:</strong>
                            <span class="text-secondary">{{ userDetails.school }}</span>
                        </p>
                        <p class="flex flex-col sm:flex-row sm:gap-2">
                            <strong class="text-primary min-w-[100px]">Status:</strong>
                            <span class="text-secondary">{{ userDetails.status }}</span>
                        </p>
                        <p class="flex flex-col sm:flex-row sm:gap-2">
                            <strong class="text-primary min-w-[100px]">Description:</strong>
                            <span class="text-secondary">{{ userDetails.description }}</span>
                        </p>
                        <p class="flex flex-col sm:flex-row sm:gap-2">
                            <strong class="text-primary min-w-[100px]">Portfolio:</strong>
                            <a :href="userDetails.portfolio_link" target="_blank" rel="noopener noreferrer"
                                class="text-secondary underline hover:text-primary transition-colors">
                                {{ userDetails.portfolio_link }}
                            </a>
                        </p>
                    </div>

                    <div v-else>
                        <p class="text-secondary">No user details found.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import * as THREE from "three";
import axios from "axios";

const threeCanvas = ref(null);
const userDetails = ref(null);
const loading = ref(true);

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

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create sphere
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({
        color: 0x759abe,
        wireframe: true
    });
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Set camera position
    camera.position.z = 3;

    // Start animation
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
    initThree();
    window.addEventListener("resize", handleResize);
    fetchUserDetails();
});

onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
    if (renderer && threeCanvas.value) {
        threeCanvas.value.removeChild(renderer.domElement);
        renderer.dispose();
    }
});
</script>