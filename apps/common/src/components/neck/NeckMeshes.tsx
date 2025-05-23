import { useContext, useMemo } from 'react'
import { context as GLTFJSXContext } from '../../_generated/LuthAcoustic'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { ELuthComponent, IConfiguration, IMeshConfiguration } from '~/models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { useTexture } from '@react-three/drei'

import LuthNeck, { Instances } from '../../_generated/LuthNeck'
import { useConfigurationStore } from '~/store/store'

export interface INeckMeshesProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
  children: React.ReactNode
}

export default function NeckMeshes({ meshConfig, children }: INeckMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(meshConfig)

  // const spruceBaseColorMap = useTexture('spruce-test_BaseColor.jpg')
  // const spruceAOMap = useTexture('spruce-test_AmbientOcclusion.jpg')
  // const spruceNormalMap = useTexture('spruce-test_Normal.jpg')
  // const spruceHeightMap = useTexture('spruce-test_Height.jpg')
  // const spruceMetalicMap = useTexture('spruce-test_Metallic.jpg')
  // const spruceRoughnessMap = useTexture('spruce-test_Roughness.jpg')

  const componentVisibility = useConfigurationStore((state) => state.componentVisibility)
  const isVisible = componentVisibility.has(meshConfig.name)

  const materialProps = useMemo(() => {
    return !isVisible
      ? {
          transparent: true,
          opacity: 0.1,
          depthWrite: false,
          color: 'white',
        }
      : {
          transparent: false,
          opacity: 1,
          depthWrite: true,
          color: 'white',
        }
  }, [isVisible])
  return (
    <group name={meshConfig.name} dispose={null} visible={true}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            {/* <meshStandardMaterial
              map={spruceBaseColorMap}
              displacementMap={spruceHeightMap}
              roughnessMap={spruceRoughnessMap}
              metalnessMap={spruceMetalicMap}
              normalMap={spruceNormalMap}
              aoMap={spruceAOMap}
            /> */}
            <meshStandardMaterial
              {...materialProps}
              attach="material"
              ref={(material) => {
                if (material) material.needsUpdate = true
              }}
            />
          </mesh>
        ))}
      <group ref={instanceGroupRef} visible={false}>
        <Instances frustumCulled={false}>
          <LuthNeck />
        </Instances>
      </group>

      {children}
    </group>
  )
}
