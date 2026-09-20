"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export function ModelViewer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.NoToneMapping;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(2, 3, 4);
    scene.add(dirLight);
    const backLight = new THREE.DirectionalLight(0xffffff, 0.8);
    backLight.position.set(-2, -1, -3);
    scene.add(backLight);

    let model: THREE.Group | null = null;
    const loader = new GLTFLoader();
    loader.load("/model.glb", (gltf) => {
      model = gltf.scene;
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 3 / maxDim;
      model.scale.setScalar(scale);
      const center = box.getCenter(new THREE.Vector3());
      model.position.sub(center.multiplyScalar(scale));

      model.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.material = new THREE.MeshStandardMaterial({
            color: 0xcccccc,
            metalness: 0.6,
            roughness: 0.3,
          });
        }
      });

      scene.add(model);
    });

    let scrollY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onScroll = () => { scrollY = window.scrollY; };
    const onMouse = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouse, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    const animate = () => {
      requestAnimationFrame(animate);

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      if (model) {
        model.rotation.y = scrollY * 0.002 + mouseX * 0.3;
        model.rotation.x = Math.sin(scrollY * 0.001) * 0.2 + mouseY * 0.15;
        model.rotation.z = Math.sin(scrollY * 0.0005) * 0.1;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.12,
        filter: "grayscale(1) contrast(1.4)",
        mixBlendMode: "screen",
      }}
    />
  );
}
