import { GLTFResult as LuthSaddleGLTF } from '~/_generated/LuthSaddle'

import { EScaleAsymmetricalOption, EScaleLengthOption } from '~/models/options.model'

type SaddleMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EScaleAsymmetricalOption]: Array<keyof LuthSaddleGLTF['nodes']>
  }
}

export const saddleMeshMap: SaddleMeshMap = {
  [EScaleLengthOption.Standard]: {
    [EScaleAsymmetricalOption.None]: ['Body_Saddle'],
  },
  [EScaleLengthOption.Shorter]: {
    [EScaleAsymmetricalOption.None]: ['Body_Saddle'],
  },
}
