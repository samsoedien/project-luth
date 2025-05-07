import { GLTFResult } from '~/_generated/LuthAcoustic'

import { GLTFResult as LuthSoundboardGLTF } from '~/_generated/LuthSoundboard'
import { GLTFResult as LuthSidesGLTF } from '~/_generated/LuthSides'
import { GLTFResult as LuthHeelTailBlocksGLTF } from '~/_generated/LuthHeelTailBlocks'
import { GLTFResult as LuthBindingGLTF } from '~/_generated/LuthAcousticDreadnaught_25-4in_6str_Binding'

export type GLTFJSXInstances = Record<
  string,
  React.ForwardRefExoticComponent<
    Omit<JSX.IntrinsicElements & { mesh: any }['mesh'], 'name'> & {
      name: keyof GLTFResult['nodes']
    }
  >
>

export type LuthGLTFResultCombined = LuthSidesGLTF &
  LuthSoundboardGLTF &
  LuthHeelTailBlocksGLTF &
  LuthBindingGLTF &
  GLTFResult
