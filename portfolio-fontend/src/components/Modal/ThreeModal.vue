<template>
    <div class="fixed inset-0 flex items-center justify-center bg-gray-900">
      <div class="relative w-full h-full">
        <div ref="threeContainer" class="absolute inset-0"></div>
      </div>
      <div class="absolute bottom-4 left-4 text-white text-sm space-y-1">
        <p>
          <a href="https://threejs.org" target="_blank" rel="noopener" class="underline">three.js</a>
          - Physically accurate incandescent bulb by
          <a href="http://clara.io" target="_blank" rel="noopener" class="underline">Ben Houston</a>
        </p>
        <p>Real world scale: Brick cube is 50 cm in size. Globe is 50 cm in diameter.</p>
        <p>Reinhard inline tonemapping with real-world light falloff (decay = 2).</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  import * as THREE from "three";
  import { OrbitControls } from "three/addons/controls/OrbitControls.js";
  
  const threeContainer = ref(null);
  
  let camera, scene, renderer, bulbLight, bulbMat, hemiLight;
  let ballMat, cubeMat, floorMat;
  let previousShadowMap = false;
  
  const initScene = () => {
    const container = threeContainer.value;
  
    // Initialize Camera
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(-4, 2, 4);
  
    // Initialize Scene
    scene = new THREE.Scene();
  
    // Light Sources
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
  
    // Floor Material
    floorMat = new THREE.MeshStandardMaterial({ roughness: 0.8, color: 0xffffff, metalness: 0.2 });
    const floorGeometry = new THREE.PlaneGeometry(20, 20);
    const floorMesh = new THREE.Mesh(floorGeometry, floorMat);
    floorMesh.receiveShadow = true;
    floorMesh.rotation.x = -Math.PI / 2.0;
    scene.add(floorMesh);
  
    // Ball Material
    ballMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, metalness: 1.0 });
    const ballGeometry = new THREE.SphereGeometry(0.25, 32, 32);
    const ballMesh = new THREE.Mesh(ballGeometry, ballMat);
    ballMesh.position.set(1, 0.25, 1);
    ballMesh.castShadow = true;
    scene.add(ballMesh);
  
    // Cube Material
    cubeMat = new THREE.MeshStandardMaterial({ roughness: 0.7, color: 0xffffff, metalness: 0.2 });
    const boxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const boxMesh = new THREE.Mesh(boxGeometry, cubeMat);
    boxMesh.position.set(-0.5, 0.25, -1);
    boxMesh.castShadow = true;
    scene.add(boxMesh);
  
    // Renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ReinhardToneMapping;
  
    // Append Renderer
    container.appendChild(renderer.domElement);
  
    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 1;
    controls.maxDistance = 20;
  
    // Window Resize
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
  </script>
  
  <style scoped>
  .fixed {
    position: fixed;
    inset: 0;
  }
  .bg-gray-900 {
    background-color: #1a202c;
  }
  </style>
  