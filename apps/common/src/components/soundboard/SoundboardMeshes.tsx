import LuthSoundboard, { Instances } from '~/_generated/LuthSoundboard'
import {
  IWithMeshConfigurationProps,
  withMeshConfiguration,
} from '~/components/withMeshConfiguration' // Adjust import if needed
import { ELuthComponent } from '~/models/configuration.model'

interface ISoundboardMeshesProps extends IWithMeshConfigurationProps {
  children: React.ReactNode
}

export function SoundboardMeshes({
  meshConfig,
  instanceGeometry,
  materialProps,
  children,
}: ISoundboardMeshesProps) {
  console.log('SoundboardMeshes', meshConfig.name)
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

export default withMeshConfiguration(
  ELuthComponent.Soundboard,
  LuthSoundboard,
  Instances,
  SoundboardMeshes,
)
