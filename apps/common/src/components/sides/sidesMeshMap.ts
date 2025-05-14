import { GLTFResult as LuthSidesGLTF } from '~/_generated/LuthSides'

import {
  EBodyArmBevelOption,
  EBodyShapeOption,
  EBodyCutawayOption,
  EBodyDepthOption,
  ESidesSoundPortOption,
} from '~/models/options.model'

type SidesboardMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBodyDepthOption]: {
      [key in EBodyCutawayOption]: {
        [key in EBodyArmBevelOption]: {
          [key in ESidesSoundPortOption]: Array<keyof LuthSidesGLTF['nodes']>
        }
      }
    }
  }
}

export const sidesMeshMap: SidesboardMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [EBodyDepthOption.Standard]: {
      [EBodyCutawayOption.None]: {
        [EBodyArmBevelOption.None]: {
          [ESidesSoundPortOption.None]: ['Body_Sides'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides'],
        },
        [EBodyArmBevelOption.Standard]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Arm_Bevel'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Arm_Bevel'],
        },
      },
      [EBodyCutawayOption.Venetian]: {
        [EBodyArmBevelOption.None]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Venetian_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Venetian_Cutaway'],
        },
        [EBodyArmBevelOption.Standard]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Venetian_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Venetian_Cutaway'],
        },
      },
      [EBodyCutawayOption.Florentine]: {
        [EBodyArmBevelOption.None]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Florentine_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Florentine_Cutaway'],
        },
        [EBodyArmBevelOption.Standard]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Arm_Bevel_Florentine_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Arm_Bevel_Florentine_Cutaway'],
        },
      },
      [EBodyCutawayOption.Scalloped]: {
        [EBodyArmBevelOption.None]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Scalloped_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Scalloped_Cutaway'],
        },
        [EBodyArmBevelOption.Standard]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Arm_Bevel_Scalloped_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Arm_Bevel_Scalloped_Cutaway'],
        },
      },
    },
    [EBodyDepthOption.Thinline]: {
      [EBodyCutawayOption.None]: {
        [EBodyArmBevelOption.None]: {
          [ESidesSoundPortOption.None]: ['Body_Sides'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides'],
        },
        [EBodyArmBevelOption.Standard]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Arm_Bevel'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Arm_Bevel'],
        },
      },
      [EBodyCutawayOption.Venetian]: {
        [EBodyArmBevelOption.None]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Venetian_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Venetian_Cutaway'],
        },
        [EBodyArmBevelOption.Standard]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Venetian_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Venetian_Cutaway'],
        },
      },
      [EBodyCutawayOption.Florentine]: {
        [EBodyArmBevelOption.None]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Florentine_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Florentine_Cutaway'],
        },
        [EBodyArmBevelOption.Standard]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Arm_Bevel_Florentine_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Arm_Bevel_Florentine_Cutaway'],
        },
      },
      [EBodyCutawayOption.Scalloped]: {
        [EBodyArmBevelOption.None]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Scalloped_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Scalloped_Cutaway'],
        },
        [EBodyArmBevelOption.Standard]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Arm_Bevel_Scalloped_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Arm_Bevel_Scalloped_Cutaway'],
        },
      },
    },
  },
  [EBodyShapeOption.Parlor]: {
    [EBodyDepthOption.Standard]: {
      [EBodyCutawayOption.None]: {
        [EBodyArmBevelOption.None]: {
          [ESidesSoundPortOption.None]: ['Body_Sides'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides'],
        },
        [EBodyArmBevelOption.Standard]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Arm_Bevel'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Arm_Bevel'],
        },
      },
      [EBodyCutawayOption.Venetian]: {
        [EBodyArmBevelOption.None]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Venetian_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Venetian_Cutaway'],
        },
        [EBodyArmBevelOption.Standard]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Venetian_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Venetian_Cutaway'],
        },
      },
      [EBodyCutawayOption.Florentine]: {
        [EBodyArmBevelOption.None]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Florentine_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Florentine_Cutaway'],
        },
        [EBodyArmBevelOption.Standard]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Arm_Bevel_Florentine_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Arm_Bevel_Florentine_Cutaway'],
        },
      },
      [EBodyCutawayOption.Scalloped]: {
        [EBodyArmBevelOption.None]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Scalloped_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Scalloped_Cutaway'],
        },
        [EBodyArmBevelOption.Standard]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Arm_Bevel_Scalloped_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Arm_Bevel_Scalloped_Cutaway'],
        },
      },
    },
    [EBodyDepthOption.Thinline]: {
      [EBodyCutawayOption.None]: {
        [EBodyArmBevelOption.None]: {
          [ESidesSoundPortOption.None]: ['Body_Sides'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides'],
        },
        [EBodyArmBevelOption.Standard]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Arm_Bevel'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Arm_Bevel'],
        },
      },
      [EBodyCutawayOption.Venetian]: {
        [EBodyArmBevelOption.None]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Venetian_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Venetian_Cutaway'],
        },
        [EBodyArmBevelOption.Standard]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Venetian_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Venetian_Cutaway'],
        },
      },
      [EBodyCutawayOption.Florentine]: {
        [EBodyArmBevelOption.None]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Florentine_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Florentine_Cutaway'],
        },
        [EBodyArmBevelOption.Standard]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Arm_Bevel_Florentine_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Arm_Bevel_Florentine_Cutaway'],
        },
      },
      [EBodyCutawayOption.Scalloped]: {
        [EBodyArmBevelOption.None]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Scalloped_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Scalloped_Cutaway'],
        },
        [EBodyArmBevelOption.Standard]: {
          [ESidesSoundPortOption.None]: ['Body_Sides_Arm_Bevel_Scalloped_Cutaway'],
          [ESidesSoundPortOption.Oval]: ['Body_Sides_Arm_Bevel_Scalloped_Cutaway'],
        },
      },
    },
  },
}
