import React, { use, useMemo, useRef } from 'react'
// import { LuthSoundboardInstances as Instances } from '~/_generated/LuthSoundboard'
import { Instances } from '~/_generated/LuthSides'

import { shallow } from 'zustand/shallow'

import SoundboardMeshes from '~/components/soundboard/SoundboardMeshes'
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
import { useComponentConfigurations } from '~/hooks/useComponentConfiguration'
import { getComponentScope } from '~/helpers/getComponentScope'
import BracesMeshes from './soundboard/braces/BracesMeshes'

interface IAcousticGuitarProps {
  // position: [number, number, number]
  // scale?: number
}

export default function AcousticGuitar(props: IAcousticGuitarProps) {
  return (
    <group>
      <SoundboardMeshes>
        <BracesMeshes />
      </SoundboardMeshes>
      <SidesMeshes></SidesMeshes>
    </group>
  )
}
