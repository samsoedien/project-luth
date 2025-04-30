import { useContext } from 'react'
import { context as GLTFJSXContext } from '../../_generated/LuthAcoustic'
import { IConfiguration } from '../../models/configuration.model'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { useTexture } from '@react-three/drei'

export interface IBridgeMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}

export default function BridgeMeshes({ configuration, children }: IBridgeMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  // const bridgeTexture = useTexture('walnut.jpg')

  return (
    <group name={configuration.name} dispose={null}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            {/* <meshStandardMaterial map={bridgeTexture} /> */}
          </mesh>
        ))}
      <group ref={instanceGroupRef} scale={0}>
        <instances.BodyBridge name="Body_Bridge" />
      </group>
      {children}
    </group>
  )
}
