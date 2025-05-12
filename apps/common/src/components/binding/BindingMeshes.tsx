import LuthBinding, { Instances as BindingInstances } from '../../_generated/LuthBinding'

import { IConfiguration } from '../../models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'

export interface IBindingMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}

export default function BindingMeshes({ configuration, children }: IBindingMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)
  return (
    <group name={configuration.name} dispose={null}>
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
