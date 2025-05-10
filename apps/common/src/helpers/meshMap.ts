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

export { soundboardMeshMap, backMeshMap, bindingMeshMap }

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

export const purflingMeshMap: PurflingMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
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
}

type BackStripMeshMap = Partial<{
  [key in EBodyShapeOption]: {
    [key in EBackMultiPieceOption]: Array<keyof LuthGLTFResultCombined['nodes']>
  }
}>

export const backStripMeshMap: BackStripMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [EBackMultiPieceOption.OnePiece]: [],
    [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Center_Strip'],
    [EBackMultiPieceOption.ThreePiece]: [
      'Body_Back_Double_Strip_Left',
      'Body_Back_Double_Strip_Right_(1)',
    ],
  },
}
