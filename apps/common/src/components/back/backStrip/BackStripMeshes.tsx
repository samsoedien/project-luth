import LuthBackStrips, { Instances } from '~/_generated/LuthBackStrips'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { IConfiguration } from '~/models/configuration.model'

export interface IBackStripMeshesProps {
  configuration: IConfiguration
}

export default function BackStripMeshes({ configuration }: IBackStripMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  return (
    <group name={configuration.name} dispose={null}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshBasicMaterial color="white" />
          </mesh>
        ))}
      <group ref={instanceGroupRef} visible={false}>
        <Instances>
          <LuthBackStrips />
        </Instances>
      </group>
    </group>
  )
}
