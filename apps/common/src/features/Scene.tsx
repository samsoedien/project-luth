import {
  Stage,
  PresentationControls,
  Preload,
  Loader,
  PerspectiveCamera,
  Box,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

import { ReactNode, Suspense } from 'react'

import { useConfigurationStore } from '~/store/store'

interface ISceneProps {
  isDebug: boolean
  children: ReactNode
}

export default function Scene({ children, isDebug }: ISceneProps) {
  const controls = useConfigurationStore((state) => state.controls)
  console.log('rotation', controls.rotation) // When external controls within leva are used, it will provide a new rotation from the store

  if (!controls.rotation) return

  return (
    <>
      <Canvas>
        {isDebug && <Perf position="top-left" />}
        {/* <Stage adjustCamera={false}> */}
        <PresentationControls
          enabled={true}
          speed={2}
          global={true}
          rotation={[controls.rotation[0], controls.rotation[1], controls.rotation[2]]}
          // {...controls}
        >
          <Suspense fallback={null}>
            <Box args={[1, 1, 1]} />
            {/* {children} */}
            <Preload all />
          </Suspense>
        </PresentationControls>
        <PerspectiveCamera makeDefault position={[0, 0, 2]} />
        {/* </Stage> */}
      </Canvas>
      <Loader />
    </>
  )
}
