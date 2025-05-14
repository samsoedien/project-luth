import { GLTFResult as LuthPickguardGLTF } from '~/_generated/LuthPickguard'

import { ESoundboardSoundHoleOption } from '~/models/options.model'

type PickguardMeshMap = {
  [key in ESoundboardSoundHoleOption]: Array<keyof LuthPickguardGLTF['nodes']>
}

export const pickguardMeshMap: PickguardMeshMap = {
  [ESoundboardSoundHoleOption.Standard]: ['Body_Pickguard'],
  [ESoundboardSoundHoleOption.None]: [],
  [ESoundboardSoundHoleOption.FHole]: [],
}
