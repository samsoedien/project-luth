import { GLTFResult as LuthFretboardGLTF } from '~/_generated/LuthFretboard'

import {
  EBaseFretJointOption,
  EFretboardExtensionOption,
  EScaleLengthOption,
} from '~/models/options.model'

type FretboardMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EBaseFretJointOption]: {
      [key in EFretboardExtensionOption]: Array<keyof LuthFretboardGLTF['nodes']>
    }
  }
}

export const fretboardMeshMap: FretboardMeshMap = {
  [EScaleLengthOption.Standard]: {
    [EBaseFretJointOption.Fret14]: {
      [EFretboardExtensionOption.Straight]: ['Fretboard__Scale25-4_Fret14__ExtStd__Mesh'],
      [EFretboardExtensionOption.Rounded]: ['Fretboard__Scale25-4_Fret14__ExtTan__Mesh'],
      [EFretboardExtensionOption.Extended]: [],
    },
    [EBaseFretJointOption.Fret12]: {
      [EFretboardExtensionOption.Straight]: ['Fretboard__Scale25-4_Fret14__ExtStd__Mesh'],
      [EFretboardExtensionOption.Rounded]: ['Fretboard__Scale25-4_Fret14__ExtTan__Mesh'],
      [EFretboardExtensionOption.Extended]: [],
    },
  },
  [EScaleLengthOption.Shorter]: {
    [EBaseFretJointOption.Fret14]: {
      [EFretboardExtensionOption.Straight]: ['Fretboard__Scale24_Fret14__ExtStd__Mesh'],
      [EFretboardExtensionOption.Rounded]: ['Fretboard__Scale24_Fret14__ExtTan__Mesh'],
      [EFretboardExtensionOption.Extended]: [],
    },
    [EBaseFretJointOption.Fret12]: {
      [EFretboardExtensionOption.Straight]: ['Fretboard__Scale24_Fret14__ExtStd__Mesh'],
      [EFretboardExtensionOption.Rounded]: ['Fretboard__Scale24_Fret14__ExtTan__Mesh'],
      [EFretboardExtensionOption.Extended]: [],
    },
  },
}
