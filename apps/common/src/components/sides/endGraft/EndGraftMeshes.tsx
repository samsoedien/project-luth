import LuthEndGraft, { Instances } from '~/_generated/LuthEndGraft'

import { ELuthComponent, IConfiguration, IMeshConfiguration } from '~/models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'

export interface IEndGraftMeshesProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
}

export default function EndGraftMeshes({ meshConfig }: IEndGraftMeshesProps) {
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
            onClick={(e) => console.log('click', e)}
          >
            <meshStandardMaterial color="black" />
          </mesh>
        ))}
      <group ref={instanceGroupRef} visible={false}>
        <Instances>
          <LuthEndGraft />
        </Instances>
      </group>
    </group>
  )
}
