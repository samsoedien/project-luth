import { GLTFResult } from '~/_generated/LuthHeelTailBlocks'
import { EBodyDepthOption, EBodyShapeOption, EHeelJointOption } from '~/models/options.model'

type HeelTailBlocksMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBodyDepthOption]: {
      [key in EHeelJointOption]: Array<keyof GLTFResult['nodes']>
    }
  }
}

export const heelTailBlocksMeshMap: HeelTailBlocksMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [EBodyDepthOption.Standard]: {
      [EHeelJointOption.Dovetail]: ['Body_Heel_Block004', 'Body_Tail_Block004'],
      [EHeelJointOption.BoltOn]: ['Body_Heel_Block004', 'Body_Tail_Block004'],
    },
    [EBodyDepthOption.Thinline]: {
      [EHeelJointOption.Dovetail]: ['Body_Heel_Block004', 'Body_Tail_Block004'],
      [EHeelJointOption.BoltOn]: ['Body_Heel_Block004', 'Body_Tail_Block004'],
    },
  },
  [EBodyShapeOption.Parlor]: {
    [EBodyDepthOption.Standard]: {
      [EHeelJointOption.Dovetail]: ['Body_Heel_Block004', 'Body_Tail_Block004'],
      [EHeelJointOption.BoltOn]: ['Body_Heel_Block004', 'Body_Tail_Block004'],
    },
    [EBodyDepthOption.Thinline]: {
      [EHeelJointOption.Dovetail]: ['Body_Heel_Block004', 'Body_Tail_Block004'],
      [EHeelJointOption.BoltOn]: ['Body_Heel_Block004', 'Body_Tail_Block004'],
    },
  },
}
