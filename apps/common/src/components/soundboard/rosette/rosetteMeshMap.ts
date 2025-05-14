import { GLTFResult } from '~/_generated/LuthRosette'
import { ERosetteVariantOption, ESoundboardSoundHoleOption } from '~/models/options.model'

type RosetteMeshMap = {
  [key in ESoundboardSoundHoleOption]: {
    [key in ERosetteVariantOption]: Array<keyof GLTFResult['nodes']>
  }
}

export const rosetteMeshMap: RosetteMeshMap = {
  [ESoundboardSoundHoleOption.Standard]: {
    [ERosetteVariantOption.VariantA]: ['Body_Rosette'],
    [ERosetteVariantOption.VariantB]: ['Body_Rosette_Half'],
  },
  [ESoundboardSoundHoleOption.FHole]: {
    [ERosetteVariantOption.VariantA]: [],
    [ERosetteVariantOption.VariantB]: [],
  },
  [ESoundboardSoundHoleOption.None]: {
    [ERosetteVariantOption.VariantA]: [],
    [ERosetteVariantOption.VariantB]: [],
  },
}
