import LuthSides, { Instances } from '~/_generated/LuthSides'
import {
  IWithMeshConfigurationProps,
  withMeshConfiguration,
} from '~/components/withMeshConfiguration' // Adjust import if needed
import { ELuthComponent } from '~/models/configuration.model'

interface ISidesMeshesProps extends IWithMeshConfigurationProps {
  children: React.ReactNode
}

export function SidesMeshes({
  meshConfig,
  instanceGeometry,
  materialProps,
  children,
}: ISidesMeshesProps) {
  console.log('SidesMeshes', meshConfig.name)
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
      {children}
    </group>
  )
}

export default withMeshConfiguration(ELuthComponent.Sides, LuthSides, Instances, SidesMeshes)
