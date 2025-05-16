import { GLTFResult as LuthHeadstockGLTF } from '~/_generated/LuthHeadstock'

import {
  EHeadstockShapeOption,
  EHeadstockTypeOption,
  EScaleAssymetrical,
  EScaleLengthOption,
} from '~/models/options.model'

type HeadstockMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EScaleAssymetrical]: {
      [key in EHeadstockTypeOption]: {
        [key in EHeadstockShapeOption]: Array<keyof LuthHeadstockGLTF['nodes']>
      }
    }
  }
}

export const headstockMeshMap: HeadstockMeshMap = {
  [EScaleLengthOption.Standard]: {
    [EScaleAssymetrical.None]: {
      [EHeadstockTypeOption.Solid]: {
        [EHeadstockShapeOption.Standard]: ['Body_Headstock'],
      },
      [EHeadstockTypeOption.Slotted]: {
        [EHeadstockShapeOption.Standard]: ['Body_Headstock'],
      },
    },
  },
  [EScaleLengthOption.Shorter]: {
    [EScaleAssymetrical.None]: {
      [EHeadstockTypeOption.Solid]: {
        [EHeadstockShapeOption.Standard]: ['Body_Headstock'],
      },
      [EHeadstockTypeOption.Slotted]: {
        [EHeadstockShapeOption.Standard]: ['Body_Headstock'],
      },
    },
  },
}
