import { GLTFResult } from '~/_generated/LuthHeelTailBlocks'
import { EBodyShapeOption, EHeelJointOption } from '~/models/options.model'

type HeelTailBlocksMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EHeelJointOption]: Array<keyof GLTFResult['nodes']>
  }
}

export const heelTailBlocksMeshMap: HeelTailBlocksMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [EHeelJointOption.Dovetail]: ['Body_Heel_Block004', 'Body_Tail_Block004'],
    [EHeelJointOption.BoltOn]: ['Body_Heel_Block004', 'Body_Tail_Block004'],
  },
  [EBodyShapeOption.Parlor]: {
    [EHeelJointOption.Dovetail]: ['Body_Heel_Block004', 'Body_Tail_Block004'],
    [EHeelJointOption.BoltOn]: ['Body_Heel_Block004', 'Body_Tail_Block004'],
  },
}
