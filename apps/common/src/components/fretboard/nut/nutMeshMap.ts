import { GLTFResult as LuthNutGLTF } from '~/_generated/LuthNut'

import { EScaleAsymmetricalOption, EScaleLengthOption } from '~/models/options.model'

type NutMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EScaleAsymmetricalOption]: Array<keyof LuthNutGLTF['nodes']>
  }
}

export const nutMeshMap: NutMeshMap = {
  [EScaleLengthOption.Standard]: {
    [EScaleAsymmetricalOption.None]: ['Body_Nut001'],
    [EScaleAsymmetricalOption.FannedFrets]: ['Body_Nut001'],
  },
  [EScaleLengthOption.Shorter]: {
    [EScaleAsymmetricalOption.None]: ['Body_Nut001'],
    [EScaleAsymmetricalOption.FannedFrets]: ['Body_Nut001'],
  },
}
