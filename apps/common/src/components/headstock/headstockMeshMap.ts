import { GLTFResult as LuthHeadstockGLTF } from '~/_generated/LuthHeadstock'

import {
  EHeadstockShapeOption,
  EScaleAssymetrical,
  EScaleFretHeelJointOption,
  EScaleLengthOption,
} from '~/models/options.model'

type HeadstockMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EScaleAssymetrical]: {
      [key in EScaleFretHeelJointOption]: {
        [key in EHeadstockShapeOption]: Array<keyof LuthHeadstockGLTF['nodes']>
      }
    }
  }
}

export const headstockMeshMap: HeadstockMeshMap = {
  [EScaleLengthOption.Standard]: {
    [EScaleAssymetrical.None]: {
      [EScaleFretHeelJointOption.Fret14]: {
        [EHeadstockShapeOption.Standard]: ['Body_Headstock'],
      },
      [EScaleFretHeelJointOption.Fret12]: {
        [EHeadstockShapeOption.Standard]: ['Body_Headstock'],
      },
    },
    [EScaleAssymetrical.Assymetrical]: {
      [EScaleFretHeelJointOption.Fret14]: {
        [EHeadstockShapeOption.Standard]: ['Body_Headstock'],
      },
      [EScaleFretHeelJointOption.Fret12]: {
        [EHeadstockShapeOption.Standard]: ['Body_Headstock'],
      },
    },
  },
}
