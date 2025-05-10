// import { GLTFResult } from '~/_generated/LuthAcoustic'
import { LuthGLTFResultCombined } from '~/models/gltfjsx.model'
import {
  EArmBevelOption,
  EBackMultiPieceOption,
  EBodyShapeOption,
  ECutawayOption,
  ESoundHoleOption,
} from '~/models/options.model'

import { soundboardMeshMap } from './meshmaps/soundboardMeshMap'
import { backMeshMap } from './meshmaps/backMeshMap'
import { bindingMeshMap } from './meshmaps/bindingMeshMap'
import { purflingMeshMap } from './meshmaps/purflingMeshMap'
import { bracesMeshMap } from './meshmaps/bracesMeshMap'
import { heelTailBlocksMeshMap } from './meshmaps/heelTailBlocksMeshMap'
import { backStripMeshMap } from './meshmaps/backStripMeshMap'

export {
  soundboardMeshMap,
  backMeshMap,
  backStripMeshMap,
  bindingMeshMap,
  bracesMeshMap,
  heelTailBlocksMeshMap,
  purflingMeshMap,
}

type SidesboardMeshMap = Partial<{
  [key in EBodyShapeOption]: {
    [key in ECutawayOption]: {
      [key in EArmBevelOption]: Array<keyof LuthGLTFResultCombined['nodes']>
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
