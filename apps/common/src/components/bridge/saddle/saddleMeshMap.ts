import { GLTFResult as LuthSaddleGLTF } from '~/_generated/LuthSaddle'

import {
  EScaleAssymetrical,
  EScaleFretHeelJointOption,
  EScaleLengthOption,
} from '~/models/options.model'

type SaddleMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EScaleAssymetrical]: {
      [key in EScaleFretHeelJointOption]: Array<keyof LuthSaddleGLTF['nodes']>
    }
  }
}

export const saddleMeshMap: SaddleMeshMap = {
  [EScaleLengthOption.Standard]: {
    [EScaleAssymetrical.None]: {
      [EScaleFretHeelJointOption.Fret14]: ['Body_Saddle'],
      [EScaleFretHeelJointOption.Fret12]: ['Body_Saddle'],
    },
    [EScaleAssymetrical.Assymetrical]: {
      [EScaleFretHeelJointOption.Fret14]: ['Body_Saddle'],
      [EScaleFretHeelJointOption.Fret12]: ['Body_Saddle'],
    },
  },
}
