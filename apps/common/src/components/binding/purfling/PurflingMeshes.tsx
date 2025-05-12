import LuthPurfling, { Instances as PurflingInstances } from '../../../_generated/LuthPurfling'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { IConfiguration } from '~/models/configuration.model'

export interface IPurflingMeshesProps {
  configuration: IConfiguration
}

export default function PurflingMeshes({ configuration }: IPurflingMeshesProps) {
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
        <PurflingInstances>
          <LuthPurfling />
        </PurflingInstances>
      </group>
    </group>
  )
}
