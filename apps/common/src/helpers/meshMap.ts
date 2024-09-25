import { GLTFResult } from '~/_generated/LuthAcousticDreadnaught'
import {
  EArmBevelOption,
  EBackMultiPieceOption,
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
      [EArmBevelOption.None]: ['Body_Soundboard'],
      [EArmBevelOption.Standard]: ['Body_Soundboard_Arm_Bevel'],
    },
    [ECutawayOption.Venetian]: {
      [EArmBevelOption.None]: ['Body_Soundboard_Venetian_Cutaway'],
      [EArmBevelOption.Standard]: ['Body_Soundboard_Arm_Bevel_Cutaway_Venetian'],
    },
    [ECutawayOption.Florentine]: {
      [EArmBevelOption.None]: ['Body_Soundboard_Florentine_Cutaway'],
      [EArmBevelOption.Standard]: ['Body_Soundboard_Arm_Bevel_Cutaway_Florentine'],
    },
    [ECutawayOption.Scalloped]: {
      [EArmBevelOption.None]: ['Body_Soundboard_Florentine_Cutaway'],
      [EArmBevelOption.Standard]: ['Body_Soundboard_Arm_Bevel_Cutaway_Florentine'],
    },
  },
  [EBodyShapeOption.OM]: {
    [ECutawayOption.None]: {
      [EArmBevelOption.None]: ['Body_Soundboard'],
      [EArmBevelOption.Standard]: ['Body_Soundboard_Arm_Bevel'],
    },
    [ECutawayOption.Venetian]: {
      [EArmBevelOption.None]: ['Body_Soundboard_Venetian_Cutaway'],
      [EArmBevelOption.Standard]: ['Body_Soundboard_Arm_Bevel_Cutaway_Venetian'],
    },
    [ECutawayOption.Florentine]: {
      [EArmBevelOption.None]: ['Body_Soundboard_Florentine_Cutaway'],
      [EArmBevelOption.Standard]: ['Body_Soundboard_Arm_Bevel_Cutaway_Florentine'],
    },
    [ECutawayOption.Scalloped]: {
      [EArmBevelOption.None]: ['Body_Soundboard_Florentine_Cutaway'],
      [EArmBevelOption.Standard]: ['Body_Soundboard_Arm_Bevel_Cutaway_Florentine'],
    },
  },
}

type BackMeshMap = Partial<{
  [key in EBodyShapeOption]: {
    [key in ECutawayOption]: {
      [key in EBackMultiPieceOption]: Array<keyof GLTFResult['nodes']>
    }
  }
}>

