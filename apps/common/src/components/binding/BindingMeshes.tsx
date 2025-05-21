import LuthBinding, { Instances as BindingInstances } from '../../_generated/LuthBinding'

import { ELuthComponent, IMeshConfiguration } from '../../models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'

export interface IBindingMeshesProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
  children: React.ReactNode
}

export default function BindingMeshes({ meshConfig, children }: IBindingMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(meshConfig)
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
          >
            <meshStandardMaterial color="white" />
          </mesh>
        ))}
      <group ref={instanceGroupRef} visible={false}>
        <BindingInstances>
          <LuthBinding />
        </BindingInstances>
      </group>
      {children}
    </group>
  )
}
