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

import { Suspense, useState } from 'react'

import LuthDreadnaughtAcoustic from '../_generated/LuthAcoustic'
import LuthParlorAcoustic from '../_generated/LuthAcousticParlor'

import withMeshConfiguration from '../components/withMeshConfiguration'
import Lights from './Lights'
import { GridHelper } from 'three'
import { ELuthComponent } from '~/models/configuration.model'
import { useStore } from 'zustand'
import { useConfigurationStore } from '~/store/store'

export default function Scene() {
  const isDebug = true

  return (
    <>
      <Canvas>
        {isDebug && <Perf position="top-left" />}
        <Experience />
      </Canvas>
    </>
  )
}

export function Experience() {
  const configuration = useConfigurationStore((state) => state.configuration)

  const controls = useConfigurationStore((state) => state.controls)
  console.log('controls', controls)

  const LuthModel = withMeshConfiguration(LuthDreadnaughtAcoustic, configuration)
  // const LuthModel = withMeshConfiguration(LuthParlorAcoustic, configuration)

  // const scope = useUIStateStore((state) => state.scope)
  const scroll = useScroll()

  // let rotation: [number, number, number] = [0, 0, 0]
  // let zoom = 0.8
  // let cameraPosition: [number, number, number] = [0, 0, 1]
  // let polar: [number, number] | undefined = [-Math.PI / 3, Math.PI / 3]
  // let azimuth: [number, number] | undefined = [-Math.PI / 4, Math.PI / 4]
  // let snap: any = {
  //   mass: 5,
  //   tension: 140,
  // }

  // if (scope === ELuthComponent.Base) {
  //   rotation = [0, 0, 0]
  //   polar = undefined
  //   azimuth = undefined
  //   snap = false
  // }
  // if (scope === ELuthComponent.Soundboard) rotation = [0, 0, 0]
  // if (scope === ELuthComponent.Back) rotation = [0, Math.PI, 0]
  // if (scope === ELuthComponent.Sides) rotation = [-Math.PI / 2.5, 0, -Math.PI / 3.5]
  // if (scope === ELuthComponent.Rosette) {
  //   rotation = [0, 0, 0]
  //   cameraPosition = [0, 0, 0.4]
  //   zoom = 1.5
  // }

  useFrame(() => {
    if (scroll) console.log(scroll)
  })

  return (
    <Stage adjustCamera={false} environment="studio">
      <Lights />
      <PresentationControls
        enabled={true} // the controls can be disabled by setting this to false
        global={true} // Spin globally or by dragging the model
        cursor={false} // Whether to toggle cursor style on drag
        speed={2} // Speed factor
        {...controls}
      >
        <ScrollControls pages={3} damping={0.1} horizontal>
          <Suspense fallback={null}>
            <Scroll>
              <LuthModel position={[0, 0, 0]} />
              <Preload all />
            </Scroll>
          </Suspense>
        </ScrollControls>
      </PresentationControls>

      {/* <CameraControls /> */}
      <Grid />

      {/* <OrbitControls /> */}
      <PerspectiveCamera makeDefault position={[0, 0, 1]} />
    </Stage>
  )
}
