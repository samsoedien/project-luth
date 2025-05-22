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
  const isVisible = componentVisibility.includes(meshConfig.name)

  const scope = useConfigurationStore((state) => state.scope)
  console.log('BracesMeshes rerendered', scope)

  return (
    <group name={meshConfig.name} dispose={null}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            {/* <meshNormalMaterial /> */}
            <meshStandardMaterial color="white" />
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
