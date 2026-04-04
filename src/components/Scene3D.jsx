import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  Float,
  Environment,
  TorusKnot,
  Lightformer,
  ContactShadows,
} from "@react-three/drei";

function AbstractShape() {
  const meshRef = useRef();

  // Create a target vector for smooth mouse tracking interpolation
  const targetRotation = useRef(new THREE.Vector2(0, 0));

  useFrame((state, delta) => {
    // Continuous base rotation
    const time = state.clock.getElapsedTime();

    // Lerp (smoothly interpolate) current pointer to target rotation
    targetRotation.current.x = THREE.MathUtils.lerp(
      targetRotation.current.x,
      (state.pointer.y * Math.PI) / 4,
      0.05,
    );
    targetRotation.current.y = THREE.MathUtils.lerp(
      targetRotation.current.y,
      (state.pointer.x * Math.PI) / 4,
      0.05,
    );

    // Combine time-based spinning with mouse-tracking interactivity
    meshRef.current.rotation.x = time * 0.1 + targetRotation.current.x;
    meshRef.current.rotation.y = time * 0.15 + targetRotation.current.y;
    meshRef.current.rotation.z = time * 0.05;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[-0.2, 0.2]}
    >
      {/* Restauramos la geometría más suave (256x64) ahora que está protegida contra crashes */}
      <TorusKnot ref={meshRef} args={[1.2, 0.38, 256, 64]}>
        {/* Restauramos el material Physical basado en PBR hiper-realista */}
        <meshPhysicalMaterial
          color="#050505"
          metalness={0.9}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={3}
          ior={1.5}
          thickness={2.0}
        />
      </TorusKnot>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full relative" style={{ pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: "auto", background: "transparent" }}
      >
        {/* --- Iluminación dramática adaptada a fondo transparente --- */}
        <ambientLight intensity={0.3} />

        {/* Luz principal blanca y crujiente */}
        <directionalLight
          position={[10, 15, 10]}
          intensity={4}
          color="#ffffff"
        />

        {/* Luz roja fuerte para perfilar y empastar con el portafolio */}
        <spotLight
          position={[-10, 0, 5]}
          intensity={12}
          color="#ef4444"
          angle={0.8}
          penumbra={1}
          distance={40}
        />

        {/* Luz de relleno roja oscura */}
        <directionalLight
          position={[10, -10, -10]}
          intensity={3}
          color="#991b1b"
        />

        {/* El objeto 3D masivo e interactivo */}
        <AbstractShape />

        {/* Reflexiones de alto contraste (preset city) de vuelta y aseguradas gracias a Suspense */}
        <Suspense fallback={null}>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
