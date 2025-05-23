import LuthPurfling, { Instances as PurflingInstances } from '../../../_generated/LuthPurfling'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { useTransparantMaterialProps } from '~/hooks/useTransparentMaterial'
import { ELuthComponent, IMeshConfiguration } from '~/models/configuration.model'

export interface IPurflingMeshesProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
}

export default function PurflingMeshes({ meshConfig }: IPurflingMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(meshConfig)
  const materialProps = useTransparantMaterialProps(meshConfig.name)

  return (
    <group name={meshConfig.name} dispose={null}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
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
        <PurflingInstances>
          <LuthPurfling />
        </PurflingInstances>
      </group>
    </group>
  )
}
