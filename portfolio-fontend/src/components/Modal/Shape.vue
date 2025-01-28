<template>
    <div class="w-full">
        <div class="container mx-auto">
            <div class="w-full max-w-[400px] mx-auto pt-8">
                <div ref="threeCanvas" class="w-full aspect-square"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
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
</script>