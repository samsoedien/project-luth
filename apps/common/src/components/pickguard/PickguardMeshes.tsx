import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { IConfiguration } from '~/models/configuration.model'

import LuthPickguard, { Instances } from '../../_generated/LuthPickguard'

export interface IPickguardMeshesProps {
  configuration: IConfiguration
}

export default function PickguardMeshes({ configuration }: IPickguardMeshesProps) {
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
            onClick={(e) => console.log('click', e)}
          >
            <meshStandardMaterial color="black" />
          </mesh>
        ))}
      <group ref={instanceGroupRef} visible={false}>
        <Instances>
          <LuthPickguard />
        </Instances>
      </group>
    </group>
  )
}
