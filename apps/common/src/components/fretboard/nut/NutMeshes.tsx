import { IConfiguration } from '../../../models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import LuthNut, { Instances } from '~/_generated/LuthNut'

export interface INutMeshesProps {
  configuration: IConfiguration
}

export default function NutMeshes({ configuration }: INutMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  return (
    <group name={configuration.name} dispose={null}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshStandardMaterial color="black" />
          </mesh>
        ))}
      <group ref={instanceGroupRef} visible={false}>
        <Instances>
          <LuthNut />
        </Instances>
      </group>
    </group>
  )
}
