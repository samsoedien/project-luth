import { GLTFResult as LuthNeckGLTF } from '~/_generated/LuthNeck'

import {
  ENeckShapeOption,
  ENeckAssymmetricalOption,
  EScaleLengthOption,
  EScaleAsymmetricalOption,
} from '~/models/options.model'

type NeckMeshMap = {
  [key in EScaleLengthOption]: {
    [key in EScaleAsymmetricalOption]: {
      [key in ENeckShapeOption]: {
        [key in ENeckAssymmetricalOption]: Array<keyof LuthNeckGLTF['nodes']>
      }
    }
  }
}

export const neckMeshMap: NeckMeshMap = {
  [EScaleLengthOption.Standard]: {
    [EScaleAsymmetricalOption.None]: {
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
  [EScaleLengthOption.Shorter]: {
    [EScaleAsymmetricalOption.None]: {
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
}
