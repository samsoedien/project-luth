import React, { useEffect } from 'react'
import { Instances } from '~/_generated/LuthAcoustic'

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
import HeelTailBlockMeshes from './sides/heelTailBlocks/HeelTailBlocksMeshes'
import PurflingMeshes from './binding/purfling/PurflingMeshes'

interface IWithMeshModifierProps {
  position: [number, number, number]
}

const withMeshConfiguration = <P extends IWithMeshModifierProps>(
  GLTFJSXComponent: React.ComponentType<P>,
  baseConfiguration: IBaseConfiguration,
) => {
  return (props: P) => {
    const {
      soundboardConfiguration,
      rosetteConfiguration,
      bracesConfiguration,
      backConfiguration,
      backStripConfiguration,
      sidesConfiguration,
      heelTailBlockConfiguration,
      bindingConfiguration,
      purflingConfiguration,
    } = {
      soundboardConfiguration: getConfiguredComponent(baseConfiguration, ELuthComponent.Soundboard),
      backStripConfiguration: getConfiguredComponent(baseConfiguration, ELuthComponent.BackStrip),
      rosetteConfiguration: getConfiguredComponent(baseConfiguration, ELuthComponent.Rosette),
      bracesConfiguration: getConfiguredComponent(baseConfiguration, ELuthComponent.Braces),
      backConfiguration: getConfiguredComponent(baseConfiguration, ELuthComponent.Back),
      sidesConfiguration: getConfiguredComponent(baseConfiguration, ELuthComponent.Sides),
      heelTailBlockConfiguration: getConfiguredComponent(
        baseConfiguration,
        ELuthComponent.HeelTailBlocks,
      ),
      bindingConfiguration: getConfiguredComponent(baseConfiguration, ELuthComponent.Binding),
      purflingConfiguration: getConfiguredComponent(baseConfiguration, ELuthComponent.Purfling),
    }

    if (
      !soundboardConfiguration ||
      !rosetteConfiguration ||
      !bracesConfiguration ||
      !backConfiguration ||
      !backStripConfiguration ||
      !sidesConfiguration ||
      !heelTailBlockConfiguration ||
      !bindingConfiguration ||
      !purflingConfiguration
    )
      return

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
            <BackStripMeshes configuration={backStripConfiguration} />
          </BackMeshes>
          <SidesMeshes configuration={sidesConfiguration}>
            <HeelTailBlockMeshes configuration={heelTailBlockConfiguration} />
          </SidesMeshes>
          <BindingMeshes configuration={bindingConfiguration}>
            <PurflingMeshes configuration={purflingConfiguration} />
          </BindingMeshes>
        </Instances>
      </group>
    )
  }
}

export default withMeshConfiguration
