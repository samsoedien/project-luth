import { useMemo } from 'react'
import LuthBraces, { Instances } from '~/_generated/LuthBraces'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { ELuthComponent, IMeshConfiguration } from '~/models/configuration.model'
import { useConfigurationStore } from '~/store/store'

export interface IBracesMeshesProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
}

export default function BracesMeshes({ meshConfig }: IBracesMeshesProps) {
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

  const scope = useConfigurationStore((state) => state.scope)
  console.log('BracesMeshes rerendered', scope)

  return (
    <group name={meshConfig.name} dispose={null}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            {/* <meshNormalMaterial /> */}
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
          <LuthBraces />
        </Instances>
      </group>
    </group>
  )
}
