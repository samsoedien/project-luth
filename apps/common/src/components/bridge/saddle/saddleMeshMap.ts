import { GLTFResult as LuthSaddleGLTF } from '~/_generated/LuthSaddle'

import { EScaleAssymetrical, EScaleLengthOption } from '~/models/options.model'

type SaddleMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EScaleAssymetrical]: Array<keyof LuthSaddleGLTF['nodes']>
  }
}

export const saddleMeshMap: SaddleMeshMap = {
  [EScaleLengthOption.Standard]: {
    [EScaleAssymetrical.None]: ['Body_Saddle'],
  },
}
