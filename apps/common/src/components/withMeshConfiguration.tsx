import React, { useMemo, useRef } from 'react'
// import { LuthSoundboardInstances as Instances } from '~/_generated/LuthSoundboard'
import { Instances } from '~/_generated/LuthSides'

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
import PickguardMeshes from './pickguard/PickguardMeshes'
import { EBaseOrientationOption } from '~/models/options.model'
import KerflingMeshes from './sides/kerfling/KerflingMeshes'
import { useHoverLogger } from '~/helpers/hoverUtil'
import { Group } from 'three'
import BodyGroup from './body/BodyGroup'
import BaseGroup from './base/BaseGroup'
import ScaleGroup from './scale/ScaleGroup'

interface IWithMeshConfigurationProps {
  position: [number, number, number]
  scale?: number
}

const withMeshConfiguration = <P extends IWithMeshConfigurationProps>(
  GLTFJSXComponent: React.ComponentType<P>,
  // configuration: IConfiguration,
) => {
  const WrappedComponent = (props: P) => {
    const configuration = useConfigurationStore((state) => state.configuration)
    const {
      baseConfiguration,
      bodyConfiguration,
      scaleConfiguration,
      soundboardConfiguration,
      rosetteConfiguration,
      bracesConfiguration,
      backConfiguration,
      backStripConfiguration,
      sidesConfiguration,
      heelTailBlockConfiguration,
      kerflingConfiguration,
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
      pickguardConfiguration,
    } = {
      baseConfiguration: getConfiguredComponent(configuration, ELuthComponent.Base),
      bodyConfiguration: getConfiguredComponent(configuration, ELuthComponent.Body),
      scaleConfiguration: getConfiguredComponent(configuration, ELuthComponent.Scale),
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
      kerflingConfiguration: getConfiguredComponent(configuration, ELuthComponent.Kerfling),
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
      pickguardConfiguration: getConfiguredComponent(configuration, ELuthComponent.Pickguard),
    }

    const modelRef = useRef<Group>(null)

    useHoverLogger(modelRef)

    return (
      <group ref={modelRef}>
        {configuration ? (
          <BaseGroup meshConfig={baseConfiguration}>
            <BodyGroup meshConfig={bodyConfiguration}>
              <SoundboardMeshes meshConfig={soundboardConfiguration}>
                <RosetteMeshes meshConfig={rosetteConfiguration} />
                <BracesMeshes meshConfig={bracesConfiguration} />
              </SoundboardMeshes>{' '}
              <BackMeshes meshConfig={backConfiguration}>
                <BackStripMeshes meshConfig={backStripConfiguration} />
              </BackMeshes>
              <SidesMeshes meshConfig={sidesConfiguration}>
                <HeelTailBlockMeshes meshConfig={heelTailBlockConfiguration} />
                <KerflingMeshes meshConfig={kerflingConfiguration} />
                <EndGraftMeshes meshConfig={endGraftConfiguration} />
              </SidesMeshes>
              <BindingMeshes meshConfig={bindingConfiguration}>
                <PurflingMeshes meshConfig={purflingConfiguration} />
              </BindingMeshes>
            </BodyGroup>
            <ScaleGroup meshConfig={scaleConfiguration}>
              <NeckMeshes meshConfig={neckConfiguration}></NeckMeshes>
              <HeadstockMeshes meshConfig={headstockConfiguration}></HeadstockMeshes>
              <FretboardMeshes meshConfig={fretboardConfiguration}>
                <NutMeshes meshConfig={nutConfiguration} />
                <FretsMeshes meshConfig={fretsConfiguration} />
                {/* <FretboardMarkersMeshes configuration={fretboardMarkersConfiguration} />  */}
              </FretboardMeshes>
              <BridgeMeshes meshConfig={bridgeConfiguration}>
                <SaddleMeshes meshConfig={saddleConfiguration} />
              </BridgeMeshes>
              <PickguardMeshes meshConfig={pickguardConfiguration} />
              <StringsMeshes meshConfig={stringsConfiguration} />
            </ScaleGroup>
          </BaseGroup>
        ) : (
          <GLTFJSXComponent {...props} position={[0, 0, 0]} />
        )}
      </group>
    )
  }

  WrappedComponent.displayName = `withMeshConfiguration(${GLTFJSXComponent.displayName || GLTFJSXComponent.name || 'Component'})`

  return WrappedComponent
}

export default withMeshConfiguration
