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

import LuthDreadnaughtAcoustic, { Instances } from '../_generated/LuthAcoustic'
import LuthParlorAcoustic from '../_generated/LuthAcousticParlor'

import withMeshConfiguration from '../components/withMeshConfiguration'
import Lights from './Lights'
import { GridHelper } from 'three'
import { ELuthComponent, IConfiguration } from '~/models/configuration.model'
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

  const Luth = withHoc(BoxComponent, configuration)

  return (
    <PresentationControls
      enabled={true} // the controls can be disabled by setting this to false
      global={true} // Spin globally or by dragging the model
      cursor={false} // Whether to toggle cursor style on drag
      speed={2} // Speed factor
      {...controls}
    >
      <BoxComponent />
      <Luth position={[0, 0, 0]} />
    </PresentationControls>
  )

}

/
function BoxComponent(props) {
  useEffect(() => {
    console.log('box rerender')
  }, [])
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

interface withHocProps {
 
}

const withHoc = <P extends withHocProps>(
  GLTFJSXComponent: React.ComponentType<P>,
  configuration: IConfiguration,
) => {
  return (props: P) => {
    useEffect(() => {
      console.log('HOC rerender')
      
    }, [])

    return (
      <group>
        <Instances>
          <GLTFJSXComponent {...props} position={[2, 0, 0]} visible={true} />
        </Instances>
      </group>
    )
  }
}
