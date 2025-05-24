import LuthKerfling, { Instances } from '~/_generated/LuthKerfling'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { ELuthComponent, IMeshConfiguration } from '~/models/configuration.model'
import { useConfigurationStore } from '~/store/store'
import { useMemo } from 'react'
import { useTransparantMaterialProps } from '~/hooks/useTransparentMaterial'

export interface IKerflingMeshesProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
}
export default function KerflingMeshes({ meshConfig }: IKerflingMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(meshConfig)

  const materialProps = useTransparantMaterialProps(meshConfig.name)

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
          <LuthKerfling />
        </Instances>
      </group>
    </group>
  )
}
