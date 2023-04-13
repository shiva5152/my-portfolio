import { Suspense,useEffect,useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls,Preload,useGLTF } from "@react-three/drei"
import CanvasLoader from '../Loader'

const Computers = ({isMobile}) => {
  const computer =useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='black' />
      <pointLight intensity={1}  />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1} 
        intensity={1}
        castShadow
        
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.05]}
      />
    </mesh>
  )
}

const ComputerCanvas =()=>{
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  
  return (
    <Canvas 
      frameloop="demand" //This prop determines how often the canvas is redrawn. By default, the canvas is redrawn 60 times per second, but you can set frameloop="demand" to only redraw the canvas when necessary.
      shadows
      camera={{position:[20,3,20],fov:25}}
      gl={{preserveDrawingBuffer:true}} //This property specifies whether the contents of the canvas should be preserved after drawing
    >
      <Suspense fallback={<CanvasLoader/>} >
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2} //prevents y-axis motion
        />
         <Computers  isMobile={isMobile} />
      </Suspense>

      <Preload all />

    </Canvas>
      
  )
}

export default ComputerCanvas