import { GLTFResult } from '~/_generated/LuthAcoustic'

export type GLTFJSXInstances = Record<
  string,
  React.ForwardRefExoticComponent<
    Omit<JSX.IntrinsicElements['mesh'], 'name'> & {
      name: keyof GLTFResult['nodes']
    }
  >
>
