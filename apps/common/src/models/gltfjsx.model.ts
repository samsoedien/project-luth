import { GLTFResult as LuthSoundboardGLTF } from '~/_generated/LuthSoundboard'
import { GLTFResult as LuthBackGLTF } from '~/_generated/LuthBack'
import { GLTFResult as LuthSidesGLTF } from '~/_generated/LuthSides'
import { GLTFResult as LuthBindingGLTF } from '~/_generated/LuthBinding'
import { GLTFResult as LuthNeckGLTF } from '~/_generated/LuthNeck'
import { GLTFResult as LuthHeadstockGLTF } from '~/_generated/LuthHeadstock'
import { GLTFResult as LuthFretboardGLTF } from '~/_generated/LuthFretboard'
import { GLTFResult as LuthBridgeGLTF } from '~/_generated/LuthBridge'
import { GLTFResult as LuthPickguardGLTF } from '~/_generated/LuthPickguard'
import { GLTFResult as LuthStringsGLTF } from '~/_generated/LuthStrings'
import { GLTFResult as LuthHeelTailBlocksGLTF } from '~/_generated/LuthHeelTailBlocks'
import { GLTFResult as LuthPurfllingGLTF } from '~/_generated/LuthPurfling'
import { GLTFResult as LuthRosetteGLTF } from '~/_generated/LuthRosette'
import { GLTFResult as LuthFretsGLTF } from '~/_generated/LuthFrets'
import { GLTFResult as LuthNutGLTF } from '~/_generated/LuthNut'
import { GLTFResult as LuthSaddleGLTF } from '~/_generated/LuthSaddle'

export type LuthGLTFResultCombined = LuthSidesGLTF &
  LuthSoundboardGLTF &
  LuthBackGLTF &
  LuthHeelTailBlocksGLTF &
  LuthBindingGLTF &
  LuthNeckGLTF &
  LuthHeadstockGLTF &
  LuthFretboardGLTF &
  LuthBridgeGLTF &
  LuthPickguardGLTF &
  LuthStringsGLTF &
  LuthPurfllingGLTF &
  LuthRosetteGLTF &
  LuthFretsGLTF &
  LuthNutGLTF &
  LuthSaddleGLTF

export type GLTFJSXInstances = Record<
  string,
  React.ForwardRefExoticComponent<
    Omit<JSX.IntrinsicElements & { mesh: any }['mesh'], 'name'> & {
      name: keyof LuthGLTFResultCombined['nodes']
    }
  >
>
