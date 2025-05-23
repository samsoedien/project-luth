// interface IControls extends PresentationControlProps {
//   rotation: [number, number, number]
// }

import { PresentationControlProps } from '@react-three/drei'
import { StateCreator } from 'zustand'
import { ELuthComponent } from '~/models/configuration.model'
import { StoreState } from './store'
import { getComponentScope } from '~/helpers/getComponentScope'

export interface IUIControlsStoreState {
  workflow: 'Design' | 'Crafting'
  context: {
    hoveredMesh: string
  }
  setContext: (context: Partial<IUIControlsStoreState['context']>) => void
  activeComponent: ELuthComponent
  setActiveComponent: (activeComponent: ELuthComponent) => void
  controls: PresentationControlProps
  setControls: (controls: Partial<PresentationControlProps>) => void
  componentVisibility: Set<ELuthComponent>
  setComponentVisibility: (components: Set<ELuthComponent>) => void
}

export const createUIControlsSlice: StateCreator<StoreState, [], [], IUIControlsStoreState> = (
  set,
  get,
) => ({
  workflow: 'Design',
  context: {
    hoveredMesh: '',
  },
  setContext: (context) =>
    set((state) => ({
      context: {
        ...state.context,
        ...context,
      },
    })),
  activeComponent: ELuthComponent.Base,
  setActiveComponent: (activeComponent) => {
    set(() => ({ activeComponent }))
    get().setComponentVisibility(new Set(getComponentScope(activeComponent)))
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
  componentVisibility: new Set(getComponentScope(ELuthComponent.Base)),
  setComponentVisibility: (components) => {
    if (components) set(() => ({ componentVisibility: new Set(components) }))
  },
})
