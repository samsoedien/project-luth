import { GLTFResult as LuthFretsGLTF } from '~/_generated/LuthFrets'

import {
  EFretboardExtensionOption,
  EScaleAsymmetricalOption,
  EScaleLengthOption,
} from '~/models/options.model'

type FretsMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EScaleAsymmetricalOption]: {
      [key in EFretboardExtensionOption]: Array<keyof LuthFretsGLTF['nodes']>
    }
  }
}

const standardFretsMeshes: Array<keyof LuthFretsGLTF['nodes']> = [
  'Body_Fret1',
  'Body_Fret2',
  'Body_Fret3',
  'Body_Fret4',
  'Body_Fret5',
  'Body_Fret6',
  'Body_Fret7',
  'Body_Fret8',
  'Body_Fret9',
  'Body_Fret10',
  'Body_Fret11',
  'Body_Fret12',
  'Body_Fret13',
  'Body_Fret14',
  'Body_Fret15',
  'Body_Fret16',
  'Body_Fret17',
  'Body_Fret18',
  'Body_Fret19',
  'Body_Fret20',
]

export const fretsMeshMap: FretsMeshMap = {
  [EScaleLengthOption.Standard]: {
    [EScaleAsymmetricalOption.None]: {
      [EFretboardExtensionOption.Straight]: [...standardFretsMeshes],
      [EFretboardExtensionOption.Rounded]: [...standardFretsMeshes, 'Body_Fret21'],
      [EFretboardExtensionOption.Extended]: [
        ...standardFretsMeshes,
        'Body_Fret21',
        'Body_Fret22',
        'Body_Fret23',
        'Body_Fret24',
      ],
    },
  },
  [EScaleLengthOption.Shorter]: {
    [EScaleAsymmetricalOption.None]: {
      [EFretboardExtensionOption.Straight]: [...standardFretsMeshes],
      [EFretboardExtensionOption.Rounded]: [...standardFretsMeshes, 'Body_Fret21'],
      [EFretboardExtensionOption.Extended]: [
        ...standardFretsMeshes,
        'Body_Fret21',
        'Body_Fret22',
        'Body_Fret23',
        'Body_Fret24',
      ],
    },
  },
}
