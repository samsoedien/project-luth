import { GLTFResult } from '~/_generated/LuthAcousticDreadnaught'

export type GLTFJSXInstances = Record<
  string,
  React.ForwardRefExoticComponent<
    Omit<JSX.IntrinsicElements['mesh'], 'name'> & {
      name: keyof GLTFResult['nodes']
    }
  >
>
