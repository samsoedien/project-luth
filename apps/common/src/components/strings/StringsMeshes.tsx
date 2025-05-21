import {
  ELuthComponent,
  IConfiguration,
  IMeshConfiguration,
} from '../../models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'

import LuthStrings, { Instances } from '../../_generated/LuthStrings'

export interface IStringsMeshesProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
}

export default function StringsMeshes({ meshConfig }: IStringsMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(meshConfig)

  return (
    <group name={meshConfig.name} dispose={null}>
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
