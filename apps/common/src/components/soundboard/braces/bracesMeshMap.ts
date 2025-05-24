import { GLTFResult } from '~/_generated/LuthBraces'
import {
  EBodyShapeOption,
  EBodyCutawayOption,
  ESoundboardSoundHoleOption,
} from '~/models/options.model'

type BracesMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBodyCutawayOption]: {
      [key in ESoundboardSoundHoleOption]: Array<keyof GLTFResult['nodes']>
    }
  }
}

const bracesXPatternMeshes: Array<keyof GLTFResult['nodes']> = [
  'Body_Lateral_BraceA',
  'Body_X_BraceB',
  'Body_X_BraceC',
  'Body_BraceD',
  'Body_BraceE',
  'Body_BraceF_Left',
  'Body_BraceF_Right',
  'Body_BraceG_Left',
  'Body_BraceG_Right',
  'Body_BraceH_Left',
  'Body_BraceH_Right',
  'Body_Bridge_Plate',
]

export const bracesMeshMap: BracesMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [EBodyCutawayOption.None]: {
      [ESoundboardSoundHoleOption.None]: [
        ...bracesXPatternMeshes,
        'Body_Brace_Fretboard_Reinforcement_Left',
        'Body_Brace_Fretboard_Reinforcement_Right',
      ],
      [ESoundboardSoundHoleOption.Standard]: [
        ...bracesXPatternMeshes,

        'Body_Brace_Fretboard_Reinforcement_Left',
        'Body_Brace_Fretboard_Reinforcement_Right',
      ],
      [ESoundboardSoundHoleOption.FHole]: [
        ...bracesXPatternMeshes,

        'Body_Brace_Fretboard_Reinforcement_Left',
        'Body_Brace_Fretboard_Reinforcement_Right',
      ],
      [ESoundboardSoundHoleOption.Oval]: [
        ...bracesXPatternMeshes,

        'Body_Brace_Fretboard_Reinforcement_Left',
        'Body_Brace_Fretboard_Reinforcement_Right',
      ],
    },
    [EBodyCutawayOption.Venetian]: {
      [ESoundboardSoundHoleOption.None]: [
        ...bracesXPatternMeshes,
        'Body_Brace_Fretboard_Reinforcement_Right',
      ],
      [ESoundboardSoundHoleOption.Standard]: [
        ...bracesXPatternMeshes,
        'Body_Brace_Fretboard_Reinforcement_Right',
      ],
      [ESoundboardSoundHoleOption.FHole]: [
        ...bracesXPatternMeshes,
        'Body_Brace_Fretboard_Reinforcement_Right',
      ],
      [ESoundboardSoundHoleOption.Oval]: [
        ...bracesXPatternMeshes,
        'Body_Brace_Fretboard_Reinforcement_Right',
      ],
    },

    [EBodyCutawayOption.Florentine]: {
      [ESoundboardSoundHoleOption.None]: [
        ...bracesXPatternMeshes,
        'Body_Brace_Fretboard_Reinforcement_Right',
      ],
      [ESoundboardSoundHoleOption.Standard]: [
        ...bracesXPatternMeshes,
        'Body_Brace_Fretboard_Reinforcement_Right',
      ],
      [ESoundboardSoundHoleOption.FHole]: [
        ...bracesXPatternMeshes,
        'Body_Brace_Fretboard_Reinforcement_Right',
      ],
      [ESoundboardSoundHoleOption.Oval]: [
        ...bracesXPatternMeshes,
        'Body_Brace_Fretboard_Reinforcement_Right',
      ],
    },
    [EBodyCutawayOption.Scalloped]: {
      [ESoundboardSoundHoleOption.None]: [
        ...bracesXPatternMeshes,
        'Body_Brace_Fretboard_Reinforcement_Right',
      ],
      [ESoundboardSoundHoleOption.Standard]: [
        ...bracesXPatternMeshes,
        'Body_Brace_Fretboard_Reinforcement_Right',
      ],
      [ESoundboardSoundHoleOption.FHole]: [
        ...bracesXPatternMeshes,
        'Body_Brace_Fretboard_Reinforcement_Right',
      ],
      [ESoundboardSoundHoleOption.Oval]: [
        ...bracesXPatternMeshes,
        'Body_Brace_Fretboard_Reinforcement_Right',
      ],
    },
  },
  [EBodyShapeOption.Parlor]: {
    [EBodyCutawayOption.None]: {
      [ESoundboardSoundHoleOption.None]: [
        ...bracesXPatternMeshes,
        'Body_Brace_Fretboard_Reinforcement_Left',
        'Body_Brace_Fretboard_Reinforcement_Right',
      ],
      [ESoundboardSoundHoleOption.Standard]: [
        ...bracesXPatternMeshes,
        'Body_Brace_Fretboard_Reinforcement_Left',
        'Body_Brace_Fretboard_Reinforcement_Right',
      ],
      [ESoundboardSoundHoleOption.FHole]: [
        ...bracesXPatternMeshes,
        'Body_Brace_Fretboard_Reinforcement_Left',
        'Body_Brace_Fretboard_Reinforcement_Right',
      ],
      [ESoundboardSoundHoleOption.Oval]: [],
    },
    [EBodyCutawayOption.Venetian]: {
      [ESoundboardSoundHoleOption.None]: [],
      [ESoundboardSoundHoleOption.Standard]: [],
      [ESoundboardSoundHoleOption.FHole]: [],
      [ESoundboardSoundHoleOption.Oval]: [],
    },

    [EBodyCutawayOption.Florentine]: {
      [ESoundboardSoundHoleOption.None]: [],
      [ESoundboardSoundHoleOption.Standard]: [],
      [ESoundboardSoundHoleOption.FHole]: [],
      [ESoundboardSoundHoleOption.Oval]: [],
    },
    [EBodyCutawayOption.Scalloped]: {
      [ESoundboardSoundHoleOption.None]: [],
      [ESoundboardSoundHoleOption.Standard]: [],
      [ESoundboardSoundHoleOption.FHole]: [],
      [ESoundboardSoundHoleOption.Oval]: [],
    },
  },
}
