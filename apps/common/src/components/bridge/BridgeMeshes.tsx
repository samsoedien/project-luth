import { useContext, useMemo } from 'react'
import {
  ELuthComponent,
  IConfiguration,
  IMeshConfiguration,
} from '../../models/configuration.model'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'

import LuthBridge, { Instances } from '../../_generated/LuthBridge'
import { useConfigurationStore } from '~/store/store'

export interface IBridgeMeshesProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
  children: React.ReactNode
}

export default function BridgeMeshes({ meshConfig, children }: IBridgeMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(meshConfig)

  const componentVisibility = useConfigurationStore((state) => state.componentVisibility)
  const isVisible = componentVisibility.has(meshConfig.name)

  const materialProps = useMemo(() => {
    return !isVisible
      ? {
          transparent: true,
          opacity: 0.1,
          depthWrite: false,
          color: 'white',
        }
      : {
          transparent: false,
          opacity: 1,
          depthWrite: true,
          color: 'white',
        }
  }, [isVisible])

  // const bridgeTexture = useTexture('walnut.jpg')

  return (
    <group name={meshConfig.name} dispose={null}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            {/* <meshStandardMaterial map={bridgeTexture} /> */}
            <meshStandardMaterial
              {...materialProps}
              attach="material"
              ref={(material) => {
                if (material) material.needsUpdate = true
              }}
            />
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
