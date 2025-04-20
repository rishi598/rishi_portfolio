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
    loader.load('/planet/scene.gltf', (gltf) => {
      const model = gltf.scene
     model.scale.set(2.5, 2.5, 2.5)
    model.position.set(0, 0, -0)

      model.rotation.set(-0.01, 0, -0.1)
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

const Earth = () => {
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
    camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far:200 }}
    gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        autoRotate
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

export default Earth