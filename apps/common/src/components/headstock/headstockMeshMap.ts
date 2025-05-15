import { GLTFResult as LuthHeadstockGLTF } from '~/_generated/LuthHeadstock'

import {
  EHeadstockShapeOption,
  EScaleAssymetrical,
  EScaleLengthOption,
} from '~/models/options.model'

type HeadstockMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EScaleAssymetrical]: {
      [key in EHeadstockShapeOption]: Array<keyof LuthHeadstockGLTF['nodes']>
    }
  }
}

export const headstockMeshMap: HeadstockMeshMap = {
  [EScaleLengthOption.Standard]: {
    [EScaleAssymetrical.None]: {
      [EHeadstockShapeOption.Standard]: ['Body_Headstock'],
    },
  },
}
