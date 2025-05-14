import { GLTFResult as LuthPurfllingGLTF } from '~/_generated/LuthPurfling'

import {
  EBodyArmBevelOption,
  EBodyDepthOption,
  EBodyShapeOption,
  EBodyCutawayOption,
} from '~/models/options.model'

type PurflingMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBodyDepthOption]: {
      [key in EBodyCutawayOption]: {
        [key in EBodyArmBevelOption]: Array<keyof LuthPurfllingGLTF['nodes']>
      }
    }
  }
}

export const purflingMeshMap: PurflingMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [EBodyDepthOption.Standard]: {
      [EBodyCutawayOption.None]: {
        [EBodyArmBevelOption.None]: ['Purfling_Top', 'Purfling_Bottom'],
        [EBodyArmBevelOption.Standard]: ['Purfling_Top_CW_None_AB_Std', 'Purfling_Bottom'],
      },
      [EBodyCutawayOption.Venetian]: {
        [EBodyArmBevelOption.None]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
        [EBodyArmBevelOption.Standard]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
      },
      [EBodyCutawayOption.Florentine]: {
        [EBodyArmBevelOption.None]: ['Purfling_Top_CW_Flor', 'Purfling_Bottom_CW_Flor'],
        [EBodyArmBevelOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom_CW_Flor'],
      },
      [EBodyCutawayOption.Scalloped]: {
        [EBodyArmBevelOption.None]: ['Purfling_Top_CW_Flor', 'Purfling_Bottom'],
        [EBodyArmBevelOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
      },
    },
    [EBodyDepthOption.Thinline]: {
      [EBodyCutawayOption.None]: {
        [EBodyArmBevelOption.None]: ['Purfling_Top', 'Purfling_Bottom'],
        [EBodyArmBevelOption.Standard]: ['Purfling_Top_CW_None_AB_Std', 'Purfling_Bottom'],
      },
      [EBodyCutawayOption.Venetian]: {
        [EBodyArmBevelOption.None]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
        [EBodyArmBevelOption.Standard]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
      },
      [EBodyCutawayOption.Florentine]: {
        [EBodyArmBevelOption.None]: ['Purfling_Top_CW_Flor', 'Purfling_Bottom_CW_Flor'],
        [EBodyArmBevelOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom_CW_Flor'],
      },
      [EBodyCutawayOption.Scalloped]: {
        [EBodyArmBevelOption.None]: ['Purfling_Top_CW_Flor', 'Purfling_Bottom'],
        [EBodyArmBevelOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
      },
    },
  },
  [EBodyShapeOption.Parlor]: {
    [EBodyDepthOption.Standard]: {
      [EBodyCutawayOption.None]: {
        [EBodyArmBevelOption.None]: ['Purfling_Top', 'Purfling_Bottom'],
        [EBodyArmBevelOption.Standard]: ['Purfling_Top_CW_None_AB_Std', 'Purfling_Bottom'],
      },
      [EBodyCutawayOption.Venetian]: {
        [EBodyArmBevelOption.None]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
        [EBodyArmBevelOption.Standard]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
      },
      [EBodyCutawayOption.Florentine]: {
        [EBodyArmBevelOption.None]: ['Purfling_Top_CW_Flor', 'Purfling_Bottom_CW_Flor'],
        [EBodyArmBevelOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom_CW_Flor'],
      },
      [EBodyCutawayOption.Scalloped]: {
        [EBodyArmBevelOption.None]: ['Purfling_Top_CW_Flor', 'Purfling_Bottom'],
        [EBodyArmBevelOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
      },
    },
    [EBodyDepthOption.Thinline]: {
      [EBodyCutawayOption.None]: {
        [EBodyArmBevelOption.None]: ['Purfling_Top', 'Purfling_Bottom'],
        [EBodyArmBevelOption.Standard]: ['Purfling_Top_CW_None_AB_Std', 'Purfling_Bottom'],
      },
      [EBodyCutawayOption.Venetian]: {
        [EBodyArmBevelOption.None]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
        [EBodyArmBevelOption.Standard]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
      },
      [EBodyCutawayOption.Florentine]: {
        [EBodyArmBevelOption.None]: ['Purfling_Top_CW_Flor', 'Purfling_Bottom_CW_Flor'],
        [EBodyArmBevelOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom_CW_Flor'],
      },
      [EBodyCutawayOption.Scalloped]: {
        [EBodyArmBevelOption.None]: ['Purfling_Top_CW_Flor', 'Purfling_Bottom'],
        [EBodyArmBevelOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
      },
    },
  },
}
