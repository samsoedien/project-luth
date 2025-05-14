import { GLTFResult as LuthBindingGLTF } from '~/_generated/LuthBinding'

import {
  EBodyShapeOption,
  EBodyDepthOption,
  EBodyCutawayOption,
  EBodyArmBevelOption,
} from '~/models/options.model'

type BindingdMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBodyDepthOption]: {
      [key in EBodyCutawayOption]: {
        [key in EBodyArmBevelOption]: Array<keyof LuthBindingGLTF['nodes']>
      }
    }
  }
}

export const bindingMeshMap: BindingdMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [EBodyDepthOption.Standard]: {
      [EBodyCutawayOption.None]: {
        [EBodyArmBevelOption.None]: ['Binding_Top001', 'Binding_Bottom001'],
        [EBodyArmBevelOption.Standard]: ['Binding_Top_CW_None_AB_Std', 'Binding_Bottom'],
      },
      [EBodyCutawayOption.Venetian]: {
        [EBodyArmBevelOption.None]: ['Binding_Top_CW_Vene', 'Binding_Bottom_CW_Vene'],
        [EBodyArmBevelOption.Standard]: ['Binding_Top_CW_Vene_AB_Std', 'Binding_Bottom_CW_Vene'],
      },
      [EBodyCutawayOption.Florentine]: {
        [EBodyArmBevelOption.None]: ['Binding_Top_CW_Flor', 'Binding_Bottom_CW_Flor'],
        [EBodyArmBevelOption.Standard]: ['Binding_Top_CW_Flor_AB_Std', 'Binding_Bottom_CW_Flor'],
      },
      [EBodyCutawayOption.Scalloped]: {
        [EBodyArmBevelOption.None]: ['Binding_Top_CW_Flor', 'Binding_Bottom'],
        [EBodyArmBevelOption.Standard]: ['Binding_Top_CW_Flor_AB_Std', 'Binding_Bottom'],
      },
    },
    [EBodyDepthOption.Thinline]: {
      [EBodyCutawayOption.None]: {
        [EBodyArmBevelOption.None]: ['Binding_Top', 'Binding_Bottom'],
        [EBodyArmBevelOption.Standard]: ['Binding_Top_CW_None_AB_Std', 'Binding_Bottom'],
      },
      [EBodyCutawayOption.Venetian]: {
        [EBodyArmBevelOption.None]: ['Binding_Top_CW_Vene', 'Binding_Bottom_CW_Vene'],
        [EBodyArmBevelOption.Standard]: ['Binding_Top_CW_Vene_AB_Std', 'Binding_Bottom_CW_Vene'],
      },
      [EBodyCutawayOption.Florentine]: {
        [EBodyArmBevelOption.None]: ['Binding_Top_CW_Flor', 'Binding_Bottom_CW_Flor'],
        [EBodyArmBevelOption.Standard]: ['Binding_Top_CW_Flor_AB_Std', 'Binding_Bottom_CW_Flor'],
      },
      [EBodyCutawayOption.Scalloped]: {
        [EBodyArmBevelOption.None]: ['Binding_Top_CW_Flor', 'Binding_Bottom'],
        [EBodyArmBevelOption.Standard]: ['Binding_Top_CW_Flor_AB_Std', 'Binding_Bottom'],
      },
    },
  },
  [EBodyShapeOption.Parlor]: {
    [EBodyDepthOption.Standard]: {
      [EBodyCutawayOption.None]: {
        [EBodyArmBevelOption.None]: ['Binding_Top', 'Binding_Bottom'],
        [EBodyArmBevelOption.Standard]: ['Binding_Top_CW_None_AB_Std', 'Binding_Bottom'],
      },
      [EBodyCutawayOption.Venetian]: {
        [EBodyArmBevelOption.None]: ['Binding_Top_CW_Vene', 'Binding_Bottom_CW_Vene'],
        [EBodyArmBevelOption.Standard]: ['Binding_Top_CW_Vene_AB_Std', 'Binding_Bottom_CW_Vene'],
      },
      [EBodyCutawayOption.Florentine]: {
        [EBodyArmBevelOption.None]: ['Binding_Top_CW_Flor', 'Binding_Bottom_CW_Flor'],
        [EBodyArmBevelOption.Standard]: ['Binding_Top_CW_Flor_AB_Std', 'Binding_Bottom_CW_Flor'],
      },
      [EBodyCutawayOption.Scalloped]: {
        [EBodyArmBevelOption.None]: ['Binding_Top_CW_Flor', 'Binding_Bottom'],
        [EBodyArmBevelOption.Standard]: ['Binding_Top_CW_Flor_AB_Std', 'Binding_Bottom'],
      },
    },
    [EBodyDepthOption.Thinline]: {
      [EBodyCutawayOption.None]: {
        [EBodyArmBevelOption.None]: ['Binding_Top', 'Binding_Bottom'],
        [EBodyArmBevelOption.Standard]: ['Binding_Top_CW_None_AB_Std', 'Binding_Bottom'],
      },
      [EBodyCutawayOption.Venetian]: {
        [EBodyArmBevelOption.None]: ['Binding_Top_CW_Vene', 'Binding_Bottom_CW_Vene'],
        [EBodyArmBevelOption.Standard]: ['Binding_Top_CW_Vene_AB_Std', 'Binding_Bottom_CW_Vene'],
      },
      [EBodyCutawayOption.Florentine]: {
        [EBodyArmBevelOption.None]: ['Binding_Top_CW_Flor', 'Binding_Bottom_CW_Flor'],
        [EBodyArmBevelOption.Standard]: ['Binding_Top_CW_Flor_AB_Std', 'Binding_Bottom_CW_Flor'],
      },
      [EBodyCutawayOption.Scalloped]: {
        [EBodyArmBevelOption.None]: ['Binding_Top_CW_Flor', 'Binding_Bottom'],
        [EBodyArmBevelOption.Standard]: ['Binding_Top_CW_Flor_AB_Std', 'Binding_Bottom'],
      },
    },
  },
}
