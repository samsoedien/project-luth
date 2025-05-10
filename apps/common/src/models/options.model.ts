import { LuthGLTFResultCombined } from './gltfjsx.model'

export enum EBodyShapeOption {
  Dreadnought = 'Dreadnought',
  // GrandConcert = 'GrandConcert',
  // Auditorium = 'Auditorium',
  // Jumbo = 'Jumbo',
  // OM = 'OM',
  Parlor = 'Parlor',
}

export enum EBodyDepthOption {
  Standard = 'Standard',
  Thinline = 'Thinline',
}

export enum ECutawayOption {
  None = 'None',
  Venetian = 'Venetian',
  Florentine = 'Florentine',
  Scalloped = 'Scalloped',
}

export enum EScaleLengthOption {
  Standard = 'Standard',
}

export enum EArmBevelOption {
  None = 'None',
  Standard = 'Standard',
}

export enum EBackMultiPieceOption {
  OnePiece = 'OnePiece',
  TwoPiece = 'TwoPiece',
  ThreePiece = 'ThreePiece',
}

export enum ESoundHoleOption {
  None = 'None',
  Round = 'Round',
  FHole = 'FHole',
}

export enum ETonewoodOption {
  Mahogany = 'Mahogany',
}

type SoundboardMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBodyDepthOption]: {
      [key in ECutawayOption]: {
        [key in EArmBevelOption]: {
          [key in ESoundHoleOption]: Array<keyof LuthGLTFResultCombined['nodes']>
        }
      }
    }
  }
}

export enum EStringCountOption {
  Six = 'Six',
}
