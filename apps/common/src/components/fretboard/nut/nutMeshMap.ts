import { GLTFResult as LuthNutGLTF } from '~/_generated/LuthNut'

import {
  EScaleAssymetrical,
  EScaleFretHeelJointOption,
  EScaleLengthOption,
} from '~/models/options.model'

type NutMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EScaleAssymetrical]: {
      [key in EScaleFretHeelJointOption]: Array<keyof LuthNutGLTF['nodes']>
    }
  }
}

export const nutMeshMap: NutMeshMap = {
  [EScaleLengthOption.Standard]: {
    [EScaleAssymetrical.None]: {
      [EScaleFretHeelJointOption.Fret14]: ['Body_Nut001'],
      [EScaleFretHeelJointOption.Fret12]: ['Body_Nut001'],
    },
    [EScaleAssymetrical.Assymetrical]: {
      [EScaleFretHeelJointOption.Fret14]: ['Body_Nut001'],
      [EScaleFretHeelJointOption.Fret12]: ['Body_Nut001'],
    },
  },
}
