import { ELuthComponent, IMeshConfiguration } from '~/models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import LuthFrets, { Instances } from '~/_generated/LuthFrets'

export interface IFretsMeshesProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
}

export default function FretsMeshes({ meshConfig }: IFretsMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(meshConfig)

  return (
    <group name={meshConfig.name} dispose={null} visible={true}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshPhongMaterial color={'grey'} />
          </mesh>
        ))}
      <group ref={instanceGroupRef} visible={false}>
        <Instances>
          <LuthFrets />
        </Instances>
      </group>
    </group>
  )
}
