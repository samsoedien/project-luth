import { GLTFResult as LuthBridgeGLTF } from '~/_generated/LuthBridge'

import { EScaleLengthOption } from '~/models/options.model'

type BridgeMeshMap = {
  [key in EScaleLengthOption]: Array<keyof LuthBridgeGLTF['nodes']>
}

export const bridgeMeshMap: BridgeMeshMap = {
  [EScaleLengthOption.Standard]: ['Body_Bridge'],
}
