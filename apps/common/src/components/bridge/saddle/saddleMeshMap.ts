import { GLTFResult as LuthBridgeGLTF } from '~/_generated/LuthBridge'

import {
  EBridgeTypeOption,
  EGuitarStringsCountOption,
  EGuitarStringsSpacingOption,
  EScaleAssymetrical,
  EScaleFretHeelJointOption,
  EScaleLengthOption,
} from '~/models/options.model'

type SaddleMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EScaleAssymetrical]: {
      [key in EScaleFretHeelJointOption]: {
        [key in EGuitarStringsCountOption]: {
          [key in EGuitarStringsSpacingOption]: {
            [key in EBridgeTypeOption]: Array<keyof LuthBridgeGLTF['nodes']>
          }
        }
      }
    }
  }
}

export const saddleMeshMap: SaddleMeshMap = {
  [EScaleLengthOption.Standard]: {
    [EScaleAssymetrical.None]: {
      [EScaleFretHeelJointOption.Fret14]: {
        [EBridgeTypeOption.Traditional]: ['Body_Saddle'],
        [EBridgeTypeOption.Tailpiece]: [],
      },
      [EScaleFretHeelJointOption.Fret12]: {
        [EBridgeTypeOption.Traditional]: ['Body_Saddle'],
        [EBridgeTypeOption.Tailpiece]: [],
      },
    },
    [EScaleAssymetrical.Assymetrical]: {
      [EScaleFretHeelJointOption.Fret14]: {
        [EBridgeTypeOption.Traditional]: ['Body_Saddle'],
        [EBridgeTypeOption.Tailpiece]: [],
      },
      [EScaleFretHeelJointOption.Fret12]: {
        [EBridgeTypeOption.Traditional]: ['Body_Saddle'],
        [EBridgeTypeOption.Tailpiece]: [],
      },
    },
  },
}
