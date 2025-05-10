import { LuthGLTFResultCombined } from '~/models/gltfjsx.model'
import {
  EBackMultiPieceOption,
  EBodyShapeOption,
  EBodyThicknessOption,
  ECutawayOption,
} from '~/models/options.model'

type BackMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBodyThicknessOption]: {
      [key in ECutawayOption]: {
        [key in EBackMultiPieceOption]: Array<keyof LuthGLTFResultCombined['nodes']>
      }
    }
  }
}

export const backMeshMap: BackMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [EBodyThicknessOption.Standard]: {
      [ECutawayOption.None]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back'],
        [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Two_Piece_Left', 'Body_Back_Two_Piece_Right'],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Left',
          'Body_Back_Three_Piece_Right',
          'Body_Back_Three_Piece_Middle',
        ],
      },
      [ECutawayOption.Venetian]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back_Venetian_Cutaway'],
        [EBackMultiPieceOption.TwoPiece]: [
          'Body_Back_Two_Piece_Venetian_Cutaway_Left',
          'Body_Back_Two_Piece_Venetian_Cutaway_Right',
        ],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Venetian_Cutaway_Left',
          'Body_Back_Three_Piece_Venetian_Cutaway_Right',
          'Body_Back_Three_Piece_Venetian_Cutaway_Middle',
        ],
      },
      [ECutawayOption.Florentine]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back_Florentine_Cutaway'],
        [EBackMultiPieceOption.TwoPiece]: [
          'Body_Back_Two_Piece_Florentine_Cutaway_Left',
          'Body_Back_Two_Piece_Florentine_Cutaway_Right',
        ],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Florentine_Cutaway_Left',
          'Body_Back_Three_Piece_Florentine_Cutaway_Right',
          'Body_Back_Three_Piece_Florentine_Cutaway_Middle',
        ],
      },
      [ECutawayOption.Scalloped]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back'],
        [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Two_Piece_Left', 'Body_Back_Two_Piece_Right'],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Left',
          'Body_Back_Three_Piece_Right',
          'Body_Back_Three_Piece_Middle',
        ],
      },
    },
    [EBodyThicknessOption.Thinline]: {
      [ECutawayOption.None]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back'],
        [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Two_Piece_Left', 'Body_Back_Two_Piece_Right'],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Left',
          'Body_Back_Three_Piece_Right',
          'Body_Back_Three_Piece_Middle',
        ],
      },
      [ECutawayOption.Venetian]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back_Venetian_Cutaway'],
        [EBackMultiPieceOption.TwoPiece]: [
          'Body_Back_Two_Piece_Venetian_Cutaway_Left',
          'Body_Back_Two_Piece_Venetian_Cutaway_Right',
        ],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Venetian_Cutaway_Left',
          'Body_Back_Three_Piece_Venetian_Cutaway_Right',
          'Body_Back_Three_Piece_Venetian_Cutaway_Middle',
        ],
      },
      [ECutawayOption.Florentine]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back_Florentine_Cutaway'],
        [EBackMultiPieceOption.TwoPiece]: [
          'Body_Back_Two_Piece_Florentine_Cutaway_Left',
          'Body_Back_Two_Piece_Florentine_Cutaway_Right',
        ],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Florentine_Cutaway_Left',
          'Body_Back_Three_Piece_Florentine_Cutaway_Right',
          'Body_Back_Three_Piece_Florentine_Cutaway_Middle',
        ],
      },
      [ECutawayOption.Scalloped]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back'],
        [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Two_Piece_Left', 'Body_Back_Two_Piece_Right'],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Left',
          'Body_Back_Three_Piece_Right',
          'Body_Back_Three_Piece_Middle',
        ],
      },
    },
  },
  [EBodyShapeOption.Parlor]: {
    [EBodyThicknessOption.Standard]: {
      [ECutawayOption.None]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back'],
        [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Two_Piece_Left', 'Body_Back_Two_Piece_Right'],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Left',
          'Body_Back_Three_Piece_Right',
          'Body_Back_Three_Piece_Middle',
        ],
      },
      [ECutawayOption.Venetian]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back_Venetian_Cutaway'],
        [EBackMultiPieceOption.TwoPiece]: [
          'Body_Back_Two_Piece_Venetian_Cutaway_Left',
          'Body_Back_Two_Piece_Venetian_Cutaway_Right',
        ],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Venetian_Cutaway_Left',
          'Body_Back_Three_Piece_Venetian_Cutaway_Right',
          'Body_Back_Three_Piece_Venetian_Cutaway_Middle',
        ],
      },
      [ECutawayOption.Florentine]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back_Florentine_Cutaway'],
        [EBackMultiPieceOption.TwoPiece]: [
          'Body_Back_Two_Piece_Florentine_Cutaway_Left',
          'Body_Back_Two_Piece_Florentine_Cutaway_Right',
        ],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Florentine_Cutaway_Left',
          'Body_Back_Three_Piece_Florentine_Cutaway_Right',
          'Body_Back_Three_Piece_Florentine_Cutaway_Middle',
        ],
      },
      [ECutawayOption.Scalloped]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back'],
        [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Two_Piece_Left', 'Body_Back_Two_Piece_Right'],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Left',
          'Body_Back_Three_Piece_Right',
          'Body_Back_Three_Piece_Middle',
        ],
      },
    },
    [EBodyThicknessOption.Thinline]: {
      [ECutawayOption.None]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back'],
        [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Two_Piece_Left', 'Body_Back_Two_Piece_Right'],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Left',
          'Body_Back_Three_Piece_Right',
          'Body_Back_Three_Piece_Middle',
        ],
      },
      [ECutawayOption.Venetian]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back_Venetian_Cutaway'],
        [EBackMultiPieceOption.TwoPiece]: [
          'Body_Back_Two_Piece_Venetian_Cutaway_Left',
          'Body_Back_Two_Piece_Venetian_Cutaway_Right',
        ],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Venetian_Cutaway_Left',
          'Body_Back_Three_Piece_Venetian_Cutaway_Right',
          'Body_Back_Three_Piece_Venetian_Cutaway_Middle',
        ],
      },
      [ECutawayOption.Florentine]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back_Florentine_Cutaway'],
        [EBackMultiPieceOption.TwoPiece]: [
          'Body_Back_Two_Piece_Florentine_Cutaway_Left',
          'Body_Back_Two_Piece_Florentine_Cutaway_Right',
        ],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Florentine_Cutaway_Left',
          'Body_Back_Three_Piece_Florentine_Cutaway_Right',
          'Body_Back_Three_Piece_Florentine_Cutaway_Middle',
        ],
      },
      [ECutawayOption.Scalloped]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back'],
        [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Two_Piece_Left', 'Body_Back_Two_Piece_Right'],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Left',
          'Body_Back_Three_Piece_Right',
          'Body_Back_Three_Piece_Middle',
        ],
      },
    },
  },
}
