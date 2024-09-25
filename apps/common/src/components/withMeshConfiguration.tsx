import React, { useEffect } from 'react'
import { Instances } from '~/_generated/LuthAcousticDreadnaught'

import { IBaseConfiguration } from '~/store/store'
import SoundboardMeshes from '~/components/soundboard/SoundboardMeshes'
import BracesMeshes from '~/components/soundboard/braces/BracesMeshes'
import RosetteMeshes from '~/components/soundboard/rosette/RosetteMeshes'
import BackMeshes from '~/components/back/BackMeshes'
import BackStripMeshes from '~/components/back/backStrip/BackStripMeshes'
import SidesMeshes from '~/components/sides/SidesMeshes'
import BindingMeshes from '~/components/binding/BindingMeshes'
import { ELuthComponent } from '~/models/configuration.model'
import { getConfiguredComponent } from '~/helpers/meshUtils'

interface IWithMeshModifierProps {
  position: [number, number, number]
}

const withMeshConfiguration = <P extends IWithMeshModifierProps>(
  GLTFJSXComponent: React.ComponentType<P>,
  baseConfiguration: IBaseConfiguration,
) => {
  return (props: P) => {
    const soundboardConfiguration = getConfiguredComponent(
      baseConfiguration,
      ELuthComponent.Soundboard,
    )
    const rosetteConfiguration = getConfiguredComponent(baseConfiguration, ELuthComponent.Rosette)
    const bracesConfiguration = getConfiguredComponent(baseConfiguration, ELuthComponent.Braces)
    const backConfiguration = getConfiguredComponent(baseConfiguration, ELuthComponent.Back)
    const backStripConfiguratino = getConfiguredComponent(
      baseConfiguration,
      ELuthComponent.BackStrip,
    )
    const sidesConfiguration = getConfiguredComponent(baseConfiguration, ELuthComponent.Sides)
    const bindingConfiguration = getConfiguredComponent(baseConfiguration, ELuthComponent.Binding)

    useEffect(() => {}, [baseConfiguration])

    return (
      <group>
        <Instances>
          {/* <GLTFJSXComponent {...props} position={[0.6, 0, 0]} visible={false} /> */}

          <SoundboardMeshes configuration={soundboardConfiguration}>
            <RosetteMeshes configuration={rosetteConfiguration} />
            <BracesMeshes configuration={bracesConfiguration} />
          </SoundboardMeshes>

          <BackMeshes configuration={backConfiguration}>
            <BackStripMeshes configuration={backStripConfiguratino} />
          </BackMeshes>
          <SidesMeshes configuration={sidesConfiguration}>
            <mesh>
              <boxGeometry args={[0.1, 0.1, 0.1]} />
              <meshBasicMaterial color="red" />
            </mesh>
          </SidesMeshes>
          <BindingMeshes configuration={bindingConfiguration}>
            <mesh>
              <boxGeometry args={[0.1, 0.1, 0.1]} />
              <meshBasicMaterial color="red" />
            </mesh>
          </BindingMeshes>
        </Instances>
      </group>
    )
  }
}

export default withMeshConfiguration