export const backMeshMap: BackMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [ECutawayOption.None]: {
      [EBackMultiPieceOption.OnePiece]: ['Body_Back'],
      [EBackMultiPieceOption.TwoPiece]: ['Body_Back_2Piece_Left', 'Body_Back_2Piece_Right'],
      [EBackMultiPieceOption.ThreePiece]: [
        'Body_Back_3Piece_Left',
        'Body_Back_3Piece_Right',
        'Body_Back_3Piece_Middle',
      ],
    },
    [ECutawayOption.Venetian]: {
      [EBackMultiPieceOption.OnePiece]: ['Body_Back_Venetian_Cutaway'],
      [EBackMultiPieceOption.TwoPiece]: [
        'Body_Back_2Piece_Venetian_Cutaway_Left',
        'Body_Back_2Piece_Venetian_Cutaway_Right',
      ],
      [EBackMultiPieceOption.ThreePiece]: [
        'Body_Back_3Piece_Venetian_Cutaway_Left',
        'Body_Back_3Piece_Venetian_Cutaway_Right',
        'Body_Back_3Piece_Venetian_Cutaway_Middle',
      ],
    },
    [ECutawayOption.Florentine]: {
      [EBackMultiPieceOption.OnePiece]: ['Body_Back_Florentine_Cutaway'],
      [EBackMultiPieceOption.TwoPiece]: [
        'Body_Back_2Piece_Florentine_Cutaway_Left',
        'Body_Back_2Piece_Florentine_Cutaway_Right',
      ],
      [EBackMultiPieceOption.ThreePiece]: [
        'Body_Back_3Piece_Florentine_Cutaway_Left',
        'Body_Back_3Piece_Florentine_Cutaway_Right',
        'Body_Back_3Piece_Florentine_Cutaway_Middle',
      ],
    },
    [ECutawayOption.Scalloped]: {
      [EBackMultiPieceOption.OnePiece]: ['Body_Back'],
      [EBackMultiPieceOption.TwoPiece]: ['Body_Back_2Piece_Left', 'Body_Back_2Piece_Right'],
      [EBackMultiPieceOption.ThreePiece]: [
        'Body_Back_3Piece_Left',
        'Body_Back_3Piece_Right',
        'Body_Back_3Piece_Middle',
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
      [EArmBevelOption.None]: ['Body_Binding_Top', 'Body_Binding_Bottom'],
      [EArmBevelOption.Standard]: ['Body_Binding_Top_Arm_Bevel', 'Body_Binding_Bottom'],
    },
    [ECutawayOption.Venetian]: {
      [EArmBevelOption.None]: [
        'Body_Binding_Top_Venetian_Cutaway',
        'Body_Binding_Bottom_Venetian_Cutaway',
      ],
      [EArmBevelOption.Standard]: [
        'Body_Binding_Top_Arm_Bevel_Venetian_Cutaway',
        'Body_Binding_Bottom_Venetian_Cutaway',
      ],
    },
    [ECutawayOption.Florentine]: {
      [EArmBevelOption.None]: [
        'Body_Binding_Top_Florentine_Cutaway',
        'Body_Binding_Bottom_Florentine_Cutaway',
      ],
      [EArmBevelOption.Standard]: [
        'Body_Binding_Top_Arm_Bevel_Florentine_Cutaway',
        'Body_Binding_Bottom_Florentine_Cutaway',
      ],
    },
    [ECutawayOption.Scalloped]: {
      [EArmBevelOption.None]: ['Body_Binding_Top_Florentine_Cutaway', 'Body_Binding_Bottom'],
      [EArmBevelOption.Standard]: [
        'Body_Binding_Top_Arm_Bevel_Florentine_Cutaway',
        'Body_Binding_Bottom',
      ],
    },
  },
}

type BackStripMeshMap = Partial<{
  [key in EBodyShapeOption]: {
    [key in ECutawayOption]: {
      [key in EBackMultiPieceOption]: Array<keyof GLTFResult['nodes']>
    }
  }
}>

export const backStripMeshMap: BackStripMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [ECutawayOption.None]: {
      [EBackMultiPieceOption.OnePiece]: [],
      [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Center_Strip'],
      [EBackMultiPieceOption.ThreePiece]: [
        'Body_Back_Double_Strip_Left',
        'Body_Back_Double_Strip_Right_(1)',
      ],
    },
    [ECutawayOption.Venetian]: {
      [EBackMultiPieceOption.OnePiece]: [],
      [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Center_Strip'],
      [EBackMultiPieceOption.ThreePiece]: [
        'Body_Back_Double_Strip_Left',
        'Body_Back_Double_Strip_Right_(1)',
      ],
    },
    [ECutawayOption.Florentine]: {
      [EBackMultiPieceOption.OnePiece]: [],
      [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Center_Strip'],
      [EBackMultiPieceOption.ThreePiece]: [
        'Body_Back_Double_Strip_Left',
        'Body_Back_Double_Strip_Right_(1)',
      ],
    },
    [ECutawayOption.Scalloped]: {
      [EBackMultiPieceOption.OnePiece]: [],
      [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Center_Strip'],
      [EBackMultiPieceOption.ThreePiece]: [
        'Body_Back_Double_Strip_Left',
        'Body_Back_Double_Strip_Right_(1)',
      ],
    },
  },
}
