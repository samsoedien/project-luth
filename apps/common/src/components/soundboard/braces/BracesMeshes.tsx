import LuthBraces, { Instances } from '~/_generated/LuthBraces'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { ELuthComponent, IMeshConfiguration } from '~/models/configuration.model'

export interface IBracesMeshesProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
}

export default function BracesMeshes({ meshConfig }: IBracesMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(meshConfig)

  return (
    <group name={meshConfig.name} dispose={null}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshNormalMaterial />
          </mesh>
        ))}
      <group ref={instanceGroupRef} visible={false}>
        <Instances>
          <LuthBraces />
        </Instances>
      </group>
    </group>
  )
}
