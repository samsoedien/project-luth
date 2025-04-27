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
// import LuthParlorAcoustic from '../_generated/LuthAcousticParlor'

import withMeshConfiguration from '../components/withMeshConfiguration'
import Lights from './Lights'

import Sides from '../_generated/Sides'
import Soundboard from '../_generated/LuthSoundboard'

import { useConfigurationStore } from '~/store/store'
import UVHelper from '~/helpers/uvHelper'

const LuthModel = withMeshConfiguration(LuthDreadnaughtAcoustic)
// const LuthModel = withMeshConfiguration(LuthAcousticBlender)

export default function Scene() {
  const isDebug = true

  const controls = useConfigurationStore((state) => state.controls)

  return (
    <Canvas>
      {isDebug && <Perf position="top-left" />}
      <Stage adjustCamera={false}>
        {/* <Lights /> */}
        <PresentationControls
          enabled={true} // the controls can be disabled by setting this to false
          global={true} // Spin globally or by dragging the model
          cursor={false} // Whether to toggle cursor style on drag
          speed={2} // Speed factor
          {...controls}
        >
          {/* <ScrollControls pages={3} damping={0.1} horizontal> */}

          {/* <EffectComposer> */}
          {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
          {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} /> */}
          {/* <Noise opacity={0.02} /> */}
          {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
          {/* </EffectComposer> */}

          <Suspense fallback={null}>
            {/* <Scroll> */}
            {/* <Sides /> */}
            <Soundboard />
            {/* <LuthModel position={[0, 0, 0]} /> */}
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
