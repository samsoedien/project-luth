import { GLTFResult as LuthPickguardGLTF } from '~/_generated/LuthPickguard'

import { EPickguardShapeOption, ESoundboardSoundHoleOption } from '~/models/options.model'

type PickguardMeshMap = {
  [key in ESoundboardSoundHoleOption]: {
    [key in EPickguardShapeOption]: Array<keyof LuthPickguardGLTF['nodes']>
  }
}

export const pickguardMeshMap: PickguardMeshMap = {
  [ESoundboardSoundHoleOption.Standard]: {
    [EPickguardShapeOption.Standard]: ['Body_Pickguard'],
    [EPickguardShapeOption.None]: [],
  },
  [ESoundboardSoundHoleOption.None]: {
    [EPickguardShapeOption.Standard]: [],
    [EPickguardShapeOption.None]: [],
  },
  [ESoundboardSoundHoleOption.FHole]: {
    [EPickguardShapeOption.Standard]: [],
    [EPickguardShapeOption.None]: [],
  },
}
