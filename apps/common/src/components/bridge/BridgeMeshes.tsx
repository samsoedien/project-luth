import { useContext } from 'react'
import { IConfiguration } from '../../models/configuration.model'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'

import LuthBridge, { Instances } from '../../_generated/LuthBridge'

export interface IBridgeMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}

export default function BridgeMeshes({ configuration, children }: IBridgeMeshesProps) {
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
      <group ref={instanceGroupRef} visible={false}>
        <Instances>
          <LuthBridge />
        </Instances>
      </group>
      {children}
    </group>
  )
}
