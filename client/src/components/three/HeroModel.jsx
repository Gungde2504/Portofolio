import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

export default function HeroModel() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} />
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <meshStandardMaterial color="#2563EB" />
        </mesh>
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
