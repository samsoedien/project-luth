import {
  Stage,
  OrbitControls,
  PresentationControls,
  MeshReflectorMaterial,
  Preload,
  Helper,
  PerspectiveCamera,
  Center,
  ScrollControls,
  useScroll,
  Scroll,
  CameraControls,
  Grid,
} from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

import { Suspense, useEffect, useState } from 'react'

import LuthDreadnaughtAcoustic from '../_generated/LuthAcoustic'
import LuthParlorAcoustic from '../_generated/LuthAcousticParlor'

import withMeshConfiguration from '../components/withMeshConfiguration'
import Lights from './Lights'

import { useConfigurationStore } from '~/store/store'

const LuthModel = withMeshConfiguration(LuthDreadnaughtAcoustic)

export default function Scene() {
  const isDebug = true

  const controls = useConfigurationStore((state) => state.controls)

  return (
    <Canvas>
      {isDebug && <Perf position="top-left" />}
      <Stage adjustCamera={false} environment="studio">
        <Lights />
        <PresentationControls
          enabled={true} // the controls can be disabled by setting this to false
          global={true} // Spin globally or by dragging the model
          cursor={false} // Whether to toggle cursor style on drag
          speed={2} // Speed factor
          {...controls}
        >
          {/* <ScrollControls pages={3} damping={0.1} horizontal> */}
          <Suspense fallback={null}>
            {/* <Scroll> */}
            <LuthModel position={[0, 0, 0]} />
            <Preload all />
            {/* </Scroll> */}
          </Suspense>
          {/* </ScrollControls> */}
        </PresentationControls>

        {/* <CameraControls /> */}
        {/* <OrbitControls /> */}
        <PerspectiveCamera makeDefault position={[0, 0, 1]} />
      </Stage>
    </Canvas>
  )
}
