import {
  ELuthComponent,
  IConfiguration,
  IMeshConfiguration,
} from '../../../models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import LuthNut, { Instances } from '~/_generated/LuthNut'

export interface INutMeshesProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
}

export default function NutMeshes({ meshConfig }: INutMeshesProps) {
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
        <Instances>
          <LuthNut />
        </Instances>
      </group>
    </group>
  )
}
