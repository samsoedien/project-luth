import { useContext } from 'react'
import { context as GLTFJSXContext } from '../../_generated/LuthAcoustic'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { IConfiguration } from '~/models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { useTexture } from '@react-three/drei'

export interface INeckMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}

export default function NeckMeshes({ configuration, children }: INeckMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  const spruceBaseColorMap = useTexture('spruce-test_BaseColor.jpg')
  const spruceAOMap = useTexture('spruce-test_AmbientOcclusion.jpg')
  const spruceNormalMap = useTexture('spruce-test_Normal.jpg')
  const spruceHeightMap = useTexture('spruce-test_Height.jpg')
  const spruceMetalicMap = useTexture('spruce-test_Metallic.jpg')
  const spruceRoughnessMap = useTexture('spruce-test_Roughness.jpg')

  return (
    <group name={configuration.name} dispose={null} visible={configuration.groupVisibility}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshStandardMaterial
              map={spruceBaseColorMap}
              displacementMap={spruceHeightMap}
              roughnessMap={spruceRoughnessMap}
              metalnessMap={spruceMetalicMap}
              normalMap={spruceNormalMap}
              aoMap={spruceAOMap}
            />
          </mesh>
        ))}
      <group ref={instanceGroupRef} scale={0}>
        <instances.BodyNeck name="Body_Neck" />
        <instances.BodyHeel name="Body_Heel" />
      </group>

      {children}
    </group>
  )
}
