import { IConfiguration } from '~/models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'

import LuthHeadstock, { Instances } from '../../_generated/LuthHeadstock'

export interface IHeadstockMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}

export default function HeadstockMeshes({ configuration, children }: IHeadstockMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  return (
    <group name={configuration.name} dispose={null} visible={configuration.groupVisibility}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshNormalMaterial />
          </mesh>
        ))}
      <group ref={instanceGroupRef} visible={false}>
        <Instances>
          <LuthHeadstock />
        </Instances>
      </group>

      {children}
    </group>
  )
}
