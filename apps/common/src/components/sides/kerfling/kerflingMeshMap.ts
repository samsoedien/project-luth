import { GLTFResult as LuthPickguardGLTF } from '~/_generated/LuthPickguard'

import {
  EBodyArmBevelOption,
  EBodyCutawayOption,
  EBodyDepthOption,
  EBodyShapeOption,
  EKerflingVariant,
} from '~/models/options.model'

type KerflingMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBodyDepthOption]: {
      [key in EBodyCutawayOption]: {
        [key in EBodyArmBevelOption]: {
          [key in EKerflingVariant]: Array<keyof LuthPickguardGLTF['nodes']>
        }
      }
    }
  }
}

export const kerflingMeshMap: KerflingMeshMap = {}
