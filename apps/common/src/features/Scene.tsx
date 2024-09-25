import {
  Stage,
  OrbitControls,
  PresentationControls,
  MeshReflectorMaterial,
  Preload,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

import { Suspense, useState } from 'react'

import LuthDreadnaughtAcoustic from '../_generated/LuthAcousticDreadnaught'
import LuthParlorAcoustic from '../_generated/LuthAcousticParlor'

import withMeshConfiguration from '../components/withMeshConfiguration'
import { useConfigurationStore } from '../store/store'
import Lights from './Lights'

export default function Scene() {
  const isDebug = true

  const configuration = useConfigurationStore((state) => state.configuration)

  const LuthModel = withMeshConfiguration(LuthDreadnaughtAcoustic, configuration)
  // const LuthModel = withMeshConfiguration(LuthParlorAcoustic, configuration)

  return (
    <>
      <Canvas>
        <Stage>
          {isDebug && <Perf position="top-left" />}
          <Lights />
          <Suspense fallback={null}>
            <LuthModel position={[0, 0, 0]} />
            {/* <Instances>
              <LuthDreadnaughtAcoustic position={[0, 0, 0]} />
            </Instances> */}
            {/* <Instances visible={false}>
              <LuthDreadnaughtAcoustic />
            </Instances> */}
            {/* <Preload all /> */}
          </Suspense>
          <OrbitControls />
        </Stage>
      </Canvas>
    </>
  )
}
