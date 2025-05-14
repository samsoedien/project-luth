import { GLTFResult as LuthFretboardGLTF } from '~/_generated/LuthFretboard'

import {
  EFretboardExtensionOption,
  EFretboardRadiusOption,
  EScaleAssemetrical,
  EScaleFretHeelJointOption,
  EScaleLengthOption,
} from '~/models/options.model'

type FretboardMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EScaleAssemetrical]: {
      [key in EScaleFretHeelJointOption]: {
        [key in EFretboardExtensionOption]: {
          [key in EFretboardRadiusOption]: Array<keyof LuthFretboardGLTF['nodes']>
        }
      }
    }
  }
}

export const fretboardMeshMap: FretboardMeshMap = {
  [EScaleLengthOption.Standard]: {
    [EScaleAssemetrical.None]: {
      [EScaleFretHeelJointOption.Fret14]: {
        [EFretboardExtensionOption.Straight]: {
          [EFretboardRadiusOption.Modern]: ['Body_Fretboard001'],
        },
      },
    },
  },
}
