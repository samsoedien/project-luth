import { GLTFResult as LuthStringsGLTF } from '~/_generated/LuthStrings'

import { EScaleLengthOption } from '~/models/options.model'

type StringsMeshMap = {
  [key in EScaleLengthOption]: Array<keyof LuthStringsGLTF['nodes']>
}

export const stringsMeshMap: StringsMeshMap = {
  [EScaleLengthOption.Standard]: [
    'Body_String_LowE',
    'Body_String_A',
    'Body_String_D',
    'Body_String_G',
    'Body_String_B',
    'Body_String_HighE',
  ],
}
