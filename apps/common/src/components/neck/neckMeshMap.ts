import { GLTFResult as LuthNeckGLTF } from '~/_generated/LuthNeck'

import { EScaleLengthOption } from '~/models/options.model'

type NeckMeshMap = {
  [key in EScaleLengthOption]: Array<keyof LuthNeckGLTF['nodes']>
}

export const neckMeshMap: NeckMeshMap = {
  [EScaleLengthOption.Standard]: ['Body_Neck', 'Body_Heel'],
}
