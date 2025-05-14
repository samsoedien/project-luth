import { GLTFResult as LuthNeckGLTF } from '~/_generated/LuthNeck'

import {
  ENeckAssymmetricalOption,
  ENeckShapeOption,
  EScaleAssemetrical,
  EScaleFretHeelJointOption,
  EScaleLengthOption,
} from '~/models/options.model'

type NeckMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EScaleAssemetrical]: {
      [key in EScaleFretHeelJointOption]: {
        [key in ENeckShapeOption]: {
          [key in ENeckAssymmetricalOption]: Array<keyof LuthNeckGLTF['nodes']>
        }
      }
    }
  }
}

export const neckMeshMap: NeckMeshMap = {
  [EScaleLengthOption.Standard]: {
    [EScaleAssemetrical.None]: {
      [EScaleFretHeelJointOption.Fret14]: {
        [ENeckShapeOption.CShape]: {
          [ENeckAssymmetricalOption.None]: ['Body_Neck', 'Body_Heel'],
          [ENeckAssymmetricalOption.Asymmetrical]: ['Body_Neck', 'Body_Heel'],
        },
        [ENeckShapeOption.VShape]: {
          [ENeckAssymmetricalOption.None]: ['Body_Neck', 'Body_Heel'],
          [ENeckAssymmetricalOption.Asymmetrical]: ['Body_Neck', 'Body_Heel'],
        },
      },
      [EScaleFretHeelJointOption.Fret12]: {
        [ENeckShapeOption.CShape]: {
          [ENeckAssymmetricalOption.None]: ['Body_Neck', 'Body_Heel'],
          [ENeckAssymmetricalOption.Asymmetrical]: ['Body_Neck', 'Body_Heel'],
        },
        [ENeckShapeOption.VShape]: {
          [ENeckAssymmetricalOption.None]: ['Body_Neck', 'Body_Heel'],
          [ENeckAssymmetricalOption.Asymmetrical]: ['Body_Neck', 'Body_Heel'],
        },
      },
    },
    [EScaleAssemetrical.Assemetrical]: {
      [EScaleFretHeelJointOption.Fret14]: {
        [ENeckShapeOption.CShape]: {
          [ENeckAssymmetricalOption.None]: ['Body_Neck', 'Body_Heel'],
          [ENeckAssymmetricalOption.Asymmetrical]: ['Body_Neck', 'Body_Heel'],
        },
        [ENeckShapeOption.VShape]: {
          [ENeckAssymmetricalOption.None]: ['Body_Neck', 'Body_Heel'],
          [ENeckAssymmetricalOption.Asymmetrical]: ['Body_Neck', 'Body_Heel'],
        },
      },
      [EScaleFretHeelJointOption.Fret12]: {
        [ENeckShapeOption.CShape]: {
          [ENeckAssymmetricalOption.None]: ['Body_Neck', 'Body_Heel'],
          [ENeckAssymmetricalOption.Asymmetrical]: ['Body_Neck', 'Body_Heel'],
        },
        [ENeckShapeOption.VShape]: {
          [ENeckAssymmetricalOption.None]: ['Body_Neck', 'Body_Heel'],
          [ENeckAssymmetricalOption.Asymmetrical]: ['Body_Neck', 'Body_Heel'],
        },
      },
    },
  },
}
