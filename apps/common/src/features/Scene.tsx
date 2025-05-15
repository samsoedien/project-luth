import { Stage, PresentationControls, Loader, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

import { ReactNode, Suspense } from 'react'

import { useConfigurationStore } from '~/store/store'
import Lights from './Lights'

interface ISceneProps {
  isDebug: boolean
  children: ReactNode
}

export default function Scene({ children, isDebug }: ISceneProps) {
  const controls = useConfigurationStore((state) => state.controls)

  return (
    <>
      <Canvas>
        {isDebug && <Perf position="top-left" />}
        <Stage adjustCamera={false} shadows={true}>
          <PresentationControls enabled={true} speed={2} global={true} {...controls}>
            <Suspense fallback={null}>
              {children}
              {/* <Preload all /> */}
            </Suspense>
          </PresentationControls>
          <PerspectiveCamera makeDefault position={[0, 0, 1.5]} fov={35} />
        </Stage>
      </Canvas>
      <Loader />
    </>
  )
}
