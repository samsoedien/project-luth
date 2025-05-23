import LuthHeelTailBlocks, {
  // context as GLTFJSXContext,
  // LuthHeelTailBlocksInstances as Instances,
  Instances,
} from '../../../_generated/LuthHeelTailBlocks'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { ELuthComponent, IConfiguration, IMeshConfiguration } from '~/models/configuration.model'
import { useMemo } from 'react'
import { useConfigurationStore } from '~/store/store'

export interface IHeelTailBlockMeshesProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
}

export default function HeelTailBlockMeshes({ meshConfig }: IHeelTailBlockMeshesProps) {
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(meshConfig)

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
    <group name={meshConfig.name} dispose={null}>
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
            <meshStandardMaterial
              {...materialProps}
              attach="material"
              ref={(material) => {
                if (material) material.needsUpdate = true
              }}
            />{' '}
          </mesh>
        ))}

      <group ref={instanceGroupRef} visible={false}>
        <Instances frustumCulled={false}>
          <LuthHeelTailBlocks />
        </Instances>
      </group>
    </group>
  )
}
