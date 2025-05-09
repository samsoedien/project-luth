import LuthParlorBinding, {
  Instances as ParlorBindingInstances,
} from '../../_generated/LuthAcousticParlor_25-4in_6str_Binding'
import LuthDreadnaughtBinding, {
  Instances as DreadnaughtBindingInstances,
} from '../../_generated/LuthAcousticDreadnaught_25-4in_6str_Binding'
import { IConfiguration } from '../../models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'

export interface IBindingMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}

export default function BindingMeshes({ configuration, children }: IBindingMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)
  console.log('BindingMeshes', instanceGeometry)
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
            <meshNormalMaterial />
          </mesh>
        ))}
      <group ref={instanceGroupRef} scale={0}>
        <ParlorBindingInstances>
          <LuthParlorBinding />
        </ParlorBindingInstances>
        <DreadnaughtBindingInstances>
          <LuthDreadnaughtBinding />
        </DreadnaughtBindingInstances>
      </group>
      {children}
    </group>
  )
}
