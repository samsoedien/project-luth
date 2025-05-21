import LuthPurfling, { Instances as PurflingInstances } from '../../../_generated/LuthPurfling'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { ELuthComponent, IMeshConfiguration } from '~/models/configuration.model'

export interface IPurflingMeshesProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
}

export default function PurflingMeshes({ meshConfig }: IPurflingMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(meshConfig)

  return (
    <group name={meshConfig.name} dispose={null}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshStandardMaterial color="black" />
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
