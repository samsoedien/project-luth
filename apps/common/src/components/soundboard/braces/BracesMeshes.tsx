import LuthBraces, { Instances } from '~/_generated/LuthBraces'
import {
  IWithMeshConfigurationProps,
  withMeshConfiguration,
} from '~/components/withMeshConfiguration' // Adjust import if needed
import { ELuthComponent } from '~/models/configuration.model'

export function BracesMeshes({
  meshConfig,
  instanceGeometry,
  materialProps,
}: IWithMeshConfigurationProps) {
  console.log('BracesMeshes', meshConfig.name)
  return (
    <group name={meshConfig.name} dispose={null} visible={true}>
      {instanceGeometry.map((child) => (
        <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
          <meshStandardMaterial
            {...materialProps}
            attach="material"
            ref={(material) => {
              if (material) material.needsUpdate = true
            }}
          />
        </mesh>
      ))}
    </group>
  )
}

export default withMeshConfiguration(ELuthComponent.Braces, LuthBraces, Instances, BracesMeshes)
