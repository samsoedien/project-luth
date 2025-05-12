import { LuthGLTFResultCombined } from '~/models/gltfjsx.model'
import { EBodyShapeOption, EBackMultiPieceOption } from '~/models/options.model'

type BackStripMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBackMultiPieceOption]: Array<keyof LuthGLTFResultCombined['nodes']>
  }
}

export const backStripMeshMap: BackStripMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [EBackMultiPieceOption.OnePiece]: [],
    [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Center_Strip'],
    [EBackMultiPieceOption.ThreePiece]: [
      'Body_Back_Double_Strip_Left',
      'Body_Back_Double_Strip_Right_(1)',
    ],
  },
  [EBodyShapeOption.Parlor]: {
    [EBackMultiPieceOption.OnePiece]: [],
    [EBackMultiPieceOption.TwoPiece]: ['Body_Back_Center_Strip'],
    [EBackMultiPieceOption.ThreePiece]: [
      'Body_Back_Double_Strip_Left',
      'Body_Back_Double_Strip_Right_(1)',
    ],
  },
}
