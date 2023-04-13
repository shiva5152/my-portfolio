import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";
import * as random from "maath/random/dist/maath-random.esm";


const Stars = (props) => {
  const ref = useRef();
  // const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));
  const [sphere] = useState(() => random.inSphere(new Float32Array(1000), { radius: 1.2 }).filter(value => !isNaN(value)));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 12;
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <group rotation={props.istech? [0, 0, Math.PI / 2]:[0, 0, -Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={props.istech?0.0031: 0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = ({istech}) => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars istech={istech} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;