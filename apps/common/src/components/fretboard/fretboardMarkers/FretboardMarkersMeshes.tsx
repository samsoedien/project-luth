import { ELuthComponent, IMeshConfiguration } from '~/models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'

export interface IFretboardMarkersMeshesProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
}

export default function FretboardMarkersMeshes({ meshConfig }: IFretboardMarkersMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(meshConfig)

  return (
    <group name={meshConfig.name} dispose={null} visible={true}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshNormalMaterial />
            {/* <meshStandardMaterial color={'white'} /> */}
          </mesh>
        ))}
      <group ref={instanceGroupRef} scale={0}></group>
    </group>
  )
}
