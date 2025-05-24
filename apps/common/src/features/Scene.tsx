import {
  Stage,
  PresentationControls,
  Loader,
  PerspectiveCamera,
  GizmoHelper,
  GizmoViewport,
  Grid,
  OrbitControls,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

import { ReactNode, Suspense } from 'react'

import { useConfigurationStore } from '~/store/store'
import Lights from './Lights'
import { useControls } from 'leva'

interface ISceneProps {
  isDebug: boolean
  children: ReactNode
}

export default function Scene({ children, isDebug }: ISceneProps) {
  const controls = useConfigurationStore((state) => state.controls)

  return (
    <>
      <Canvas className="relative">
        {isDebug && <Perf position="top-left" />}
        <Stage adjustCamera={false} shadows={true}>
          <PresentationControls enabled={true} speed={2} global={false} {...controls}>
            <Suspense fallback={null}>
              {children}
              {/* <Preload all /> */}
            </Suspense>
          </PresentationControls>
          <PerspectiveCamera makeDefault position={[0, 0, 1.5]} fov={35} />
          {/* <OrbitControls /> */}

          {/* <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
            <GizmoViewport axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']} labelColor="white" />
          </GizmoHelper> */}
        </Stage>
      </Canvas>
      <Loader />
    </>
  )
}
