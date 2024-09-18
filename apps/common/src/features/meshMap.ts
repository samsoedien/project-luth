import { GLTFResult } from '~/_generated/LuthAcousticDreadnaught'
import {
  EArmBevelOption,
  EBackMultiPiece,
  EBodyShapeOption,
  ECutawayOption,
} from '~/models/options.model'

// Define the types for soundboardMeshMap
type SoundboardMeshMap = Partial<{
  [key in EBodyShapeOption]: {
    [key in ECutawayOption]: {
      [key in EArmBevelOption]: Array<keyof GLTFResult['nodes']>
    }
  }
}>

export const soundboardMeshMap: SoundboardMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [ECutawayOption.None]: {
      [EArmBevelOption.None]: ['Body_Soundboard_1'],
      [EArmBevelOption.Standard]: ['Body_Soundboard_Arm_Bevel_1'],
    },
    [ECutawayOption.Venetian]: {
      [EArmBevelOption.None]: ['Body_Soundboard_Venetian_Cutaway_1'],
      [EArmBevelOption.Standard]: ['Body_Soundboard_Arm_Bevel_Cutaway_Venetian_1'],
    },
    [ECutawayOption.Florentine]: {
      [EArmBevelOption.None]: ['Body_Soundboard_Florentine_Cutaway_1'],
      [EArmBevelOption.Standard]: ['Body_Soundboard_Arm_Bevel_Cutaway_Florentine_1'],
    },
    [ECutawayOption.Scalloped]: {
      [EArmBevelOption.None]: ['Body_Soundboard_Florentine_Cutaway_1'],
      [EArmBevelOption.Standard]: ['Body_Soundboard_Arm_Bevel_Cutaway_Florentine_1'],
    },
  },
  [EBodyShapeOption.OM]: {
    [ECutawayOption.None]: {
      [EArmBevelOption.None]: ['Body_Soundboard_1'],
      [EArmBevelOption.Standard]: ['Body_Soundboard_Arm_Bevel_1'],
    },
    [ECutawayOption.Venetian]: {
      [EArmBevelOption.None]: ['Body_Soundboard_Venetian_Cutaway_1'],
      [EArmBevelOption.Standard]: ['Body_Soundboard_Arm_Bevel_Cutaway_Venetian_1'],
    },
    [ECutawayOption.Florentine]: {
      [EArmBevelOption.None]: ['Body_Soundboard_Florentine_Cutaway_1'],
      [EArmBevelOption.Standard]: ['Body_Soundboard_Arm_Bevel_Cutaway_Florentine_1'],
    },
    [ECutawayOption.Scalloped]: {
      [EArmBevelOption.None]: ['Body_Soundboard_Florentine_Cutaway_1'],
      [EArmBevelOption.Standard]: ['Body_Soundboard_Arm_Bevel_Cutaway_Florentine_1'],
    },
  },
}

type BackMeshMap = Partial<{
  [key in EBodyShapeOption]: {
    [key in ECutawayOption]: {
      [key in EBackMultiPiece]: Array<keyof GLTFResult['nodes']>
    }
  }
}>

export const backMeshMap: BackMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [ECutawayOption.None]: {
      [EBackMultiPiece.OnePiece]: ['Body_Back_1'],
      [EBackMultiPiece.TwoPiece]: ['Body_Back_2Piece_Left_1', 'Body_Back_2Piece_Right_1'],
      [EBackMultiPiece.ThreePiece]: [
        'Body_Back_3Piece_Left_1',
        'Body_Back_3Piece_Right_1',
        'Body_Back_3Piece_Middle_1',
      ],
    },
    [ECutawayOption.Venetian]: {
      [EBackMultiPiece.OnePiece]: ['Body_Back_Venetian_Cutaway_1'],
      [EBackMultiPiece.TwoPiece]: [
        'Body_Back_2Piece_Venetian_Cutaway_Left_1',
        'Body_Back_2Piece_Venetian_Cutaway_Right_1',
      ],
      [EBackMultiPiece.ThreePiece]: [
        'Body_Back_3Piece_Venetian_Cutaway_Left_1',
        'Body_Back_3Piece_Venetian_Cutaway_Right_1',
        'Body_Back_3Piece_Venetian_Cutaway_Middle_1',
      ],
    },
    [ECutawayOption.Florentine]: {
      [EBackMultiPiece.OnePiece]: ['Body_Back_Florentine_Cutaway_1'],
      [EBackMultiPiece.TwoPiece]: [
        'Body_Back_2Piece_Florentine_Cutaway_Left_1',
        'Body_Back_2Piece_Florentine_Cutaway_Right_1',
      ],
      [EBackMultiPiece.ThreePiece]: [
        'Body_Back_3Piece_Florentine_Cutaway_Left_1',
        'Body_Back_3Piece_Florentine_Cutaway_Right_1',
        'Body_Back_3Piece_Florentine_Cutaway_Middle_1',
      ],
    },
    [ECutawayOption.Scalloped]: {
      [EBackMultiPiece.OnePiece]: ['Body_Back_1'],
      [EBackMultiPiece.TwoPiece]: ['Body_Back_2Piece_Left_1', 'Body_Back_2Piece_Right_1'],
      [EBackMultiPiece.ThreePiece]: [
        'Body_Back_3Piece_Left_1',
        'Body_Back_3Piece_Right_1',
        'Body_Back_3Piece_Middle_1',
      ],
    },
  },
}

