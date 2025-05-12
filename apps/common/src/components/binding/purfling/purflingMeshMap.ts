import { GLTFResult as LuthPurfllingGLTF } from '~/_generated/LuthPurfling'

import {
  EArmBevelOption,
  EBodyDepthOption,
  EBodyShapeOption,
  ECutawayOption,
} from '~/models/options.model'

type PurflingMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBodyDepthOption]: {
      [key in ECutawayOption]: {
        [key in EArmBevelOption]: Array<keyof LuthPurfllingGLTF['nodes']>
      }
    }
  }
}

export const purflingMeshMap: PurflingMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [EBodyDepthOption.Standard]: {
      [ECutawayOption.None]: {
        [EArmBevelOption.None]: ['Purfling_Top', 'Purfling_Bottom'],
        [EArmBevelOption.Standard]: ['Purfling_Top_CW_None_AB_Std', 'Purfling_Bottom'],
      },
      [ECutawayOption.Venetian]: {
        [EArmBevelOption.None]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
        [EArmBevelOption.Standard]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
      },
      [ECutawayOption.Florentine]: {
        [EArmBevelOption.None]: ['Purfling_Top_CW_Flor', 'Purfling_Bottom_CW_Flor'],
        [EArmBevelOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom_CW_Flor'],
      },
      [ECutawayOption.Scalloped]: {
        [EArmBevelOption.None]: ['Purfling_Top_CW_Flor', 'Purfling_Bottom'],
        [EArmBevelOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
      },
    },
    [EBodyDepthOption.Thinline]: {
      [ECutawayOption.None]: {
        [EArmBevelOption.None]: ['Purfling_Top', 'Purfling_Bottom'],
        [EArmBevelOption.Standard]: ['Purfling_Top_CW_None_AB_Std', 'Purfling_Bottom'],
      },
      [ECutawayOption.Venetian]: {
        [EArmBevelOption.None]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
        [EArmBevelOption.Standard]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
      },
      [ECutawayOption.Florentine]: {
        [EArmBevelOption.None]: ['Purfling_Top_CW_Flor', 'Purfling_Bottom_CW_Flor'],
        [EArmBevelOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom_CW_Flor'],
      },
      [ECutawayOption.Scalloped]: {
        [EArmBevelOption.None]: ['Purfling_Top_CW_Flor', 'Purfling_Bottom'],
        [EArmBevelOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
      },
    },
  },
  [EBodyShapeOption.Parlor]: {
    [EBodyDepthOption.Standard]: {
      [ECutawayOption.None]: {
        [EArmBevelOption.None]: ['Purfling_Top', 'Purfling_Bottom'],
        [EArmBevelOption.Standard]: ['Purfling_Top_CW_None_AB_Std', 'Purfling_Bottom'],
      },
      [ECutawayOption.Venetian]: {
        [EArmBevelOption.None]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
        [EArmBevelOption.Standard]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
      },
      [ECutawayOption.Florentine]: {
        [EArmBevelOption.None]: ['Purfling_Top_CW_Flor', 'Purfling_Bottom_CW_Flor'],
        [EArmBevelOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom_CW_Flor'],
      },
      [ECutawayOption.Scalloped]: {
        [EArmBevelOption.None]: ['Purfling_Top_CW_Flor', 'Purfling_Bottom'],
        [EArmBevelOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
      },
    },
    [EBodyDepthOption.Thinline]: {
      [ECutawayOption.None]: {
        [EArmBevelOption.None]: ['Purfling_Top', 'Purfling_Bottom'],
        [EArmBevelOption.Standard]: ['Purfling_Top_CW_None_AB_Std', 'Purfling_Bottom'],
      },
      [ECutawayOption.Venetian]: {
        [EArmBevelOption.None]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
        [EArmBevelOption.Standard]: ['Purfling_Top_CW_Vene', 'Purfling_Bottom_CW_Vene'],
      },
      [ECutawayOption.Florentine]: {
        [EArmBevelOption.None]: ['Purfling_Top_CW_Flor', 'Purfling_Bottom_CW_Flor'],
        [EArmBevelOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom_CW_Flor'],
      },
      [ECutawayOption.Scalloped]: {
        [EArmBevelOption.None]: ['Purfling_Top_CW_Flor', 'Purfling_Bottom'],
        [EArmBevelOption.Standard]: ['Purfling_Top_CW_Flor_AB_Std', 'Purfling_Bottom'],
      },
    },
  },
}
