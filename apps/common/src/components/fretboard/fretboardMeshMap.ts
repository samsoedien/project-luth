import { GLTFResult as LuthFretboardGLTF } from '~/_generated/LuthFretboard'

import { EScaleLengthOption } from '~/models/options.model'

type FretboardMeshMap = {
  [key in EScaleLengthOption]: Array<keyof LuthFretboardGLTF['nodes']>
}

export const fretboardMeshMap: FretboardMeshMap = {
  [EScaleLengthOption.Standard]: ['Body_Fretboard001'],
}
