import React, { ComponentType, ReactNode, forwardRef } from 'react'
import { Group } from 'three'
import { useConfigurationStore } from '~/store/store'
import { getConfiguredComponent } from '~/helpers/meshUtils'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { useTransparantMaterialProps } from '~/hooks/useTransparentMaterial'
import { ELuthComponent, IMeshConfiguration } from '~/models/configuration.model'

export interface IWithMeshConfigurationProps {
  meshConfig: IMeshConfiguration<ELuthComponent>
  instanceGeometry: ReturnType<typeof useInstanceGeometry>['instanceGeometry']
  materialProps: ReturnType<typeof useTransparantMaterialProps>
}

export function withMeshConfiguration<P extends object>(
  componentKey: ELuthComponent,
  GLTFJSXComponent: ComponentType,
  Instances: ComponentType<{ children?: ReactNode }>,
  MeshComponent: ComponentType<P & IWithMeshConfigurationProps>,
) {
  const EnhancedComponent = forwardRef<Group, P & { children?: ReactNode }>((props, ref) => {
    const { children, ...rest } = props

    const meshConfig = useConfigurationStore((state) =>
      getConfiguredComponent(state.configuration, componentKey),
    )

    const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(meshConfig)
    const materialProps = useTransparantMaterialProps(meshConfig.name)

    return (
      <group name={meshConfig.name} ref={ref} dispose={null}>
        <MeshComponent
          {...(rest as P)}
          meshConfig={meshConfig}
          instanceGeometry={instanceGeometry}
          materialProps={materialProps}
        >
          {children}
        </MeshComponent>
        <group ref={instanceGroupRef} visible={false}>
          <Instances>
            <GLTFJSXComponent />
          </Instances>
        </group>
      </group>
    )
  })

  EnhancedComponent.displayName = `withMeshConfiguration(${ELuthComponent[componentKey]})`

  return EnhancedComponent
}
