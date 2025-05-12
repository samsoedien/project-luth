import { GLTFResult } from '~/_generated/LuthRosette'
import { ERosetteVariantOption, ESoundHoleOption } from '~/models/options.model'

type RosetteMeshMap = {
  [key in ESoundHoleOption]: {
    [key in ERosetteVariantOption]: Array<keyof GLTFResult['nodes']>
  }
}

export const rosetteMeshMap: RosetteMeshMap = {
  [ESoundHoleOption.Round]: {
    [ERosetteVariantOption.VariantA]: ['Body_Rosette'],
    [ERosetteVariantOption.VariantB]: ['Body_Rosette_Half'],
  },
  [ESoundHoleOption.FHole]: {
    [ERosetteVariantOption.VariantA]: [],
    [ERosetteVariantOption.VariantB]: [],
  },
  [ESoundHoleOption.None]: {
    [ERosetteVariantOption.VariantA]: [],
    [ERosetteVariantOption.VariantB]: [],
  },
}
