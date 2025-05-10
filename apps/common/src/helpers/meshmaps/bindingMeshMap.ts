import { LuthGLTFResultCombined } from '~/models/gltfjsx.model'
import {
  EBodyShapeOption,
  EBodyDepthOption,
  ECutawayOption,
  EArmBevelOption,
} from '~/models/options.model'

type BindingdMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBodyDepthOption]: {
      [key in ECutawayOption]: {
        [key in EArmBevelOption]: Array<keyof LuthGLTFResultCombined['nodes']>
      }
    }
  }
}

export const bindingMeshMap: BindingdMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [EBodyDepthOption.Standard]: {
      [ECutawayOption.None]: {
        [EArmBevelOption.None]: ['Binding_Top001', 'Binding_Bottom001'],
        [EArmBevelOption.Standard]: ['Binding_Top_CW_None_AB_Std001', 'Binding_Bottom001'],
      },
      [ECutawayOption.Venetian]: {
        [EArmBevelOption.None]: ['Bind_Top_CW_Vene001', 'Binding_Bottom_CW_Vene001'],
        [EArmBevelOption.Standard]: ['Binding_Top_CW_Vene_AB_Std001', 'Binding_Bottom_CW_Vene001'],
      },
      [ECutawayOption.Florentine]: {
        [EArmBevelOption.None]: ['Binding_Top_CW_Flor001', 'Binding_Bottom_CW_Flor001'],
        [EArmBevelOption.Standard]: ['Binding_Top_CW_Flor_AB_Std001', 'Binding_Bottom_CW_Flor001'],
      },
      [ECutawayOption.Scalloped]: {
        [EArmBevelOption.None]: ['Binding_Top_CW_Flor001', 'Binding_Bottom001'],
        [EArmBevelOption.Standard]: ['Binding_Top_CW_Flor_AB_Std001', 'Binding_Bottom001'],
      },
    },
    [EBodyDepthOption.Thinline]: {
      [ECutawayOption.None]: {
        [EArmBevelOption.None]: ['Binding_Top001', 'Binding_Bottom001'],
        [EArmBevelOption.Standard]: ['Binding_Top_CW_None_AB_Std001', 'Binding_Bottom001'],
      },
      [ECutawayOption.Venetian]: {
        [EArmBevelOption.None]: ['Bind_Top_CW_Vene001', 'Binding_Bottom_CW_Vene001'],
        [EArmBevelOption.Standard]: ['Binding_Top_CW_Vene_AB_Std001', 'Binding_Bottom_CW_Vene001'],
      },
      [ECutawayOption.Florentine]: {
        [EArmBevelOption.None]: ['Binding_Top_CW_Flor001', 'Binding_Bottom_CW_Flor001'],
        [EArmBevelOption.Standard]: ['Binding_Top_CW_Flor_AB_Std001', 'Binding_Bottom_CW_Flor001'],
      },
      [ECutawayOption.Scalloped]: {
        [EArmBevelOption.None]: ['Binding_Top_CW_Flor001', 'Binding_Bottom001'],
        [EArmBevelOption.Standard]: ['Binding_Top_CW_Flor_AB_Std001', 'Binding_Bottom001'],
      },
    },
  },
  [EBodyShapeOption.Parlor]: {
    [EBodyDepthOption.Standard]: {
      [ECutawayOption.None]: {
        [EArmBevelOption.None]: ['Binding_Top', 'Binding_Bottom'],
        [EArmBevelOption.Standard]: ['Binding_Top_CW_None_AB_Std', 'Binding_Bottom'],
      },
      [ECutawayOption.Venetian]: {
        [EArmBevelOption.None]: ['Bind_Top_CW_Vene', 'Binding_Bottom_CW_Vene'],
        [EArmBevelOption.Standard]: ['Binding_Top_CW_Vene_AB_Std', 'Binding_Bottom_CW_Vene'],
      },
      [ECutawayOption.Florentine]: {
        [EArmBevelOption.None]: ['Binding_Top_CW_Flor', 'Binding_Bottom_CW_Flor'],
        [EArmBevelOption.Standard]: ['Binding_Top_CW_Flor_AB_Std', 'Binding_Bottom_CW_Flor'],
      },
      [ECutawayOption.Scalloped]: {
        [EArmBevelOption.None]: ['Binding_Top_CW_Flor', 'Binding_Bottom'],
        [EArmBevelOption.Standard]: ['Binding_Top_CW_Flor_AB_Std', 'Binding_Bottom'],
      },
    },
    [EBodyDepthOption.Thinline]: {
      [ECutawayOption.None]: {
        [EArmBevelOption.None]: ['Binding_Top', 'Binding_Bottom'],
        [EArmBevelOption.Standard]: ['Binding_Top_CW_None_AB_Std', 'Binding_Bottom'],
      },
      [ECutawayOption.Venetian]: {
        [EArmBevelOption.None]: ['Bind_Top_CW_Vene', 'Binding_Bottom_CW_Vene'],
        [EArmBevelOption.Standard]: ['Binding_Top_CW_Vene_AB_Std', 'Binding_Bottom_CW_Vene'],
      },
      [ECutawayOption.Florentine]: {
        [EArmBevelOption.None]: ['Binding_Top_CW_Flor', 'Binding_Bottom_CW_Flor'],
        [EArmBevelOption.Standard]: ['Binding_Top_CW_Flor_AB_Std', 'Binding_Bottom_CW_Flor'],
      },
      [ECutawayOption.Scalloped]: {
        [EArmBevelOption.None]: ['Binding_Top_CW_Flor', 'Binding_Bottom'],
        [EArmBevelOption.Standard]: ['Binding_Top_CW_Flor_AB_Std', 'Binding_Bottom'],
      },
    },
  },
}
