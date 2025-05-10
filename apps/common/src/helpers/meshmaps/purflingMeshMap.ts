import { LuthGLTFResultCombined } from '~/models/gltfjsx.model'
import {
  EArmBevelOption,
  EBodyDepthOption,
  EBodyShapeOption,
  ECutawayOption,
} from '~/models/options.model'

type PurflingMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBodyDepthOption]: {
      [key in ECutawayOption]: {
        [key in EArmBevelOption]: Array<keyof LuthGLTFResultCombined['nodes']>
      }
    }
  }
}

export const purflingMeshMap: PurflingMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [EBodyDepthOption.Standard]: {
      [ECutawayOption.None]: {
        [EArmBevelOption.None]: ['Body_Purfling_Top', 'Body_Purfling_Bottom'],
        [EArmBevelOption.Standard]: ['Body_Purfling_Top_Arm_Bevel', 'Body_Purfling_Bottom'],
      },
      [ECutawayOption.Venetian]: {
        [EArmBevelOption.None]: [
          'Body_Purfling_Top_Venetian_Cutaway',
          // 'Body_Purfling_Bottom_Venetian_Cutaway',
        ],
        [EArmBevelOption.Standard]: [
          'Body_Purfling_Top_Arm_Bevel_Venetian_Cutaway',
          // 'Body_Purfling_Bottom_Venetian_Cutaway',
        ],
      },
      [ECutawayOption.Florentine]: {
        [EArmBevelOption.None]: [
          'Body_Purfling_Top_Florentine_Cutaway',
          'Body_Purfling_Bottom_Florentine_Cutaway',
        ],
        [EArmBevelOption.Standard]: [
          'Body_Purfling_Top_Arm_Bevel_Florentine_Cutaway',
          'Body_Purfling_Bottom_Florentine_Cutaway',
        ],
      },
      [ECutawayOption.Scalloped]: {
        [EArmBevelOption.None]: ['Body_Purfling_Top_Florentine_Cutaway', 'Body_Purfling_Bottom'],
        [EArmBevelOption.Standard]: [
          'Body_Purfling_Top_Arm_Bevel_Florentine_Cutaway',
          'Body_Purfling_Bottom',
        ],
      },
    },
    [EBodyDepthOption.Thinline]: {
      [ECutawayOption.None]: {
        [EArmBevelOption.None]: ['Body_Purfling_Top', 'Body_Purfling_Bottom'],
        [EArmBevelOption.Standard]: ['Body_Purfling_Top_Arm_Bevel', 'Body_Purfling_Bottom'],
      },
      [ECutawayOption.Venetian]: {
        [EArmBevelOption.None]: [
          'Body_Purfling_Top_Venetian_Cutaway',
          // 'Body_Purfling_Bottom_Venetian_Cutaway',
        ],
        [EArmBevelOption.Standard]: [
          'Body_Purfling_Top_Arm_Bevel_Venetian_Cutaway',
          // 'Body_Purfling_Bottom_Venetian_Cutaway',
        ],
      },
      [ECutawayOption.Florentine]: {
        [EArmBevelOption.None]: [
          'Body_Purfling_Top_Florentine_Cutaway',
          'Body_Purfling_Bottom_Florentine_Cutaway',
        ],
        [EArmBevelOption.Standard]: [
          'Body_Purfling_Top_Arm_Bevel_Florentine_Cutaway',
          'Body_Purfling_Bottom_Florentine_Cutaway',
        ],
      },
      [ECutawayOption.Scalloped]: {
        [EArmBevelOption.None]: ['Body_Purfling_Top_Florentine_Cutaway', 'Body_Purfling_Bottom'],
        [EArmBevelOption.Standard]: [
          'Body_Purfling_Top_Arm_Bevel_Florentine_Cutaway',
          'Body_Purfling_Bottom',
        ],
      },
    },
  },
  [EBodyShapeOption.Parlor]: {
    [EBodyDepthOption.Standard]: {
      [ECutawayOption.None]: {
        [EArmBevelOption.None]: ['Body_Purfling_Top', 'Body_Purfling_Bottom'],
        [EArmBevelOption.Standard]: ['Body_Purfling_Top_Arm_Bevel', 'Body_Purfling_Bottom'],
      },
      [ECutawayOption.Venetian]: {
        [EArmBevelOption.None]: [
          'Body_Purfling_Top_Venetian_Cutaway',
          // 'Body_Purfling_Bottom_Venetian_Cutaway',
        ],
        [EArmBevelOption.Standard]: [
          'Body_Purfling_Top_Arm_Bevel_Venetian_Cutaway',
          // 'Body_Purfling_Bottom_Venetian_Cutaway',
        ],
      },
      [ECutawayOption.Florentine]: {
        [EArmBevelOption.None]: [
          'Body_Purfling_Top_Florentine_Cutaway',
          'Body_Purfling_Bottom_Florentine_Cutaway',
        ],
        [EArmBevelOption.Standard]: [
          'Body_Purfling_Top_Arm_Bevel_Florentine_Cutaway',
          'Body_Purfling_Bottom_Florentine_Cutaway',
        ],
      },
      [ECutawayOption.Scalloped]: {
        [EArmBevelOption.None]: ['Body_Purfling_Top_Florentine_Cutaway', 'Body_Purfling_Bottom'],
        [EArmBevelOption.Standard]: [
          'Body_Purfling_Top_Arm_Bevel_Florentine_Cutaway',
          'Body_Purfling_Bottom',
        ],
      },
    },
    [EBodyDepthOption.Thinline]: {
      [ECutawayOption.None]: {
        [EArmBevelOption.None]: ['Body_Purfling_Top', 'Body_Purfling_Bottom'],
        [EArmBevelOption.Standard]: ['Body_Purfling_Top_Arm_Bevel', 'Body_Purfling_Bottom'],
      },
      [ECutawayOption.Venetian]: {
        [EArmBevelOption.None]: [
          'Body_Purfling_Top_Venetian_Cutaway',
          // 'Body_Purfling_Bottom_Venetian_Cutaway',
        ],
        [EArmBevelOption.Standard]: [
          'Body_Purfling_Top_Arm_Bevel_Venetian_Cutaway',
          // 'Body_Purfling_Bottom_Venetian_Cutaway',
        ],
      },
      [ECutawayOption.Florentine]: {
        [EArmBevelOption.None]: [
          'Body_Purfling_Top_Florentine_Cutaway',
          'Body_Purfling_Bottom_Florentine_Cutaway',
        ],
        [EArmBevelOption.Standard]: [
          'Body_Purfling_Top_Arm_Bevel_Florentine_Cutaway',
          'Body_Purfling_Bottom_Florentine_Cutaway',
        ],
      },
      [ECutawayOption.Scalloped]: {
        [EArmBevelOption.None]: ['Body_Purfling_Top_Florentine_Cutaway', 'Body_Purfling_Bottom'],
        [EArmBevelOption.Standard]: [
          'Body_Purfling_Top_Arm_Bevel_Florentine_Cutaway',
          'Body_Purfling_Bottom',
        ],
      },
    },
  },
}
