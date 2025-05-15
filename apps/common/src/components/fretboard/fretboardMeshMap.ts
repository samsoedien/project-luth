import { GLTFResult as LuthFretboardGLTF } from '~/_generated/LuthFretboard'

import {
  EFretboardExtensionOption,
  EFretboardRadiusOption,
  EScaleAssymetrical,
  EScaleLengthOption,
} from '~/models/options.model'

type FretboardMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EScaleAssymetrical]: {
      [key in EFretboardExtensionOption]: {
        [key in EFretboardRadiusOption]: Array<keyof LuthFretboardGLTF['nodes']>
      }
    }
  }
}

export const fretboardMeshMap: FretboardMeshMap = {
  [EScaleLengthOption.Standard]: {
    [EScaleAssymetrical.None]: {
      [EFretboardExtensionOption.Straight]: {
        [EFretboardRadiusOption.Modern]: ['Body_Fretboard001'],
        [EFretboardRadiusOption.Vintage]: ['Body_Fretboard001'],
        [EFretboardRadiusOption.Flat]: ['Body_Fretboard001'],
      },
      [EFretboardExtensionOption.Rounded]: {
        [EFretboardRadiusOption.Modern]: ['Body_Fretboard_Soundhole_Tangent'],
        [EFretboardRadiusOption.Vintage]: ['Body_Fretboard_Soundhole_Tangent'],
        [EFretboardRadiusOption.Flat]: ['Body_Fretboard_Soundhole_Tangent'],
      },
      [EFretboardExtensionOption.Extended]: {
        [EFretboardRadiusOption.Modern]: ['Body_Fretboard001'],
        [EFretboardRadiusOption.Vintage]: ['Body_Fretboard001'],
        [EFretboardRadiusOption.Flat]: ['Body_Fretboard001'],
      },
    },
  },
}
