import { GLTFResult } from '~/_generated/LuthAcoustic'

import { GLTFResult as LuthSoundboardGLTF } from '~/_generated/LuthSoundboard'
import { GLTFResult as LuthBackGLTF } from '~/_generated/LuthBack'
import { GLTFResult as LuthSidesGLTF } from '~/_generated/LuthSides'
import { GLTFResult as LuthBindingGLTF } from '~/_generated/LuthBinding'
import { GLTFResult as LuthNeckGLTF } from '~/_generated/LuthNeck'
import { GLTFResult as LuthHeadstockGLTF } from '~/_generated/LuthHeadstock'
import { GLTFResult as LuthFretboardGLTF } from '~/_generated/LuthFretboard'
import { GLTFResult as LuthHeelTailBlocksGLTF } from '~/_generated/LuthHeelTailBlocks'
import { GLTFResult as LuthPurfllingGLTF } from '~/_generated/LuthPurfling'
import { GLTFResult as LuthRosetteGLTF } from '~/_generated/LuthRosette'

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
  LuthBackGLTF &
  LuthHeelTailBlocksGLTF &
  LuthBindingGLTF &
  LuthNeckGLTF &
  LuthHeadstockGLTF &
  LuthFretboardGLTF &
  LuthPurfllingGLTF &
  LuthRosetteGLTF &
  GLTFResult
