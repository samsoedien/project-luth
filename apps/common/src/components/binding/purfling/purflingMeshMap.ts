import { GLTFResult as LuthPurfllingGLTF } from '~/_generated/LuthPurfling'

import {
  EBodyArmBevelOption,
  EBodyDepthOption,
  EBodyShapeOption,
  EBodyCutawayOption,
  EPurflingVariantOption,
} from '~/models/options.model'

type PurflingMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBodyDepthOption]: {
      [key in EBodyCutawayOption]: {
        [key in EBodyArmBevelOption]: {
          [key in EPurflingVariantOption]: Array<keyof LuthPurfllingGLTF['nodes']>
        }
      }
    }
  }
}

export const purflingMeshMap: PurflingMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [EBodyDepthOption.Standard]: {
      [EBodyCutawayOption.None]: {
        [EBodyArmBevelOption.None]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top', 'Purfling_Bottom'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top', 'Purfling_Bottom'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top_CW_None_AB_Std', 'Purfling_Bottom'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top_CW_None_AB_Std', 'Purfling_Bottom'],
        },
      },
      [EBodyCutawayOption.Venetian]: {
        [EBodyArmBevelOption.None]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top_CW_Vene', 'Purfling_Top_CW_Vene'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top_CW_Vene', 'Purfling_Top_CW_Vene'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
        },
      },
      [EBodyCutawayOption.Florentine]: {
        [EBodyArmBevelOption.None]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Bottom_CW_Flor'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Bottom_CW_Flor'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EPurflingVariantOption.Standard]: [
            'Purfling_Top_CW_Flor_AB_Std',
            'Purfling_Bottom_CW_Flor',
          ],

          [EPurflingVariantOption.Herringbone]: [
            'Purfling_Top_CW_Flor_AB_Std',
            'Purfling_Bottom_CW_Flor',
          ],
        },
      },
      [EBodyCutawayOption.Scalloped]: {
        [EBodyArmBevelOption.None]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
        },
      },
    },
    [EBodyDepthOption.Thinline]: {
      [EBodyCutawayOption.None]: {
        [EBodyArmBevelOption.None]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top', 'Purfling_Bottom'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top', 'Purfling_Bottom'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top_CW_None_AB_Std', 'Purfling_Bottom'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top_CW_None_AB_Std', 'Purfling_Bottom'],
        },
      },
      [EBodyCutawayOption.Venetian]: {
        [EBodyArmBevelOption.None]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top_CW_Vene', 'Purfling_Top_CW_Vene'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top_CW_Vene', 'Purfling_Top_CW_Vene'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
        },
      },
      [EBodyCutawayOption.Florentine]: {
        [EBodyArmBevelOption.None]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Bottom_CW_Flor'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Bottom_CW_Flor'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EPurflingVariantOption.Standard]: [
            'Purfling_Top_CW_Flor_AB_Std',
            'Purfling_Bottom_CW_Flor',
          ],

          [EPurflingVariantOption.Herringbone]: [
            'Purfling_Top_CW_Flor_AB_Std',
            'Purfling_Bottom_CW_Flor',
          ],
        },
      },
      [EBodyCutawayOption.Scalloped]: {
        [EBodyArmBevelOption.None]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
        },
      },
    },
  },
  [EBodyShapeOption.Parlor]: {
    [EBodyDepthOption.Standard]: {
      [EBodyCutawayOption.None]: {
        [EBodyArmBevelOption.None]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top', 'Purfling_Bottom'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top', 'Purfling_Bottom'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top_CW_None_AB_Std', 'Purfling_Bottom'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top_CW_None_AB_Std', 'Purfling_Bottom'],
        },
      },
      [EBodyCutawayOption.Venetian]: {
        [EBodyArmBevelOption.None]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top_CW_Vene', 'Purfling_Top_CW_Vene'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top_CW_Vene', 'Purfling_Top_CW_Vene'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
        },
      },
      [EBodyCutawayOption.Florentine]: {
        [EBodyArmBevelOption.None]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Bottom_CW_Flor'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Bottom_CW_Flor'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EPurflingVariantOption.Standard]: [
            'Purfling_Top_CW_Flor_AB_Std',
            'Purfling_Bottom_CW_Flor',
          ],

          [EPurflingVariantOption.Herringbone]: [
            'Purfling_Top_CW_Flor_AB_Std',
            'Purfling_Bottom_CW_Flor',
          ],
        },
      },
      [EBodyCutawayOption.Scalloped]: {
        [EBodyArmBevelOption.None]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
        },
      },
    },
    [EBodyDepthOption.Thinline]: {
      [EBodyCutawayOption.None]: {
        [EBodyArmBevelOption.None]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top', 'Purfling_Bottom'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top', 'Purfling_Bottom'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top_CW_None_AB_Std', 'Purfling_Bottom'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top_CW_None_AB_Std', 'Purfling_Bottom'],
        },
      },
      [EBodyCutawayOption.Venetian]: {
        [EBodyArmBevelOption.None]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top_CW_Vene', 'Purfling_Top_CW_Vene'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top_CW_Vene', 'Purfling_Top_CW_Vene'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
        },
      },
      [EBodyCutawayOption.Florentine]: {
        [EBodyArmBevelOption.None]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Bottom_CW_Flor'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Bottom_CW_Flor'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EPurflingVariantOption.Standard]: [
            'Purfling_Top_CW_Flor_AB_Std',
            'Purfling_Bottom_CW_Flor',
          ],

          [EPurflingVariantOption.Herringbone]: [
            'Purfling_Top_CW_Flor_AB_Std',
            'Purfling_Bottom_CW_Flor',
          ],
        },
      },
      [EBodyCutawayOption.Scalloped]: {
        [EBodyArmBevelOption.None]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EPurflingVariantOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
          [EPurflingVariantOption.Herringbone]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
        },
      },
    },
  },
}
