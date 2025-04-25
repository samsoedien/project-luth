import React from 'react'
import { Instances } from '~/_generated/LuthAcoustic'

import SoundboardMeshes from '~/components/soundboard/SoundboardMeshes'
import BracesMeshes from '~/components/soundboard/braces/BracesMeshes'
import RosetteMeshes from '~/components/soundboard/rosette/RosetteMeshes'
import BackMeshes from '~/components/back/BackMeshes'
import BackStripMeshes from '~/components/back/backStrip/BackStripMeshes'
import SidesMeshes from '~/components/sides/SidesMeshes'
import BindingMeshes from '~/components/binding/BindingMeshes'
import { ELuthComponent, IConfiguration } from '~/models/configuration.model'
import { getConfiguredComponent } from '~/helpers/meshUtils'
import HeelTailBlockMeshes from './sides/heelTailBlocks/HeelTailBlocksMeshes'
import PurflingMeshes from './binding/purfling/PurflingMeshes'
import NeckMeshes from './neck/NeckMeshes'
import FretboardMeshes from './fretboard/FretboardMeshes'
import FretsMeshes from './fretboard/frets/FretsMeshes'
import HeadstockMeshes from './headstock/HeadstockMeshes'
import EndGraftMeshes from './sides/endGraft/EndGraftMeshes'
import { useConfigurationStore } from '~/store/store'
import BridgeMeshes from './bridge/BridgeMeshes'
import StringsMeshes from './strings/StringsMeshes'
import NutMeshes from './fretboard/nut/NutMeshes'
import SaddleMeshes from './bridge/saddle/SaddleMeshes'
import FretboardMarkersMeshes from './fretboard/fretboardMarkers/FretboardMarkersMeshes'

interface IWithMeshConfigurationProps {
  position: [number, number, number]
  scale?: number
}

const withMeshConfiguration = <P extends IWithMeshConfigurationProps>(
  GLTFJSXComponent: React.ComponentType<P>,
  // configuration: IConfiguration,
) => {
  return (
    (props: P) => {
      const configuration = useConfigurationStore((state) => state.configuration)
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
        neckConfiguration,
        fretboardConfiguration,
        fretsConfiguration,
        headstockConfiguration,
        endGraftConfiguration,
        bridgeConfiguration,
        stringsConfiguration,
        nutConfiguration,
        saddleConfiguration,
        fretboardMarkersConfiguration,
      } = {
        soundboardConfiguration: getConfiguredComponent(configuration, ELuthComponent.Soundboard),
        backStripConfiguration: getConfiguredComponent(configuration, ELuthComponent.BackStrip),
        rosetteConfiguration: getConfiguredComponent(configuration, ELuthComponent.Rosette),
        bracesConfiguration: getConfiguredComponent(configuration, ELuthComponent.Braces),
        backConfiguration: getConfiguredComponent(configuration, ELuthComponent.Back),
        sidesConfiguration: getConfiguredComponent(configuration, ELuthComponent.Sides),
        heelTailBlockConfiguration: getConfiguredComponent(
          configuration,
          ELuthComponent.HeelTailBlocks,
        ),
        bindingConfiguration: getConfiguredComponent(configuration, ELuthComponent.Binding),
        purflingConfiguration: getConfiguredComponent(configuration, ELuthComponent.Purfling),
        neckConfiguration: getConfiguredComponent(configuration, ELuthComponent.Neck),
        fretboardConfiguration: getConfiguredComponent(configuration, ELuthComponent.Fretboard),
        fretsConfiguration: getConfiguredComponent(configuration, ELuthComponent.Frets),
        headstockConfiguration: getConfiguredComponent(configuration, ELuthComponent.Headstock),
        endGraftConfiguration: getConfiguredComponent(configuration, ELuthComponent.EndGraft),
        bridgeConfiguration: getConfiguredComponent(configuration, ELuthComponent.Bridge),
        stringsConfiguration: getConfiguredComponent(configuration, ELuthComponent.Strings),
        nutConfiguration: getConfiguredComponent(configuration, ELuthComponent.Nut),
        saddleConfiguration: getConfiguredComponent(configuration, ELuthComponent.Saddle),
        fretboardMarkersConfiguration: getConfiguredComponent(
          configuration,
          ELuthComponent.FretboardMarkers,
        ),
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
        !purflingConfiguration ||
        !neckConfiguration ||
        !fretboardConfiguration ||
        !fretsConfiguration ||
        !headstockConfiguration ||
        !endGraftConfiguration ||
        !bridgeConfiguration ||
        !stringsConfiguration ||
        !nutConfiguration ||
        !saddleConfiguration ||
        !fretboardMarkersConfiguration
      )
        return

      return (
        <group scale={0.001}>
          <Instances>
            {configuration ? (
              <>
                <SoundboardMeshes configuration={soundboardConfiguration}>
                  <RosetteMeshes configuration={rosetteConfiguration} />
                  <BracesMeshes configuration={bracesConfiguration} />
                </SoundboardMeshes>
                <BackMeshes configuration={backConfiguration}>
                  <BackStripMeshes configuration={backStripConfiguration} />
                </BackMeshes>
                <SidesMeshes configuration={sidesConfiguration}>
                  <HeelTailBlockMeshes configuration={heelTailBlockConfiguration} />
                  <EndGraftMeshes configuration={endGraftConfiguration} />
                </SidesMeshes>
                <BindingMeshes configuration={bindingConfiguration}>
                  <PurflingMeshes configuration={purflingConfiguration} />
                </BindingMeshes>
                <NeckMeshes configuration={neckConfiguration}>
                  <mesh>
                    <boxGeometry />
                  </mesh>
                </NeckMeshes>
                <HeadstockMeshes configuration={headstockConfiguration}>
                  <mesh>
                    <boxGeometry />
                  </mesh>
                </HeadstockMeshes>
                <FretboardMeshes configuration={fretboardConfiguration}>
                  <FretsMeshes configuration={fretsConfiguration} />
                  <NutMeshes configuration={nutConfiguration} />
                  <FretboardMarkersMeshes configuration={fretboardMarkersConfiguration} />
                </FretboardMeshes>
                <BridgeMeshes configuration={bridgeConfiguration}>
                  <SaddleMeshes configuration={saddleConfiguration} />
                </BridgeMeshes>
                <StringsMeshes configuration={stringsConfiguration} />
              </>
            ) : (
              <GLTFJSXComponent {...props} position={[0, 0, 0]} />
            )}
          </Instances>
        </group>
      )
    },
    { displayName: 'withMeshConfiguration' }
  )
}

export default withMeshConfiguration
