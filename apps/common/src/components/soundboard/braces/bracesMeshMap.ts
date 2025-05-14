// import { GLTFResult } from '~/_generated/LuthAcoustic'
import { LuthGLTFResultCombined } from '~/models/gltfjsx.model'
import {
  EBodyArmBevelOption,
  EBodyShapeOption,
  EBodyCutawayOption,
  ESoundboardSoundHoleOption,
} from '~/models/options.model'

type BracesMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBodyCutawayOption]: {
      [key in EBodyArmBevelOption]: {
        [key in ESoundboardSoundHoleOption]: Array<keyof LuthGLTFResultCombined['nodes']>
      }
    }
  }
}

export const bracesMeshMap: BracesMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [EBodyCutawayOption.None]: {
      [EBodyArmBevelOption.None]: {
        [ESoundboardSoundHoleOption.None]: ['Body_X_BraceB', 'Body_X_BraceC'],
        [ESoundboardSoundHoleOption.Standard]: ['Body_X_BraceB', 'Body_X_BraceC'],
        [ESoundboardSoundHoleOption.FHole]: ['Body_X_BraceB', 'Body_X_BraceC'],
      },
      [EBodyArmBevelOption.Standard]: {
        [ESoundboardSoundHoleOption.None]: [],
        [ESoundboardSoundHoleOption.Standard]: [],
        [ESoundboardSoundHoleOption.FHole]: [],
      },
    },
    [EBodyCutawayOption.Venetian]: {
      [EBodyArmBevelOption.None]: {
        [ESoundboardSoundHoleOption.None]: [],
        [ESoundboardSoundHoleOption.Standard]: [],
        [ESoundboardSoundHoleOption.FHole]: [],
      },

      [EBodyArmBevelOption.Standard]: {
        [ESoundboardSoundHoleOption.None]: [],
        [ESoundboardSoundHoleOption.Standard]: [],
        [ESoundboardSoundHoleOption.FHole]: [],
      },
    },
    [EBodyCutawayOption.Florentine]: {
      [EBodyArmBevelOption.None]: {
        [ESoundboardSoundHoleOption.None]: [],
        [ESoundboardSoundHoleOption.Standard]: [],
        [ESoundboardSoundHoleOption.FHole]: [],
      },

      [EBodyArmBevelOption.Standard]: {
        [ESoundboardSoundHoleOption.None]: [],
        [ESoundboardSoundHoleOption.Standard]: [],
        [ESoundboardSoundHoleOption.FHole]: [],
      },
    },
    [EBodyCutawayOption.Scalloped]: {
      [EBodyArmBevelOption.None]: {
        [ESoundboardSoundHoleOption.None]: [],
        [ESoundboardSoundHoleOption.Standard]: [],
        [ESoundboardSoundHoleOption.FHole]: [],
      },

      [EBodyArmBevelOption.Standard]: {
        [ESoundboardSoundHoleOption.None]: [],
        [ESoundboardSoundHoleOption.Standard]: [],
        [ESoundboardSoundHoleOption.FHole]: [],
      },
    },
  },
  [EBodyShapeOption.Parlor]: {
    [EBodyCutawayOption.None]: {
      [EBodyArmBevelOption.None]: {
        [ESoundboardSoundHoleOption.None]: [],
        [ESoundboardSoundHoleOption.Standard]: [],
        [ESoundboardSoundHoleOption.FHole]: [],
      },
      [EBodyArmBevelOption.Standard]: {
        [ESoundboardSoundHoleOption.None]: [],
        [ESoundboardSoundHoleOption.Standard]: [],
        [ESoundboardSoundHoleOption.FHole]: [],
      },
    },
    [EBodyCutawayOption.Venetian]: {
      [EBodyArmBevelOption.None]: {
        [ESoundboardSoundHoleOption.None]: [],
        [ESoundboardSoundHoleOption.Standard]: [],
        [ESoundboardSoundHoleOption.FHole]: [],
      },

      [EBodyArmBevelOption.Standard]: {
        [ESoundboardSoundHoleOption.None]: [],
        [ESoundboardSoundHoleOption.Standard]: [],
        [ESoundboardSoundHoleOption.FHole]: [],
      },
    },
    [EBodyCutawayOption.Florentine]: {
      [EBodyArmBevelOption.None]: {
        [ESoundboardSoundHoleOption.None]: [],
        [ESoundboardSoundHoleOption.Standard]: [],
        [ESoundboardSoundHoleOption.FHole]: [],
      },

      [EBodyArmBevelOption.Standard]: {
        [ESoundboardSoundHoleOption.None]: [],
        [ESoundboardSoundHoleOption.Standard]: [],
        [ESoundboardSoundHoleOption.FHole]: [],
      },
    },
    [EBodyCutawayOption.Scalloped]: {
      [EBodyArmBevelOption.None]: {
        [ESoundboardSoundHoleOption.None]: [],
        [ESoundboardSoundHoleOption.Standard]: [],
        [ESoundboardSoundHoleOption.FHole]: [],
      },

      [EBodyArmBevelOption.Standard]: {
        [ESoundboardSoundHoleOption.None]: [],
        [ESoundboardSoundHoleOption.Standard]: [],
        [ESoundboardSoundHoleOption.FHole]: [],
      },
    },
  },
}
