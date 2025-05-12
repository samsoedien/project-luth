import { IConfiguration } from '~/models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'

import LuthFretboard, { Instances } from '../../_generated/LuthFretboard'

export interface IFretboardMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}

export default function FretboardMeshes({ configuration, children }: IFretboardMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  return (
    <group name={configuration.name} dispose={null} visible={configuration?.groupVisibility}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshNormalMaterial />
          </mesh>
        ))}
      <group ref={instanceGroupRef} visible={false}>
        <Instances>
          <LuthFretboard />
        </Instances>
      </group>
      {children}
    </group>
  )
}
