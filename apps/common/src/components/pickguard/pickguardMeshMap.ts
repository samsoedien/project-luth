import { GLTFResult as LuthPickguardGLTF } from '~/_generated/LuthPickguard'

import { EBodyShapeOption } from '~/models/options.model'

type PickguardMeshMap = {
  [key in EBodyShapeOption]: Array<keyof LuthPickguardGLTF['nodes']>
}

export const pickguardMeshMap: PickguardMeshMap = {
  [EBodyShapeOption.Dreadnought]: ['Body_Pickguard'],
  [EBodyShapeOption.Parlor]: ['Body_Pickguard'],
}
