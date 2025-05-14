import { LuthGLTFResultCombined } from '~/models/gltfjsx.model'
import { EBodyShapeOption, EBackMultiPieceOption, EBodyDepthOption } from '~/models/options.model'

type BackStripMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBodyDepthOption]: {
      [key in EBackMultiPieceOption]: Array<keyof LuthGLTFResultCombined['nodes']>
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
        'Body_Back_Double_Strip_Right_(1)',
      ],
    },
    [EBodyDepthOption.Thinline]: {
      [EBackMultiPieceOption.OnePiece]: [],
      [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Center_Strip'],
      [EBackMultiPieceOption.ThreePiece]: [
        'Body_Back_Double_Strip_Left',
        'Body_Back_Double_Strip_Right_(1)',
      ],
    },
  },
  [EBodyShapeOption.Parlor]: {
    [EBodyDepthOption.Standard]: {
      [EBackMultiPieceOption.OnePiece]: [],
      [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Center_Strip'],
      [EBackMultiPieceOption.ThreePiece]: [
        'Body_Back_Double_Strip_Left',
        'Body_Back_Double_Strip_Right_(1)',
      ],
    },
    [EBodyDepthOption.Thinline]: {
      [EBackMultiPieceOption.OnePiece]: [],
      [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Center_Strip'],
      [EBackMultiPieceOption.ThreePiece]: [
        'Body_Back_Double_Strip_Left',
        'Body_Back_Double_Strip_Right_(1)',
      ],
    },
  },
}
