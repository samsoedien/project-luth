import LuthSides, { Instances } from '~/_generated/LuthSides'

import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { IConfiguration } from '~/models/configuration.model'

export interface ISidesMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}
export default function SidesMeshes({ configuration, children }: ISidesMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)
  return (
    <group name={configuration.name} dispose={null}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh
            key={child.uuid}
            name={child.name}
            geometry={child.geometry}
            castShadow
            receiveShadow
            onClick={(e) => console.log('click', e)}
          >
            <meshNormalMaterial />
          </mesh>
        ))}
      <group ref={instanceGroupRef} visible={false}>
        <Instances frustumCulled={true}>
          <LuthSides />
        </Instances>
      </group>
      {children}
    </group>
  )
}
