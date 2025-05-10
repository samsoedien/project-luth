import { GLTFResult } from '~/_generated/LuthHeelTailBlocks'
import { EBodyShapeOption } from '~/models/options.model'

type HeelTailBlocksMeshMap = {
  [key in EBodyShapeOption]: Array<keyof GLTFResult['nodes']>
}

export const heelTailBlocksMeshMap: HeelTailBlocksMeshMap = {
  [EBodyShapeOption.Dreadnought]: ['Body_Heel_Block004', 'Body_Tail_Block004'],
  [EBodyShapeOption.Parlor]: ['Body_Heel_Block005', 'Body_Tail_Block005'],
}
