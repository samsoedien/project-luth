import { GLTFResult as LuthFretboardGLTF } from '~/_generated/LuthFretboard'

import {
  EFretboardExtensionOption,
  EFretboardRadiusOption,
  EScaleAssymetrical,
  EScaleFretHeelJointOption,
  EScaleLengthOption,
} from '~/models/options.model'

type FretboardMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EScaleAssymetrical]: {
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
    [EScaleAssymetrical.None]: {
      [EScaleFretHeelJointOption.Fret14]: {
        [EFretboardExtensionOption.Straight]: {
          [EFretboardRadiusOption.Modern]: ['Body_Fretboard001'],
          [EFretboardRadiusOption.Vintage]: ['Body_Fretboard001'],
          [EFretboardRadiusOption.Flat]: ['Body_Fretboard001'],
        },
        [EFretboardExtensionOption.Rounded]: {
          [EFretboardRadiusOption.Modern]: ['Body_Fretboard001'],
          [EFretboardRadiusOption.Vintage]: ['Body_Fretboard001'],
          [EFretboardRadiusOption.Flat]: ['Body_Fretboard001'],
        },
        [EFretboardExtensionOption.Extended]: {
          [EFretboardRadiusOption.Modern]: ['Body_Fretboard001'],
          [EFretboardRadiusOption.Vintage]: ['Body_Fretboard001'],
          [EFretboardRadiusOption.Flat]: ['Body_Fretboard001'],
        },
      },
      [EScaleFretHeelJointOption.Fret12]: {
        [EFretboardExtensionOption.Straight]: {
          [EFretboardRadiusOption.Modern]: ['Body_Fretboard001'],
          [EFretboardRadiusOption.Vintage]: ['Body_Fretboard001'],
          [EFretboardRadiusOption.Flat]: ['Body_Fretboard001'],
        },
        [EFretboardExtensionOption.Rounded]: {
          [EFretboardRadiusOption.Modern]: ['Body_Fretboard001'],
          [EFretboardRadiusOption.Vintage]: ['Body_Fretboard001'],
          [EFretboardRadiusOption.Flat]: ['Body_Fretboard001'],
        },
        [EFretboardExtensionOption.Extended]: {
          [EFretboardRadiusOption.Modern]: ['Body_Fretboard001'],
          [EFretboardRadiusOption.Vintage]: ['Body_Fretboard001'],
          [EFretboardRadiusOption.Flat]: ['Body_Fretboard001'],
        },
      },
    },
  },
}
