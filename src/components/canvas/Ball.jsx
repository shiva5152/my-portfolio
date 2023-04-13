import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal,Float,OrbitControls,Preload,useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = ({imgUrl}) => {
  const img=useTexture(imgUrl);

  return (
    <>
    <Float speed={1.75} floatIntensity={2} > {/* to Float or to give floating effect the balls */}
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]} />
      <mesh scale={2.75}>
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial 
          color={"#fff8eb"}
          polygonOffset // a small offset is applied to the material to prevent z-fighting.
          polygonOffsetFactor={-5} // A negative value is used to push the material back, away from the camera, to prevent z-fighting.
          flatShading
          
         />
         <Decal position={[0,0,1]} map={img}  rotation={[2*Math.PI,0,6.25]} flatShading/>  {/* <Decal-> to place the texture more efficiently->if you try to use map directly to meterial it will cover the whole ball   */}
      </mesh>

     </Float>
    
    </>
  )
}

const BallCanvas =({icon})=>{

  return (
    <Canvas frameloop='demand' gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls  enableZoom={false}/>
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default BallCanvas