import { GLTFResult as LuthBridgeGLTF } from '~/_generated/LuthBridge'

import {
  EBridgeTypeOption,
  EScaleAsymmetricalOption,
  EScaleLengthOption,
} from '~/models/options.model'

type BridgeMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EScaleAsymmetricalOption]: {
      [key in EBridgeTypeOption]: Array<keyof LuthBridgeGLTF['nodes']>
    }
  }
}

export const bridgeMeshMap: BridgeMeshMap = {
  [EScaleLengthOption.Standard]: {
    [EScaleAsymmetricalOption.None]: {
      [EBridgeTypeOption.Traditional]: ['Body_Bridge'],
      [EBridgeTypeOption.Tailpiece]: [],
      [EBridgeTypeOption.BellyUp]: [],
    },
    [EScaleAsymmetricalOption.FannedFrets]: {
      [EBridgeTypeOption.Traditional]: ['Body_Bridge'],
      [EBridgeTypeOption.Tailpiece]: [],
      [EBridgeTypeOption.BellyUp]: [],
    },
  },
  [EScaleLengthOption.Shorter]: {
    [EScaleAsymmetricalOption.None]: {
      [EBridgeTypeOption.Traditional]: ['Body_Bridge'],
      [EBridgeTypeOption.Tailpiece]: [],
      [EBridgeTypeOption.BellyUp]: [],
    },
    [EScaleAsymmetricalOption.FannedFrets]: {
      [EBridgeTypeOption.Traditional]: ['Body_Bridge'],
      [EBridgeTypeOption.Tailpiece]: [],
      [EBridgeTypeOption.BellyUp]: [],
    },
  },
}