type SidesboardMeshMap = Partial<{
  [key in EBodyShapeOption]: {
    [key in ECutawayOption]: {
      [key in EArmBevelOption]: Array<keyof GLTFResult['nodes']>
    }
  }
}>

export const sidesMeshMap: SidesboardMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [ECutawayOption.None]: {
      [EArmBevelOption.None]: ['Body_Sides_1'],
      [EArmBevelOption.Standard]: ['Body_Sides_Arm_Bevel_1'],
    },
    [ECutawayOption.Venetian]: {
      [EArmBevelOption.None]: ['Body_Sides_Venetian_Cutaway_1'],
      [EArmBevelOption.Standard]: ['Body_Sides_Arm_Bevel_Venetian_Cutaway_1'],
    },
    [ECutawayOption.Florentine]: {
      [EArmBevelOption.None]: ['Body_Sides_Florentine_Cutaway_1'],
      [EArmBevelOption.Standard]: ['Body_Sides_Arm_Bevel_Florentine_Cutaway_1'],
    },
    [ECutawayOption.Scalloped]: {
      [EArmBevelOption.None]: ['Body_Sides_Scalloped_Cutaway_1'],
      [EArmBevelOption.Standard]: ['Body_Sides_Arm_Bevel_Scalloped_Cutaway_1'],
    },
  },
}

type BindingdMeshMap = Partial<{
  [key in EBodyShapeOption]: {
    [key in ECutawayOption]: {
      [key in EArmBevelOption]: Array<keyof GLTFResult['nodes']>
    }
  }
}>

export const bindingMeshMap: BindingdMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [ECutawayOption.None]: {
      [EArmBevelOption.None]: ['Body_Binding_Top_1', 'Body_Binding_Bottom_1'],
      [EArmBevelOption.Standard]: ['Body_Binding_Top_Arm_Bevel_1', 'Body_Binding_Bottom_1'],
    },
    [ECutawayOption.Venetian]: {
      [EArmBevelOption.None]: [
        'Body_Binding_Top_Venetian_Cutaway_1',
        'Body_Binding_Bottom_Venetian_Cutaway_1',
      ],
      [EArmBevelOption.Standard]: [
        'Body_Binding_Top_Arm_Bevel_Venetian_Cutaway_1',
        'Body_Binding_Bottom_Venetian_Cutaway_1',
      ],
    },
    [ECutawayOption.Florentine]: {
      [EArmBevelOption.None]: [
        'Body_Binding_Top_Florentine_Cutaway_1',
        'Body_Binding_Bottom_Florentine_Cutaway_1',
      ],
      [EArmBevelOption.Standard]: [
        'Body_Binding_Top_Arm_Bevel_Florentine_Cutaway_1',
        'Body_Binding_Bottom_Florentine_Cutaway_1',
      ],
    },
    [ECutawayOption.Scalloped]: {
      [EArmBevelOption.None]: ['Body_Binding_Top_Florentine_Cutaway_1', 'Body_Binding_Bottom_1'],
      [EArmBevelOption.Standard]: [
        'Body_Binding_Top_Arm_Bevel_Florentine_Cutaway_1',
        'Body_Binding_Bottom_1',
      ],
    },
  },
}
