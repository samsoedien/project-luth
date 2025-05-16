import { IConfiguration } from '~/models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import LuthFrets, { Instances } from '~/_generated/LuthFrets'

export interface IFretsMeshesProps {
  configuration: IConfiguration
}

export default function FretsMeshes({ configuration }: IFretsMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  return (
    <group name={configuration.name} dispose={null} visible={configuration.groupVisibility}>
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
