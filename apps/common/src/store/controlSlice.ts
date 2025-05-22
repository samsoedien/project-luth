// interface IControls extends PresentationControlProps {
//   rotation: [number, number, number]
// }

import { PresentationControlProps } from '@react-three/drei'
import { StateCreator } from 'zustand'
import { ELuthComponent } from '~/models/configuration.model'
import { StoreState } from './store'

export interface IUIControlsStoreState {
  workflow: 'Design' | 'Crafting'
  context: {
    hoveredMesh: string
  }
  setContext: (context: Partial<IUIControlsStoreState['context']>) => void
  scope: ELuthComponent
  setScope: (scope: ELuthComponent) => void
  controls: PresentationControlProps
  setControls: (controls: Partial<PresentationControlProps>) => void
  componentVisibility: ELuthComponent[]
  setComponentVisibility: (components: ELuthComponent[]) => void
}

export const createUIControlsSlice: StateCreator<StoreState, [], [], IUIControlsStoreState> = (
  set,
) => ({
  workflow: 'Design',
  context: {
    hoveredMesh: '',
  },
  setContext: (context) =>
    set(() => ({
      context: {
        hoveredMesh: context.hoveredMesh ?? '',
      },
    })),
  scope: ELuthComponent.Base,
  setScope: (scope) => {
    set(() => ({ scope }))
  },
  controls: {
    rotation: [0, 0, 0],
    zoom: 2,
    polar: [-Math.PI / 3, Math.PI / 3],
    azimuth: [-Math.PI / 4, Math.PI / 4],
    snap: false,
  },
  setControls: (controls) => {
    set((state) => ({ controls: { ...state.controls, ...controls } }))
  },
  componentVisibility: [ELuthComponent.Soundboard, ELuthComponent.Sides],
  setComponentVisibility: (components) => {
    if (components) set(() => ({ componentVisibility: [...components] }))
  },
})
