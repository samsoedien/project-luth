import { GLTFResult as LuthHeadstockGLTF } from '~/_generated/LuthHeadstock'

import {
  EHeadstockShapeOption,
  EHeadstockTypeOption,
  EScaleAsymmetricalOption,
  EScaleLengthOption,
} from '~/models/options.model'

type HeadstockMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EScaleAsymmetricalOption]: {
      [key in EHeadstockTypeOption]: {
        [key in EHeadstockShapeOption]: Array<keyof LuthHeadstockGLTF['nodes']>
      }
    }
  }
}

export const headstockMeshMap: HeadstockMeshMap = {
  [EScaleLengthOption.Standard]: {
    [EScaleAsymmetricalOption.None]: {
      [EHeadstockTypeOption.Solid]: {
        [EHeadstockShapeOption.Standard]: ['Body_Headstock'],
      },
      [EHeadstockTypeOption.Slotted]: {
        [EHeadstockShapeOption.Standard]: ['Body_Headstock'],
      },
    },
  },
  [EScaleLengthOption.Shorter]: {
    [EScaleAsymmetricalOption.None]: {
      [EHeadstockTypeOption.Solid]: {
        [EHeadstockShapeOption.Standard]: ['Body_Headstock'],
      },
      [EHeadstockTypeOption.Slotted]: {
        [EHeadstockShapeOption.Standard]: ['Body_Headstock'],
      },
    },
  },
}
