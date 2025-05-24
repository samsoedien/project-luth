import { GLTFResult as LuthEndGraftGLTF } from '~/_generated/LuthEndGraft'

import { EBodyDepthOption, EBodyShapeOption } from '~/models/options.model'

type EndGraftMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBodyDepthOption]: Array<keyof LuthEndGraftGLTF['nodes']>
  }
}

export const endGraftMeshMap: EndGraftMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [EBodyDepthOption.Standard]: ['Body_End_Graft_Wedge'],
    [EBodyDepthOption.Thinline]: ['Body_End_Graft_Wedge'],
  },
  [EBodyShapeOption.Parlor]: {
    [EBodyDepthOption.Standard]: ['Body_End_Graft_Wedge'],
    [EBodyDepthOption.Thinline]: ['Body_End_Graft_Wedge'],
  },
}
