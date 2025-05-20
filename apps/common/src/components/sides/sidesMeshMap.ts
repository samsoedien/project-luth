import { GLTFResult as LuthSidesGLTF } from '~/_generated/LuthSides'

import {
  EBodyArmBevelOption,
  EBodyShapeOption,
  EBodyCutawayOption,
  EBodyDepthOption,
  ESidesSoundPortOption,
  EBaseFretJointOption,
} from '~/models/options.model'

type SidesboardMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBodyDepthOption]: {
      [key in EBaseFretJointOption]: {
        [key in EBodyCutawayOption]: {
          [key in EBodyArmBevelOption]: {
            [key in ESidesSoundPortOption]: Array<keyof LuthSidesGLTF['nodes']>
          }
        }
      }
    }
  }
}

export const sidesMeshMap: SidesboardMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [EBodyDepthOption.Standard]: {
      [EBaseFretJointOption.Fret14]: {
        [EBodyCutawayOption.None]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Standard_Fret14__CWNone'],
            [ESidesSoundPortOption.Oval]: ['Sides__Dread_Standard_Fret14__CWNone_ABNone_SPOval'],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Standard_Fret14__CWNone_ABStd'],
            [ESidesSoundPortOption.Oval]: ['Sides__Dread_Standard_Fret14__CWNone_ABNone_SPOval'],
          },
        },
        [EBodyCutawayOption.Venetian]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Standard_Fret14__CWVen'],
            [ESidesSoundPortOption.Oval]: ['Sides__Dread_Standard_Fret14__CWVen_ABNone_SPOval'],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Standard_Fret14__CWVen_ABStd'],
            [ESidesSoundPortOption.Oval]: ['Sides__Dread_Standard_Fret14__CWVen_ABNone_SPOval'],
          },
        },
        [EBodyCutawayOption.Florentine]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Standard_Fret14__CWFlo'],
            [ESidesSoundPortOption.Oval]: ['Sides__Dread_Standard_Fret14__CWFlo_ABNone_SPOval__1_'],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Standard_Fret14__CWFlo_ABStd'],
            [ESidesSoundPortOption.Oval]: [],
          },
        },
        [EBodyCutawayOption.Scalloped]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Standard_Fret14__CWSca'],
            [ESidesSoundPortOption.Oval]: ['Sides__Dread_Standard_Fret14__CWSca_ABNone_SPOval'],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Standard_Fret14__CWSca_ABStd'],
            [ESidesSoundPortOption.Oval]: ['Sides__Dread_Standard_Fret14__CWSca_ABNone_SPOval'],
          },
        },
      },
      [EBaseFretJointOption.Fret12]: {
        [EBodyCutawayOption.None]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Standard_Fret12__CWNone'],
            [ESidesSoundPortOption.Oval]: [],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Standard_Fret12__CWNone_ABStd'],
            [ESidesSoundPortOption.Oval]: [],
          },
        },
        [EBodyCutawayOption.Venetian]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Standard_Fret12__CWVen'],
            [ESidesSoundPortOption.Oval]: [],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Standard_Fret12__CWVen_ABStd'],
            [ESidesSoundPortOption.Oval]: [],
          },
        },
        [EBodyCutawayOption.Florentine]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Standard_Fret12__CWFlo'],
            [ESidesSoundPortOption.Oval]: [],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Standard_Fret12__CWFlo_ABStd'],
            [ESidesSoundPortOption.Oval]: [],
          },
        },
        [EBodyCutawayOption.Scalloped]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Standard_Fret12__CWScal'],
            [ESidesSoundPortOption.Oval]: [],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Standard_Fret12__CW_Scal_AB_Std'],
            [ESidesSoundPortOption.Oval]: [],
          },
        },
      },
    },
    [EBodyDepthOption.Thinline]: {
      [EBaseFretJointOption.Fret14]: {
        [EBodyCutawayOption.None]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Thinline_Fret14__CWNone'],
            [ESidesSoundPortOption.Oval]: ['Sides__Dread_Thinline_Fret14__CWNone_ABNone_SPOval'],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Thinline_Fret14__CWNone_ABStd'],
            [ESidesSoundPortOption.Oval]: ['Sides__Dread_Thinline_Fret14__CWNone_ABNone_SPOval'],
          },
        },
        [EBodyCutawayOption.Venetian]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Thinline_Fret14__CWVen'],
            [ESidesSoundPortOption.Oval]: ['Sides__Dread_Thinline_Fret14__CWVen_ABNone_SPOval'],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Thinline_Fret14__CWVen_ABStd'],
            [ESidesSoundPortOption.Oval]: ['Sides__Dread_Thinline_Fret14__CWVen_ABNone_SPOval'],
          },
        },
        [EBodyCutawayOption.Florentine]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Thinline_Fret14__CWFlo'],
            [ESidesSoundPortOption.Oval]: ['Sides__Dread_Thinline_Fret14__CWFlo_ABNone_SPOval__1_'],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Thinline_Fret14__CWFlo_ABStd'],
            [ESidesSoundPortOption.Oval]: [],
          },
        },
        [EBodyCutawayOption.Scalloped]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Thinline_Fret14__CWSca'],
            [ESidesSoundPortOption.Oval]: ['Sides__Dread_Thinline_Fret14__CWSca_ABNone_SPOval'],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Thinline_Fret14__CWSca_ABStd'],
            [ESidesSoundPortOption.Oval]: ['Sides__Dread_Thinline_Fret14__CWSca_ABNone_SPOval'],
          },
        },
      },
      [EBaseFretJointOption.Fret12]: {
        [EBodyCutawayOption.None]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Thinline_Fret12__CWNone'],
            [ESidesSoundPortOption.Oval]: [],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Thinline_Fret12__CWNone_ABStd'],
            [ESidesSoundPortOption.Oval]: [],
          },
        },
        [EBodyCutawayOption.Venetian]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Thinline_Fret12__CWVen'],
            [ESidesSoundPortOption.Oval]: [],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Thinline_Fret12__CWVen_ABStd'],
            [ESidesSoundPortOption.Oval]: [],
          },
        },
        [EBodyCutawayOption.Florentine]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Thinline_Fret12__CWFlo'],
            [ESidesSoundPortOption.Oval]: [],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Thinline_Fret12__CWFlo_ABStd'],
            [ESidesSoundPortOption.Oval]: [],
          },
        },
        [EBodyCutawayOption.Scalloped]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Thinline_Fret12__CWScal'],
            [ESidesSoundPortOption.Oval]: [],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Dread_Thinline_Fret12__CWSca_ABStd'],
            [ESidesSoundPortOption.Oval]: [],
          },
        },
      },
    },
  },
  [EBodyShapeOption.Parlor]: {
    [EBodyDepthOption.Standard]: {
      [EBaseFretJointOption.Fret14]: {
        [EBodyCutawayOption.None]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Standard_Fret14__CWNone'],
            [ESidesSoundPortOption.Oval]: ['Sides__Parl_Standard_Fret14__CWNone_ABNone_SPOval'],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Standard_Fret14__CWNone_ABStd'],
            [ESidesSoundPortOption.Oval]: ['Sides__Parl_Standard_Fret14__CWNone_ABNone_SPOval'],
          },
        },
        [EBodyCutawayOption.Venetian]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Standard_Fret14__CWVen'],
            [ESidesSoundPortOption.Oval]: ['Sides__Parl_Standard_Fret14__CWVen_ABNone_SPOval'],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Standard_Fret14__CWVen_ABStd'],
            [ESidesSoundPortOption.Oval]: ['Sides__Parl_Standard_Fret14__CWVen_ABNone_SPOval'],
          },
        },
        [EBodyCutawayOption.Florentine]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Standard_Fret14__CWFlo'],
            [ESidesSoundPortOption.Oval]: ['Sides__Parl_Standard_Fret14__CWFlo_ABNone_SPOval__1_'],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Standard_Fret14__CWFlo_ABStd'],
            [ESidesSoundPortOption.Oval]: [],
          },
        },
        [EBodyCutawayOption.Scalloped]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Standard_Fret14__CWSca'],
            [ESidesSoundPortOption.Oval]: ['Sides__Parl_Standard_Fret14__CWSca_ABNone_SPOval'],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Standard_Fret14__CWSca_ABStd'],
            [ESidesSoundPortOption.Oval]: ['Sides__Parl_Standard_Fret14__CWSca_ABNone_SPOval'],
          },
        },
      },
      [EBaseFretJointOption.Fret12]: {
        [EBodyCutawayOption.None]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Standard_Fret12__CWNone'],
            [ESidesSoundPortOption.Oval]: [],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Standard_Fret12__CWNone_ABStd'],
            [ESidesSoundPortOption.Oval]: [],
          },
        },
        [EBodyCutawayOption.Venetian]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Standard_Fret12__CWVen'],
            [ESidesSoundPortOption.Oval]: [],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Standard_Fret12__CWVen_ABStd'],
            [ESidesSoundPortOption.Oval]: [],
          },
        },
        [EBodyCutawayOption.Florentine]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Standard_Fret12__CWFlo'],
            [ESidesSoundPortOption.Oval]: [],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Standard_Fret12__CWFlo_ABStd'],
            [ESidesSoundPortOption.Oval]: [],
          },
        },
        [EBodyCutawayOption.Scalloped]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Standard_Fret12__CWScal'],
            [ESidesSoundPortOption.Oval]: [],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Standard_Fret12__CW_Scal_AB_Std'],
            [ESidesSoundPortOption.Oval]: [],
          },
        },
      },
    },
    [EBodyDepthOption.Thinline]: {
      [EBaseFretJointOption.Fret14]: {
        [EBodyCutawayOption.None]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Thinline_Fret14__CWNone'],
            [ESidesSoundPortOption.Oval]: ['Sides__Parl_Thinline_Fret14__CWNone_ABNone_SPOval'],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: [],
            [ESidesSoundPortOption.Oval]: ['Sides__Parl_Thinline_Fret14__CWNone_ABNone_SPOval'],
          },
        },
        [EBodyCutawayOption.Venetian]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: [],
            [ESidesSoundPortOption.Oval]: ['Sides__Parl_Thinline_Fret14__CWVen_ABNone_SPOval'],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: [],
            [ESidesSoundPortOption.Oval]: ['Sides__Parl_Thinline_Fret14__CWVen_ABNone_SPOval'],
          },
        },
        [EBodyCutawayOption.Florentine]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: [],
            [ESidesSoundPortOption.Oval]: ['Sides__Parl_Thinline_Fret14__CWFlo_ABNone_SPOval__1_'],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: [],
            [ESidesSoundPortOption.Oval]: [],
          },
        },
        [EBodyCutawayOption.Scalloped]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: [],
            [ESidesSoundPortOption.Oval]: ['Sides__Parl_Thinline_Fret14__CWSca_ABNone_SPOval'],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Thinline_Fret14__CWSca_ABStd'],
            [ESidesSoundPortOption.Oval]: ['Sides__Parl_Thinline_Fret14__CWSca_ABNone_SPOval'],
          },
        },
      },
      [EBaseFretJointOption.Fret12]: {
        [EBodyCutawayOption.None]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Thinline_Fret12__CWNone'],
            [ESidesSoundPortOption.Oval]: [],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Thinline_Fret12__CWNone_ABStd'],
            [ESidesSoundPortOption.Oval]: [],
          },
        },
        [EBodyCutawayOption.Venetian]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Thinline_Fret12__CWVen'],
            [ESidesSoundPortOption.Oval]: [],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Thinline_Fret12__CWVen_ABStd'],
            [ESidesSoundPortOption.Oval]: [],
          },
        },
        [EBodyCutawayOption.Florentine]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Thinline_Fret12__CWFlo'],
            [ESidesSoundPortOption.Oval]: [],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Thinline_Fret12__CWFlo_ABStd'],
            [ESidesSoundPortOption.Oval]: [],
          },
        },
        [EBodyCutawayOption.Scalloped]: {
          [EBodyArmBevelOption.None]: {
            [ESidesSoundPortOption.None]: ['Sides__Parl_Thinline_Fret12__CWScal'],
            [ESidesSoundPortOption.Oval]: [],
          },
          [EBodyArmBevelOption.Standard]: {
            [ESidesSoundPortOption.None]: [],
            [ESidesSoundPortOption.Oval]: [],
          },
        },
      },
    },
  },
}
