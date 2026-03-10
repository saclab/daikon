import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

const proteins = [
  { name: "FtsZ", x: 45, y: 88, z: 50 },
  { name: "Pks13", x: 30, y: 78, z: 35 },
  { name: "RibF", x: 40, y: 76, z: 45 },
  { name: "Mdh", x: 55, y: 75, z: 50 },
  { name: "SecY", x: 42, y: 65, z: 40 },
  { name: "GyrAB", x: 10, y: 73, z: 15 },
  { name: "NadE", x: 80, y: 62, z: 70 },
  { name: "MenG", x: 65, y: 48, z: 60 },
  { name: "MmpL3", x: 68, y: 42, z: 65 },
  { name: "RpoB", x: 38, y: 38, z: 30 },
];

// Normalize to -1.5 to 1.5 range for good spread
const normalize = (val: number, min: number, max: number) =>
  ((val - min) / (max - min)) * 3 - 1.5;

const xMin = 0, xMax = 100;
const yMin = 0, yMax = 100;
const zMin = 0, zMax = 100;

function GridPlanes() {
  const size = 3.5;
  const divisions = 6;
  const color1 = "#ffffff";
  const color2 = "#ffffff";
  return (
    <group position={[0, 0, 0]}>
      {/* Floor */}
      <gridHelper args={[size, divisions, color1, color2]} material-opacity={0.12} material-transparent />
      {/* Back wall */}
      <group rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -size / 2]}>
        <gridHelper args={[size, divisions, color1, color2]} material-opacity={0.08} material-transparent />
      </group>
      {/* Left wall */}
      <group rotation={[0, 0, Math.PI / 2]} position={[-size / 2, 0, 0]}>
        <gridHelper args={[size, divisions, color1, color2]} material-opacity={0.08} material-transparent />
      </group>
    </group>
  );
}

function AxisLabels() {
  return (
    <group>
      <Text position={[0, -0.3, 2.2]} fontSize={0.15} color="rgba(255,255,255,0.7)" anchorX="center">
        Genetic Inactivation
      </Text>
      <Text position={[2.2, -0.3, 0]} fontSize={0.15} color="rgba(255,255,255,0.7)" anchorX="center" rotation={[0, -Math.PI / 2, 0]}>
        Chemical Inactivation
      </Text>
      <Text position={[-2, 0, -1.75]} fontSize={0.15} color="rgba(255,255,255,0.7)" anchorX="center" rotation={[0, 0, Math.PI / 2]}>
        Feasibility
      </Text>
    </group>
  );
}

function DataPoints() {
  return (
    <group>
      {proteins.map((p) => {
        const px = normalize(p.x, xMin, xMax);
        const py = normalize(p.y, yMin, yMax);
        const pz = normalize(p.z, zMin, zMax);
        return (
          <group key={p.name} position={[px, py, pz]}>
            <mesh>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial color="#f0c24a" emissive="#f0c24a" emissiveIntensity={0.5} />
            </mesh>
            <Text
              position={[0, 0.16, 0]}
              fontSize={0.12}
              color="#ffffff"
              fontWeight={700}
              anchorX="center"
              anchorY="bottom"
            >
              {p.name}
            </Text>
          </group>
        );
      })}
    </group>
  );
}

const ProteinScatterChart = () => {
  return (
    <Canvas
      camera={{ position: [4, 3, 4], fov: 35, near: 0.1 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 5]} intensity={0.8} />
      <GridPlanes />
      <AxisLabels />
      <DataPoints />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        target={[0, 0, 0]}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.5}
      />
    </Canvas>
  );
};

export default ProteinScatterChart;
