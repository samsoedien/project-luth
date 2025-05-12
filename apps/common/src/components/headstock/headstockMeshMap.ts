import { GLTFResult as LuthHeadstockGLTF } from '~/_generated/LuthHeadstock'

import { EScaleLengthOption } from '~/models/options.model'

type HeadstockMeshMap = {
  [key in EScaleLengthOption]: Array<keyof LuthHeadstockGLTF['nodes']>
}

export const headstockMeshMap: HeadstockMeshMap = {
  [EScaleLengthOption.Standard]: ['Body_Headstock'],
}
