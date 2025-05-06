import {
  Stage,
  PresentationControls,
  Preload,
  Loader,
  PerspectiveCamera,
  Box,
  OrbitControls,
  CameraControls,
  OrthographicCamera,
  Helper,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

import { ReactNode, Suspense } from 'react'
import { BoxHelper } from 'three'
import { LuthSides, LuthSidesInstances } from '~/_generated/LuthSides'

import { useConfigurationStore } from '~/store/store'

interface ISceneProps {
  isDebug: boolean
  children: ReactNode
}

export default function Scene({ children, isDebug }: ISceneProps) {
  const controls = useConfigurationStore((state) => state.controls)
  console.log('controls', controls) // When external controls within leva are used, it will provide a new rotation from the store

  return (
    <>
      <Canvas>
        {isDebug && <Perf position="top-left" />}
        <Stage adjustCamera={false} shadows={false}>
          {/* <PresentationControls enabled={true} speed={2} global={true} {...controls}> */}
          <Suspense fallback={null}>
            {/* <Box args={[1, 1, 1]} /> */}
            {/* <LuthSidesInstances frustumCulled={false}>
              <LuthSides />
            </LuthSidesInstances> */}
            {children}
            <Preload all />
          </Suspense>
          {/* </PresentationControls> */}
          <OrbitControls />
          {/* <OrthographicCamera makeDefault position={[0, 0, 1]} /> */}
          <PerspectiveCamera makeDefault position={[0, 0, 1]} near={0.0001} far={10000} fov={35} />
        </Stage>
      </Canvas>
      <Loader />
    </>
  )
}
