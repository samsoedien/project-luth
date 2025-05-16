import { GLTFResult as LuthSoundboardGLTF } from '~/_generated/LuthSoundboard'
import { ELuthComponent } from '~/models/configuration.model'

import {
  EBodyArmBevelOption,
  EBodyShapeOption,
  EBodyCutawayOption,
  ESoundboardSoundHoleOption,
} from '~/models/options.model'
import { IBodyOptions, ISoundboardOptions } from '~/store/store'

type IOptions = IBodyOptions & ISoundboardOptions

// const soundboardMeshDependencies: Record<ELuthComponent, Array<keyof IOptions>> = {
//   [ELuthComponent.Soundboard]: ['bodyShape', 'cutaway', 'armBevel', 'soundHole'],
// }

type SoundboardMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBodyCutawayOption]: {
      [key in EBodyArmBevelOption]: {
        [key in ESoundboardSoundHoleOption]: Array<keyof LuthSoundboardGLTF['nodes']>
      }
    }
  }
}

export const soundboardMeshMap: SoundboardMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [EBodyCutawayOption.None]: {
      [EBodyArmBevelOption.None]: {
        [ESoundboardSoundHoleOption.None]: ['Body_Soundboard'],
        [ESoundboardSoundHoleOption.Standard]: ['Body_Soundboard'],
        [ESoundboardSoundHoleOption.FHole]: ['Body_Soundboard'],
      },
      [EBodyArmBevelOption.Standard]: {
        [ESoundboardSoundHoleOption.None]: ['Body_Soundboard_Arm_Bevel'],
        [ESoundboardSoundHoleOption.Standard]: ['Body_Soundboard_Arm_Bevel'],
        [ESoundboardSoundHoleOption.FHole]: ['Body_Soundboard_Arm_Bevel'],
      },
    },
    [EBodyCutawayOption.Venetian]: {
      [EBodyArmBevelOption.None]: {
        [ESoundboardSoundHoleOption.None]: ['Body_Soundboard_Venetian_Cutaway'],
        [ESoundboardSoundHoleOption.Standard]: ['Body_Soundboard_Venetian_Cutaway'],
        [ESoundboardSoundHoleOption.FHole]: ['Body_Soundboard_Venetian_Cutaway'],
      },

      [EBodyArmBevelOption.Standard]: {
        [ESoundboardSoundHoleOption.None]: ['Body_Soundboard_Arm_Bevel_Cutaway_Venetian'],
        [ESoundboardSoundHoleOption.Standard]: ['Body_Soundboard_Arm_Bevel_Cutaway_Venetian'],
        [ESoundboardSoundHoleOption.FHole]: ['Body_Soundboard_Arm_Bevel_Cutaway_Venetian'],
      },
    },
    [EBodyCutawayOption.Florentine]: {
      [EBodyArmBevelOption.None]: {
        [ESoundboardSoundHoleOption.None]: ['Body_Soundboard_Florentine_Cutaway'],
        [ESoundboardSoundHoleOption.Standard]: ['Body_Soundboard_Florentine_Cutaway'],
        [ESoundboardSoundHoleOption.FHole]: ['Body_Soundboard_Florentine_Cutaway'],
      },

      [EBodyArmBevelOption.Standard]: {
        [ESoundboardSoundHoleOption.None]: ['Body_Soundboard_Arm_Bevel_Cutaway_Florentine'],
        [ESoundboardSoundHoleOption.Standard]: ['Body_Soundboard_Arm_Bevel_Cutaway_Florentine'],
        [ESoundboardSoundHoleOption.FHole]: ['Body_Soundboard_Arm_Bevel_Cutaway_Florentine'],
      },
    },
    [EBodyCutawayOption.Scalloped]: {
      [EBodyArmBevelOption.None]: {
        [ESoundboardSoundHoleOption.None]: ['Body_Soundboard_Florentine_Cutaway'],
        [ESoundboardSoundHoleOption.Standard]: ['Body_Soundboard_Florentine_Cutaway'],
        [ESoundboardSoundHoleOption.FHole]: ['Body_Soundboard_Florentine_Cutaway'],
      },

      [EBodyArmBevelOption.Standard]: {
        [ESoundboardSoundHoleOption.None]: ['Body_Soundboard_Arm_Bevel_Cutaway_Florentine'],
        [ESoundboardSoundHoleOption.Standard]: ['Body_Soundboard_Arm_Bevel_Cutaway_Florentine'],
        [ESoundboardSoundHoleOption.FHole]: ['Body_Soundboard_Arm_Bevel_Cutaway_Florentine'],
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
