import { is } from '@react-three/fiber/dist/declarations/src/core/utils'
import { useMemo } from 'react'
import LuthSides, { Instances } from '~/_generated/LuthSides'

import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { useTransparantMaterialProps } from '~/hooks/useTransparentMaterial'
import { ELuthComponent, IConfiguration, IMeshConfiguration } from '~/models/configuration.model'
import { useConfigurationStore } from '~/store/store'

export interface ISidesMeshesProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
  children: React.ReactNode
}
export default function SidesMeshes({ meshConfig, children }: ISidesMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(meshConfig)

  const materialProps = useTransparantMaterialProps(meshConfig.name)

  console.log('SidesMeshes rerender')
  console.log('SidesMeshes', meshConfig)

  return (
    <group name={meshConfig.name} dispose={null}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh
            key={child.uuid}
            name={child.name}
            geometry={child.geometry}
            castShadow
            receiveShadow
            onClick={(e) => console.log('click', e)}
          >
            <meshStandardMaterial
              {...materialProps}
              attach="material"
              ref={(material) => {
                if (material) material.needsUpdate = true
              }}
            />{' '}
          </mesh>
        ))}
      <group ref={instanceGroupRef} visible={false}>
        <Instances frustumCulled={true}>
          <LuthSides />
        </Instances>
      </group>
      {children}
    </group>
  )
}
