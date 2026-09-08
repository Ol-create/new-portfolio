import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");

  return (
    <>
      <ambientLight intensity={0.5} />
      {/* Key "sun" light so the planet's surface shows real shading, not a flat silhouette */}
      <directionalLight position={[3, 3, 3]} intensity={1.3} color='#ffffff' />
      {/* Purple rim light from the far side for depth and brand consistency */}
      <pointLight position={[-6, -2, -5]} intensity={0.8} color='#915EFF' />
      <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
    </>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      style={{ touchAction: "none" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
