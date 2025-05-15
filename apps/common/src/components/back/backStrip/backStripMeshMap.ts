import { GLTFResult as LuthBackStripsGLTF } from '~/_generated/LuthBackStrips'
import { EBodyShapeOption, EBackMultiPieceOption, EBodyDepthOption } from '~/models/options.model'

type BackStripMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBodyDepthOption]: {
      [key in EBackMultiPieceOption]: Array<keyof LuthBackStripsGLTF['nodes']>
    }
  }
}

export const backStripMeshMap: BackStripMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [EBodyDepthOption.Standard]: {
      [EBackMultiPieceOption.OnePiece]: [],
      [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Center_Strip'],
      [EBackMultiPieceOption.ThreePiece]: [
        'Body_Back_Double_Strip_Left',
        'Body_Back_Double_Strip_Right__1_',
      ],
    },
    [EBodyDepthOption.Thinline]: {
      [EBackMultiPieceOption.OnePiece]: [],
      [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Center_Strip'],
      [EBackMultiPieceOption.ThreePiece]: [
        'Body_Back_Double_Strip_Left',
        'Body_Back_Double_Strip_Right__1_',
      ],
    },
  },
  [EBodyShapeOption.Parlor]: {
    [EBodyDepthOption.Standard]: {
      [EBackMultiPieceOption.OnePiece]: [],
      [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Center_Strip'],
      [EBackMultiPieceOption.ThreePiece]: [
        'Body_Back_Double_Strip_Left',
        'Body_Back_Double_Strip_Right__1_',
      ],
    },
    [EBodyDepthOption.Thinline]: {
      [EBackMultiPieceOption.OnePiece]: [],
      [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Center_Strip'],
      [EBackMultiPieceOption.ThreePiece]: [
        'Body_Back_Double_Strip_Left',
        'Body_Back_Double_Strip_Right__1_',
      ],
    },
  },
}
