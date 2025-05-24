import React, { ComponentType } from 'react'
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

export const withMeshConfiguration = <P extends IWithMeshConfigurationProps>(
  componentKey: ELuthComponent,
  GLTFJSXComponent: ComponentType,
  Instances: ComponentType<{ children?: React.ReactNode }>,
  WrappedComponent: ComponentType<P>,
) => {
  const EnhancedComponent = ({
    children,
    ...props
  }: Omit<P, keyof IWithMeshConfigurationProps> & { children?: React.ReactNode }) => {
    const meshConfig = useConfigurationStore((state) =>
      getConfiguredComponent(state.configuration, componentKey),
    )

    const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(meshConfig)
    const materialProps = useTransparantMaterialProps(meshConfig.name)

    return (
      <group name={meshConfig.name} dispose={null}>
        <WrappedComponent
          {...(props as P)}
          meshConfig={meshConfig}
          instanceGeometry={instanceGeometry}
          materialProps={materialProps}
        >
          {children}
        </WrappedComponent>
        <group ref={instanceGroupRef} visible={false}>
          <Instances>
            <GLTFJSXComponent />
          </Instances>
        </group>
      </group>
    )
  }

  EnhancedComponent.displayName = `withMeshConfiguration(${ELuthComponent[componentKey]})`
  return EnhancedComponent
}
