import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const BASE_ROTATION = [-0.01, -0.2, -0.1];
const NUDGE_DURATION = 1; // seconds

const Computers = ({ isMobile, nudgeTrigger, nudgeStartRef }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  const groupRef = useRef();
  const { invalidate } = useThree();

  useEffect(() => {
    if (nudgeTrigger) {
      nudgeStartRef.current = performance.now();
      invalidate();
    }
  }, [nudgeTrigger, invalidate, nudgeStartRef]);

  useFrame(() => {
    if (!groupRef.current || nudgeStartRef.current === null) return;

    const elapsed = (performance.now() - nudgeStartRef.current) / 1000;

    if (elapsed < NUDGE_DURATION) {
      const decay = 1 - elapsed / NUDGE_DURATION;
      groupRef.current.rotation.y =
        BASE_ROTATION[1] + Math.sin(elapsed * Math.PI * 5) * 0.09 * decay;
      groupRef.current.rotation.x =
        BASE_ROTATION[0] + Math.sin(elapsed * Math.PI * 3) * 0.02 * decay;
      invalidate();
    } else {
      groupRef.current.rotation.y = BASE_ROTATION[1];
      groupRef.current.rotation.x = BASE_ROTATION[0];
      nudgeStartRef.current = null;
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <group
        ref={groupRef}
        rotation={BASE_ROTATION}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        scale={isMobile ? 0.7 : 0.75}
      >
        <primitive object={computer.scene} />
      </group>
    </mesh>
  );
};

const ComputersCanvas = ({ nudgeTrigger }) => {
  const [isMobile, setIsMobile] = useState(false);
  // Shared with OrbitControls' onStart below: the moment the user grabs the
  // model to rotate it themselves, the auto-nudge must back off immediately
  // rather than fight the drag.
  const nudgeStartRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ touchAction: "none" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          onStart={() => {
            nudgeStartRef.current = null;
          }}
        />
        <Computers
          isMobile={isMobile}
          nudgeTrigger={nudgeTrigger}
          nudgeStartRef={nudgeStartRef}
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
