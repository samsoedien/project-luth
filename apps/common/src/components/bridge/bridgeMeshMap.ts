import { GLTFResult as LuthBridgeGLTF } from '~/_generated/LuthBridge'

import { EBridgeTypeOption, EScaleAssymetrical, EScaleLengthOption } from '~/models/options.model'

type BridgeMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EScaleAssymetrical]: {
      [key in EBridgeTypeOption]: Array<keyof LuthBridgeGLTF['nodes']>
    }
  }
}

export const bridgeMeshMap: BridgeMeshMap = {
  [EScaleLengthOption.Standard]: {
    [EScaleAssymetrical.None]: {
      [EBridgeTypeOption.Traditional]: ['Body_Bridge'],
      [EBridgeTypeOption.Tailpiece]: [],
      [EBridgeTypeOption.BellyUp]: [],
    },
  },
  [EScaleLengthOption.Shorter]: {
    [EScaleAssymetrical.None]: {
      [EBridgeTypeOption.Traditional]: ['Body_Bridge'],
      [EBridgeTypeOption.Tailpiece]: [],
      [EBridgeTypeOption.BellyUp]: [],
    },
  },
}
