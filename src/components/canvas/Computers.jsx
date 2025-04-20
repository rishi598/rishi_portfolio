// import React,  { Suspense, useEffect, useState } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, Preload, useGLTF } from '@react-three/drei'


// import CanvasLoader from '../Loader'

// const Computers = () => {
// const computer = useGLTF('./desktop_pc/scene.gltf')

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15}  />
//       <pointLight intensity={1}/>
//       <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} />
//       <primitive object={computer.scene} scale={0.75} position={[0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
//     </mesh>
//   )
// }

// const ComputersCanvas = () => {
//   return (
//     <Canvas frameloop="demand" shadows camera={{ position: [20,3,5], fov:25 }} gl={{preserveDrawingBuffer: true}}>
//         <Suspense fallback={<CanvasLoader/>}>
//         <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
//         <Computers/>
//       </Suspense>

//       <Preload all/>
//     </Canvas>
//   )
// }
// export default Computers


import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

import CanvasLoader from '../Loader'

const RawGLTFScene = ({  }) => {
  const { scene } = useThree()
  const mixer = useRef(null)

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load('/desktop_pc/scene.gltf', (gltf) => {
      const model = gltf.scene
     model.scale.set(0.65, 0.65, 0.65)
    model.position.set(0, -3.25, -1.5)

      model.rotation.set(-0.01, -0.2, -0.1)
      scene.add(model)

      if(gltf.animations && gltf.animations.length > 0){
        mixer.current = new THREE.AnimationMixer(model)
        gltf.animations.forEach((clip) => {
          const action = mixer.current.clipAction(clip)
          action.play()
        })
      }
    })
  }, [scene])

  useFrame((_, delta) => {
    mixer.current?.update(delta)
  })

  return null
}

const ComputersCanvas = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia('(max-width: 500px)');

  //   setIsMobile(mediaQuery.matches);

  //   const handleMediaQueryChange = (event) => {
  //     setIsMobile(event.matches);
  //   }

  //   mediaQuery.addEventListener('change', handleMediaQueryChange);

  //   return () => {
  //     mediaQuery.removeEventListener('change', handleMediaQueryChange);
  //   }

  // }, [])
  return (
    <Canvas 
    frameloop='demand'
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.3}/>
        <directionalLight 
        intensity={0.8}
        position={[5, 5, 5]}
        castShadow
        />

        <RawGLTFScene />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas