import LuthBackStrips, { Instances } from '~/_generated/LuthBackStrips'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { ELuthComponent, IConfiguration, IMeshConfiguration } from '~/models/configuration.model'

export interface IBackStripMeshesProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
}

export default function BackStripMeshes({ meshConfig }: IBackStripMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(meshConfig)

  return (
    <group name={meshConfig.name} dispose={null}>
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
