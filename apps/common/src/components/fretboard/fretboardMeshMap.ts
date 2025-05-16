import { GLTFResult as LuthFretboardGLTF } from '~/_generated/LuthFretboard'

import {
  EBaseTypeOption,
  EFretboardExtensionOption,
  EScaleLengthOption,
} from '~/models/options.model'

type FretboardMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EBaseTypeOption]: {
      [key in EFretboardExtensionOption]: Array<keyof LuthFretboardGLTF['nodes']>
    }
  }
}

export const fretboardMeshMap: FretboardMeshMap = {
  [EScaleLengthOption.Standard]: {
    [EBaseTypeOption.Fret14]: {
      [EFretboardExtensionOption.Straight]: ['Fretboard__Scale25-4_Fret14__ExtStd__Mesh'],
      [EFretboardExtensionOption.Rounded]: ['Fretboard__Scale25-4_Fret14__ExtTan__Mesh'],
      [EFretboardExtensionOption.Extended]: [],
    },
    [EBaseTypeOption.Fret12]: {
      [EFretboardExtensionOption.Straight]: ['Fretboard__Scale25-4_Fret14__ExtStd__Mesh'],
      [EFretboardExtensionOption.Rounded]: ['Fretboard__Scale25-4_Fret14__ExtTan__Mesh'],
      [EFretboardExtensionOption.Extended]: [],
    },
  },
  [EScaleLengthOption.Shorter]: {
    [EBaseTypeOption.Fret14]: {
      [EFretboardExtensionOption.Straight]: ['Fretboard__Scale24_Fret14__ExtStd__Mesh'],
      [EFretboardExtensionOption.Rounded]: ['Fretboard__Scale24_Fret14__ExtTan__Mesh'],
      [EFretboardExtensionOption.Extended]: [],
    },
    [EBaseTypeOption.Fret12]: {
      [EFretboardExtensionOption.Straight]: ['Fretboard__Scale24_Fret14__ExtStd__Mesh'],
      [EFretboardExtensionOption.Rounded]: ['Fretboard__Scale24_Fret14__ExtTan__Mesh'],
      [EFretboardExtensionOption.Extended]: [],
    },
  },
}
