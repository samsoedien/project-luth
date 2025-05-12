import { GLTFResult as LuthSidesGLTF } from '~/_generated/LuthSides'

import { EArmBevelOption, EBodyShapeOption, ECutawayOption } from '~/models/options.model'

type SidesboardMeshMap = Partial<{
  [key in EBodyShapeOption]: {
    [key in ECutawayOption]: {
      [key in EArmBevelOption]: Array<keyof LuthSidesGLTF['nodes']>
    }
  }
}>

export const sidesMeshMap: SidesboardMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [ECutawayOption.None]: {
      [EArmBevelOption.None]: ['Body_Sides'],
      [EArmBevelOption.Standard]: ['Body_Sides_Arm_Bevel'],
    },
    [ECutawayOption.Venetian]: {
      [EArmBevelOption.None]: ['Body_Sides_Venetian_Cutaway'],
      [EArmBevelOption.Standard]: ['Body_Sides_Arm_Bevel_Venetian_Cutaway'],
    },
    [ECutawayOption.Florentine]: {
      [EArmBevelOption.None]: ['Body_Sides_Florentine_Cutaway'],
      [EArmBevelOption.Standard]: ['Body_Sides_Arm_Bevel_Florentine_Cutaway'],
    },
    [ECutawayOption.Scalloped]: {
      [EArmBevelOption.None]: ['Body_Sides_Scalloped_Cutaway'],
      [EArmBevelOption.Standard]: ['Body_Sides_Arm_Bevel_Scalloped_Cutaway'],
    },
  },
}
