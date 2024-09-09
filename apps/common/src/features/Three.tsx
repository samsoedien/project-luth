import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { OrbitControls, Stage, useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'

import { Model } from '../_generated/LuthGuitar'

import register from 'preact-custom-element'

function Box(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((_state, delta) => (meshRef.current.rotation.x += delta))
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(_event) => setActive(!active)}
      onPointerOver={(_event) => setHover(true)}
      onPointerOut={(_event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function ThreeComponent() {
  return (
    <Canvas>
      <Stage>
        <Perf />

        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        {/* <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} /> */}
        <Guitar />
        <OrbitControls />
      </Stage>
    </Canvas>
  )
}

const Guitar = () => {
  const meshGuitarRef = useRef<THREE.Mesh>(null!)
  useHelper(meshGuitarRef, THREE.BoxHelper, 'cyan')

  return <Model ref={meshGuitarRef} />
}

register(ThreeComponent, 'three-component', [], { shadow: true })
