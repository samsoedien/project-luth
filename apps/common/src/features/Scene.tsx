import { Stage, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import withConfiguration, { EBodyShape, ECutawayOption, IConfiguration } from './LuthModel'

import { button, Leva, useControls } from 'leva'
import { Suspense, useState } from 'react'

import * as THREE from 'three'
import LuthGuitar, { GLTFResult } from '../_generated/LuthGuitar'

import { meshVisibilityConfig } from './meshConfig'
import withMeshModifier, { IWithMeshModifierProps } from './withMeshModifier'

export default function Scene() {
  const isDebug = true

  const [configuration, setConfiguration] = useState<IConfiguration>({
    cutaway: ECutawayOption.NONE,
    armBevel: false,
  })

  // const ModelWithVisibility = withMeshVisibilyarn commity(LuthGuitar, visibilityConfig)
  const LuthModel = withMeshModifier(LuthGuitar, meshVisibilityConfig)

  const { wireframe } = useControls('Base', {
    wireframe: false,
    myNumber: 4,
    color: { value: '#ffffffff', render: (get) => get('check') && get('myNumber') > 5 },
  })

  const [{ bodyShape, cutaway, armBevel }, set] = useControls('Configuration', () => ({
    bodyShape: EBodyShape.DREADNOUGHT,
    cutaway: ECutawayOption.NONE,
    armBevel: false,
    reset: button(() =>
      set({ bodyShape: EBodyShape.DREADNOUGHT, cutaway: ECutawayOption.NONE, armBevel: false }),
    ),
  }))

  return (
    <>
      <Leva hidden={!isDebug} />
      <Canvas>
        <Stage>
          {isDebug && <Perf position="top-left" />}

          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

          <Suspense
            fallback={
              <mesh>
                <boxGeometry />
              </mesh>
            }
          >
            <LuthModel scale={1} />
          </Suspense>
          <OrbitControls />
        </Stage>
      </Canvas>
    </>
  )
}
