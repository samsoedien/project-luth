import { Stage, PresentationControls, Preload, Loader, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

import { ReactNode, Suspense, useEffect, useRef } from 'react'

import { useConfigurationStore } from '~/store/store'

interface ISceneProps {
  children: ReactNode
}

export default function Scene({ children }: ISceneProps) {
  const isDebug = true

  const controls = useConfigurationStore((state) => state.controls)
  console.log('controls', controls)

  const ref = useRef<any>(null)

  useEffect(() => {
    if (!ref.current) return

    console.log('ref', ref.current)

    if (controls.rotation) {
      ref.current.group.rotation.set(...controls.rotation)
    }
  }, [controls])

  return (
    <>
      <Canvas>
        {isDebug && <Perf position="top-left" />}
        <Stage adjustCamera={false}>
          <PresentationControls ref={ref} enabled={true} speed={2} global={true} {...controls}>
            <Suspense fallback={null}>
              {children}
              <Preload all />
            </Suspense>
          </PresentationControls>
          <PerspectiveCamera makeDefault position={[0, 0, 2]} />
        </Stage>
      </Canvas>
      <Loader />
    </>
  )
}
