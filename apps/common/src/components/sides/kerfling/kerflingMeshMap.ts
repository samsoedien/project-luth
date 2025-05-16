import { GLTFResult as LuthKerflingGLTF } from '~/_generated/LuthKerfling'

import {
  EBodyArmBevelOption,
  EBodyCutawayOption,
  EBodyDepthOption,
  EBodyShapeOption,
  EKerflingVariant,
} from '~/models/options.model'

type KerflingMeshMap = {
  [key in EBodyShapeOption]: {
    [key in EBodyDepthOption]: {
      [key in EBodyCutawayOption]: {
        [key in EBodyArmBevelOption]: {
          [key in EKerflingVariant]: Array<keyof LuthKerflingGLTF['nodes']>
        }
      }
    }
  }
}

export const kerflingMeshMap: KerflingMeshMap = {
  [EBodyShapeOption.Dreadnought]: {
    [EBodyDepthOption.Standard]: {
      [EBodyCutawayOption.None]: {
        [EBodyArmBevelOption.None]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
      },
      [EBodyCutawayOption.Venetian]: {
        [EBodyArmBevelOption.None]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
      },
      [EBodyCutawayOption.Florentine]: {
        [EBodyArmBevelOption.None]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
      },
      [EBodyCutawayOption.Scalloped]: {
        [EBodyArmBevelOption.None]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
      },
    },
    [EBodyDepthOption.Thinline]: {
      [EBodyCutawayOption.None]: {
        [EBodyArmBevelOption.None]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
      },
      [EBodyCutawayOption.Venetian]: {
        [EBodyArmBevelOption.None]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
      },
      [EBodyCutawayOption.Florentine]: {
        [EBodyArmBevelOption.None]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
      },
      [EBodyCutawayOption.Scalloped]: {
        [EBodyArmBevelOption.None]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
      },
    },
  },
  [EBodyShapeOption.Parlor]: {
    [EBodyDepthOption.Standard]: {
      [EBodyCutawayOption.None]: {
        [EBodyArmBevelOption.None]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
      },
      [EBodyCutawayOption.Venetian]: {
        [EBodyArmBevelOption.None]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
      },
      [EBodyCutawayOption.Florentine]: {
        [EBodyArmBevelOption.None]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
      },
      [EBodyCutawayOption.Scalloped]: {
        [EBodyArmBevelOption.None]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
      },
    },
    [EBodyDepthOption.Thinline]: {
      [EBodyCutawayOption.None]: {
        [EBodyArmBevelOption.None]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
      },
      [EBodyCutawayOption.Venetian]: {
        [EBodyArmBevelOption.None]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
      },
      [EBodyCutawayOption.Florentine]: {
        [EBodyArmBevelOption.None]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
      },
      [EBodyCutawayOption.Scalloped]: {
        [EBodyArmBevelOption.None]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
        [EBodyArmBevelOption.Standard]: {
          [EKerflingVariant.Traditional]: ['Body_Kerfling_Top', 'Body_Kerfling_Bottom'],
          [EKerflingVariant.Lining]: ['Body_Lining_Top004', 'Body_Lining_Bottom004'],
        },
      },
    },
  },
}
