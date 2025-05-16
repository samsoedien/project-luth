import { GLTFResult as LuthNutGLTF } from '~/_generated/LuthNut'

import { EScaleAssymetrical, EScaleLengthOption } from '~/models/options.model'

type NutMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EScaleAssymetrical]: Array<keyof LuthNutGLTF['nodes']>
  }
}

export const nutMeshMap: NutMeshMap = {
  [EScaleLengthOption.Standard]: {
    [EScaleAssymetrical.None]: ['Body_Nut001'],
  },
  [EScaleLengthOption.Shorter]: {
    [EScaleAssymetrical.None]: ['Body_Nut001'],
  },
}
