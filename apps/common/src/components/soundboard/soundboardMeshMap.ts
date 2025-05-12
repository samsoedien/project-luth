import { GLTFResult as LuthSoundboardGLTF } from '~/_generated/LuthSoundboard'

import {
  EArmBevelOption,
  EBodyShapeOption,
  ECutawayOption,
  ESoundHoleOption,
} from '~/models/options.model'

type SoundboardMeshMap = {
  [key in EBodyShapeOption]: {
    [key in ECutawayOption]: {
      [key in EArmBevelOption]: {
        [key in ESoundHoleOption]: Array<keyof LuthSoundboardGLTF['nodes']>
      }
    }
  }
}

export const soundboardMeshMap: SoundboardMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [ECutawayOption.None]: {
      [EArmBevelOption.None]: {
        [ESoundHoleOption.None]: ['Body_Soundboard'],
        [ESoundHoleOption.Round]: ['Body_Soundboard'],
        [ESoundHoleOption.FHole]: ['Body_Soundboard'],
      },
      [EArmBevelOption.Standard]: {
        [ESoundHoleOption.None]: ['Body_Soundboard_Arm_Bevel'],
        [ESoundHoleOption.Round]: ['Body_Soundboard_Arm_Bevel'],
        [ESoundHoleOption.FHole]: ['Body_Soundboard_Arm_Bevel'],
      },
    },
    [ECutawayOption.Venetian]: {
      [EArmBevelOption.None]: {
        [ESoundHoleOption.None]: ['Body_Soundboard_Venetian_Cutaway'],
        [ESoundHoleOption.Round]: ['Body_Soundboard_Venetian_Cutaway'],
        [ESoundHoleOption.FHole]: ['Body_Soundboard_Venetian_Cutaway'],
      },

      [EArmBevelOption.Standard]: {
        [ESoundHoleOption.None]: ['Body_Soundboard_Arm_Bevel_Cutaway_Venetian'],
        [ESoundHoleOption.Round]: ['Body_Soundboard_Arm_Bevel_Cutaway_Venetian'],
        [ESoundHoleOption.FHole]: ['Body_Soundboard_Arm_Bevel_Cutaway_Venetian'],
      },
    },
    [ECutawayOption.Florentine]: {
      [EArmBevelOption.None]: {
        [ESoundHoleOption.None]: ['Body_Soundboard_Florentine_Cutaway'],
        [ESoundHoleOption.Round]: ['Body_Soundboard_Florentine_Cutaway'],
        [ESoundHoleOption.FHole]: ['Body_Soundboard_Florentine_Cutaway'],
      },

      [EArmBevelOption.Standard]: {
        [ESoundHoleOption.None]: ['Body_Soundboard_Arm_Bevel_Cutaway_Florentine'],
        [ESoundHoleOption.Round]: ['Body_Soundboard_Arm_Bevel_Cutaway_Florentine'],
        [ESoundHoleOption.FHole]: ['Body_Soundboard_Arm_Bevel_Cutaway_Florentine'],
      },
    },
    [ECutawayOption.Scalloped]: {
      [EArmBevelOption.None]: {
        [ESoundHoleOption.None]: ['Body_Soundboard_Florentine_Cutaway'],
        [ESoundHoleOption.Round]: ['Body_Soundboard_Florentine_Cutaway'],
        [ESoundHoleOption.FHole]: ['Body_Soundboard_Florentine_Cutaway'],
      },

      [EArmBevelOption.Standard]: {
        [ESoundHoleOption.None]: ['Body_Soundboard_Arm_Bevel_Cutaway_Florentine'],
        [ESoundHoleOption.Round]: ['Body_Soundboard_Arm_Bevel_Cutaway_Florentine'],
        [ESoundHoleOption.FHole]: ['Body_Soundboard_Arm_Bevel_Cutaway_Florentine'],
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
