import React, {
  Suspense,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Decal, Float, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { technologies } from "../../constants";

// Must match the Tailwind values the layout used to use (w-28/h-28 and gap-10)
// now that positions are computed in JS instead of via flex-wrap.
const ITEM_SIZE = 112;
const GAP = 40;
const LABEL_HEIGHT = 34;

// Reproduces flex-wrap + justify-center: fills each row left-to-right, then
// centers whichever row (usually the last) doesn't fill every column.
function computeLayout(containerWidth) {
  const count = technologies.length;
  const columns = Math.max(
    1,
    Math.min(count, Math.floor((containerWidth + GAP) / (ITEM_SIZE + GAP)))
  );
  const rows = Math.ceil(count / columns);
  const gridWidth = columns * ITEM_SIZE + (columns - 1) * GAP;

  const positions = technologies.map((_, i) => {
    const row = Math.floor(i / columns);
    const rowStart = row * columns;
    const itemsInRow = Math.min(columns, count - rowStart);
    const col = i - rowStart;

    const rowWidth = itemsInRow * ITEM_SIZE + (itemsInRow - 1) * GAP;
    const x = -rowWidth / 2 + col * (ITEM_SIZE + GAP) + ITEM_SIZE / 2;
    const y = row * (ITEM_SIZE + GAP + LABEL_HEIGHT);

    return { x, y };
  });

  const height = rows * ITEM_SIZE + (rows - 1) * (GAP + LABEL_HEIGHT);

  return { columns, rows, gridWidth, height, positions };
}

// A single shared WebGL context can't be pixel-matched to CSS layout with the
// default perspective camera, so this swaps in an orthographic one where one
// three.js unit equals one screen pixel — that's what lets the icosahedrons
// line up with the plain-HTML labels beneath them.
const PixelPerfectCamera = () => {
  const { camera, size } = useThree();

  useEffect(() => {
    camera.left = size.width / -2;
    camera.right = size.width / 2;
    camera.top = size.height / 2;
    camera.bottom = size.height / -2;
    camera.near = 0.1;
    camera.far = 1000;
    camera.zoom = 1;
    camera.position.set(0, 0, 100);
    camera.updateProjectionMatrix();
  }, [camera, size]);

  return null;
};

const TechBall = ({ x, y, decal, phase }) => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.position.y = y + Math.sin(clock.getElapsedTime() + phase) * 4;
  });

  return (
    <group ref={groupRef} position={[x, y, 0]}>
      <Float speed={1.75} rotationIntensity={1} floatIntensity={0}>
        <mesh scale={ITEM_SIZE / 2.9}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color='#fff8eb'
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>
      </Float>
    </group>
  );
};

const TechScene = ({ layout }) => {
  const decals = useTexture(technologies.map((tech) => tech.icon));

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1.1} />
      <pointLight position={[-2, -1, -2]} intensity={0.6} color='#915EFF' />
      {layout.positions.map((pos, i) => (
        <TechBall
          key={technologies[i].name}
          x={pos.x}
          y={layout.height / 2 - pos.y - ITEM_SIZE / 2}
          decal={decals[i]}
          phase={i}
        />
      ))}
    </>
  );
};

// Renders every tech-stack icon inside ONE canvas/WebGL context instead of one
// per icon. Browsers cap simultaneous WebGL contexts (Chrome: 16); with the
// Hero PC, Earth and Stars canvases also on the page, 17 separate ball
// canvases pushed the page over that cap, silently killing the oldest
// contexts — which is why the PC (and the first few tech icons) stopped
// rendering.
const TechCanvas = () => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;

    const measure = () => setWidth(node.getBoundingClientRect().width);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(node);
    // Belt-and-braces alongside ResizeObserver: keeps the grid correct even
    // in environments where ResizeObserver callbacks don't fire.
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const layout = useMemo(() => computeLayout(width || 1), [width]);

  return (
    <div ref={containerRef} className='w-full flex justify-center'>
      <div
        className='relative'
        style={{ width: layout.gridWidth, height: layout.height }}
      >
        {width > 0 && (
          <Canvas
            orthographic
            gl={{ preserveDrawingBuffer: true, alpha: true }}
            style={{ touchAction: "none" }}
          >
            <PixelPerfectCamera />
            <Suspense fallback={<CanvasLoader />}>
              <TechScene layout={layout} />
            </Suspense>
            <Preload all />
          </Canvas>
        )}

        {technologies.map((technology, i) => {
          const pos = layout.positions[i];
          return (
            <p
              key={technology.name}
              className='absolute text-secondary text-[13px] text-center pointer-events-none'
              style={{
                left: layout.gridWidth / 2 + pos.x - ITEM_SIZE / 2,
                top: pos.y + ITEM_SIZE,
                width: ITEM_SIZE,
              }}
            >
              {technology.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default TechCanvas;
