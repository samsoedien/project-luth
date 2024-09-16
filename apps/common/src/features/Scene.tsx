import {
  Stage,
  OrbitControls,
  PresentationControls,
  MeshReflectorMaterial,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

import { button, Leva, useControls } from 'leva'
import { Suspense, useState } from 'react'

import * as THREE from 'three'
import LuthGuitar, { GLTFResult } from '../_generated/LuthGuitar'

import withMeshModifier, { CombinedConfig, GroupVisibilityConfig } from './withMeshModifier'
import { useConfigurationStore } from '../store/store'

export default function Scene() {
  const isDebug = true

  const meshVisibilityConfig = useConfigurationStore((state) => state.meshVisibilityConfig)

  console.log(meshVisibilityConfig)

  // const [configuration, setConfiguration] = useState<IConfiguration>({
  //   cutaway: ECutawayOption.NONE,
  //   armBevel: false,
  // })

  const groupVisibilityConfig: GroupVisibilityConfig = {
    Soundboard: true, // Show this group
    Sides: true, // Hide this group
  }

  const combinedConfig: CombinedConfig = {
    meshVisibilityConfig,
    groupVisibilityConfig,
  }

  // const ModelWithVisibility = withMeshVisibilyarn commity(LuthGuitar, visibilityConfig)
  const LuthModel = withMeshModifier(LuthGuitar, combinedConfig)

  // const [{ bodyShape, cutaway, armBevel }, set] = useControls('Configuration', () => ({
  //   bodyShape: EBodyShape.DREADNOUGHT,
  //   cutaway: ECutawayOption.NONE,
  //   armBevel: false,
  //   reset: button(() =>
  //     set({ bodyShape: EBodyShape.DREADNOUGHT, cutaway: ECutawayOption.NONE, armBevel: false }),
  //   ),
  // }))

  return (
    <>
      {/* <Leva hidden={!isDebug} /> */}
      <Canvas>
        {/* <PresentationControls speed={2}> */}
        <Stage>
          {isDebug && <Perf position="top-left" />}

          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 20]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          {/* <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}

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
        {/* <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[200, 200]} />
          <MeshReflectorMaterial
            mirror={1}
            blur={[300, 300]}
            roughness={1}
            resolution={2048}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            metalness={0.5}
            depthScale={1.2}
            color="#101010"
          />
        </mesh> */}
        {/* </PresentationControls> */}
      </Canvas>
    </>
  )
}
