import { GLTFResult as LuthBackGLTF } from '~/_generated/LuthBack'

import {
  EBackMultiPieceOption,
  EBodyShapeOption,
  EBodyDepthOption,
  EBodyCutawayOption,
} from '~/models/options.model'

type BackMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBodyDepthOption]: {
      [key in EBodyCutawayOption]: {
        [key in EBackMultiPieceOption]: Array<keyof LuthBackGLTF['nodes']>
      }
    }
  }
}

export const backMeshMap: BackMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [EBodyDepthOption.Standard]: {
      [EBodyCutawayOption.None]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back'],
        [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Two_Piece_Left', 'Body_Back_Two_Piece_Right'],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Left',
          'Body_Back_Three_Piece_Right',
          'Body_Back_Three_Piece_Middle',
        ],
      },
      [EBodyCutawayOption.Venetian]: {
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
      [EBodyCutawayOption.Florentine]: {
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
      [EBodyCutawayOption.Scalloped]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back'],
        [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Two_Piece_Left', 'Body_Back_Two_Piece_Right'],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Left',
          'Body_Back_Three_Piece_Right',
          'Body_Back_Three_Piece_Middle',
        ],
      },
    },
    [EBodyDepthOption.Thinline]: {
      [EBodyCutawayOption.None]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back'],
        [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Two_Piece_Left', 'Body_Back_Two_Piece_Right'],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Left',
          'Body_Back_Three_Piece_Right',
          'Body_Back_Three_Piece_Middle',
        ],
      },
      [EBodyCutawayOption.Venetian]: {
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
      [EBodyCutawayOption.Florentine]: {
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
      [EBodyCutawayOption.Scalloped]: {
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
    [EBodyDepthOption.Standard]: {
      [EBodyCutawayOption.None]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back'],
        [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Two_Piece_Left', 'Body_Back_Two_Piece_Right'],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Left',
          'Body_Back_Three_Piece_Right',
          'Body_Back_Three_Piece_Middle',
        ],
      },
      [EBodyCutawayOption.Venetian]: {
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
      [EBodyCutawayOption.Florentine]: {
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
      [EBodyCutawayOption.Scalloped]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back'],
        [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Two_Piece_Left', 'Body_Back_Two_Piece_Right'],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Left',
          'Body_Back_Three_Piece_Right',
          'Body_Back_Three_Piece_Middle',
        ],
      },
    },
    [EBodyDepthOption.Thinline]: {
      [EBodyCutawayOption.None]: {
        [EBackMultiPieceOption.OnePiece]: ['Body_Back'],
        [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Two_Piece_Left', 'Body_Back_Two_Piece_Right'],
        [EBackMultiPieceOption.ThreePiece]: [
          'Body_Back_Three_Piece_Left',
          'Body_Back_Three_Piece_Right',
          'Body_Back_Three_Piece_Middle',
        ],
      },
      [EBodyCutawayOption.Venetian]: {
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
      [EBodyCutawayOption.Florentine]: {
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
      [EBodyCutawayOption.Scalloped]: {
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
