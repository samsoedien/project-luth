// import { GLTFResult } from '~/_generated/LuthAcoustic'
import { LuthGLTFResultCombined } from '~/models/gltfjsx.model'
import {
  EArmBevelOption,
  EBodyShapeOption,
  ECutawayOption,
  ESoundHoleOption,
} from '~/models/options.model'

type BracesMeshMap = {
  [key in EBodyShapeOption]: {
    [key in ECutawayOption]: {
      [key in EArmBevelOption]: {
        [key in ESoundHoleOption]: Array<keyof LuthGLTFResultCombined['nodes']>
      }
    }
  }
}

export const bracesMeshMap: BracesMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [ECutawayOption.None]: {
      [EArmBevelOption.None]: {
        [ESoundHoleOption.None]: ['Body_X_BraceB', 'Body_X_BraceC'],
        [ESoundHoleOption.Round]: ['Body_X_BraceB', 'Body_X_BraceC'],
        [ESoundHoleOption.FHole]: ['Body_X_BraceB', 'Body_X_BraceC'],
      },
      [EArmBevelOption.Standard]: {
        [ESoundHoleOption.None]: [],
        [ESoundHoleOption.Round]: [],
        [ESoundHoleOption.FHole]: [],
      },
    },
    [ECutawayOption.Venetian]: {
      [EArmBevelOption.None]: {
        [ESoundHoleOption.None]: [],
        [ESoundHoleOption.Round]: [],
        [ESoundHoleOption.FHole]: [],
      },

      [EArmBevelOption.Standard]: {
        [ESoundHoleOption.None]: [],
        [ESoundHoleOption.Round]: [],
        [ESoundHoleOption.FHole]: [],
      },
    },
    [ECutawayOption.Florentine]: {
      [EArmBevelOption.None]: {
        [ESoundHoleOption.None]: [],
        [ESoundHoleOption.Round]: [],
        [ESoundHoleOption.FHole]: [],
      },

      [EArmBevelOption.Standard]: {
        [ESoundHoleOption.None]: [],
        [ESoundHoleOption.Round]: [],
        [ESoundHoleOption.FHole]: [],
      },
    },
    [ECutawayOption.Scalloped]: {
      [EArmBevelOption.None]: {
        [ESoundHoleOption.None]: [],
        [ESoundHoleOption.Round]: [],
        [ESoundHoleOption.FHole]: [],
      },

      [EArmBevelOption.Standard]: {
        [ESoundHoleOption.None]: [],
        [ESoundHoleOption.Round]: [],
        [ESoundHoleOption.FHole]: [],
      },
    },
  },
  [EBodyShapeOption.Parlor]: {
    [ECutawayOption.None]: {
      [EArmBevelOption.None]: {
        [ESoundHoleOption.None]: [],
        [ESoundHoleOption.Round]: [],
        [ESoundHoleOption.FHole]: [],
      },
      [EArmBevelOption.Standard]: {
        [ESoundHoleOption.None]: [],
        [ESoundHoleOption.Round]: [],
        [ESoundHoleOption.FHole]: [],
      },
    },
    [ECutawayOption.Venetian]: {
      [EArmBevelOption.None]: {
        [ESoundHoleOption.None]: [],
        [ESoundHoleOption.Round]: [],
        [ESoundHoleOption.FHole]: [],
      },

      [EArmBevelOption.Standard]: {
        [ESoundHoleOption.None]: [],
        [ESoundHoleOption.Round]: [],
        [ESoundHoleOption.FHole]: [],
      },
    },
    [ECutawayOption.Florentine]: {
      [EArmBevelOption.None]: {
        [ESoundHoleOption.None]: [],
        [ESoundHoleOption.Round]: [],
        [ESoundHoleOption.FHole]: [],
      },

      [EArmBevelOption.Standard]: {
        [ESoundHoleOption.None]: [],
        [ESoundHoleOption.Round]: [],
        [ESoundHoleOption.FHole]: [],
      },
    },
    [ECutawayOption.Scalloped]: {
      [EArmBevelOption.None]: {
        [ESoundHoleOption.None]: [],
        [ESoundHoleOption.Round]: [],
        [ESoundHoleOption.FHole]: [],
      },

      [EArmBevelOption.Standard]: {
        [ESoundHoleOption.None]: [],
        [ESoundHoleOption.Round]: [],
        [ESoundHoleOption.FHole]: [],
      },
    },
  },
}
