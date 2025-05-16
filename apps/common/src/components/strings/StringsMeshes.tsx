import { IConfiguration } from '../../models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'

import LuthStrings, { Instances } from '../../_generated/LuthStrings'

export interface IStringsMeshesProps {
  configuration: IConfiguration
}

export default function StringsMeshes({ configuration }: IStringsMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  return (
    <group name={configuration.name} dispose={null}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshStandardMaterial color="gray" />
          </mesh>
        ))}
      <group ref={instanceGroupRef} visible={false}>
        <Instances>
          <LuthStrings />
        </Instances>
      </group>
    </group>
  )
}
