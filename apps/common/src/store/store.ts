import { create, StateCreator } from 'zustand'

import { ELuthComponent, IConfiguration } from '~/models/configuration.model'
import { initialConfigurationState } from './initialConfigurationState'
import {
  EArmBevelOption,
  EBackMultiPieceOption,
  EBodyShapeOption,
  ECutawayOption,
  ESoundHoleOption,
} from '~/models/options.model'
import { getConfiguredComponent } from '~/helpers/meshUtils'
import { backMeshMap, bindingMeshMap, sidesMeshMap, soundboardMeshMap } from '~/helpers/meshMap'
import { PresentationControlProps } from '@react-three/drei'

/** CONFIGURATION STATE SLICE */
export interface IConfigurationStoreState {
  configuration: IConfiguration
  setConfiguration: () => void
}

export const createConfigurationSlice: StateCreator<
  StoreState,
  [],
  [],
  IConfigurationStoreState
> = (set) => ({
  configuration: initialConfigurationState,
  setConfiguration: () => {
    set((state) => ({ configuration: state.configuration }))
  },
})

/** OPTIONS STATE SLICE */
export interface IBodyOptions {
  bodyShape: EBodyShapeOption
  cutaway: ECutawayOption
  armBevel: EArmBevelOption
}

export interface ISoundboardOptions {
  soundHole: ESoundHoleOption
}

export interface IBackOptions {
  backMultiPiece: EBackMultiPieceOption
}

export interface ISidesOptions {}

export interface IBindingOptions {}

export interface IOptionsStoreState {
  bodyOptions: IBodyOptions
  setBodyOptions: (bodyOptions: Partial<IBodyOptions>) => void
  soundboardOptions: ISoundboardOptions
  setSoundboardOptions: (soundboardOptions: Partial<ISoundboardOptions>) => void
  backOptions: IBackOptions
  setBackOptions: (backOptions: Partial<IBackOptions>) => void
  sidesOptions: ISidesOptions
  setSidesOptions: (sidesOptions: Partial<ISidesOptions>) => void
  bindingOptions: IBindingOptions
  setBindingOptions: (bindingOptions: Partial<IBindingOptions>) => void
}

export const createOptionsSlice: StateCreator<StoreState, [], [], IOptionsStoreState> = (
  set,
  get,
) => ({
  bodyOptions: {
    bodyShape: EBodyShapeOption.Dreadnought,
    cutaway: ECutawayOption.None,
    armBevel: EArmBevelOption.None,
  },
  setBodyOptions: (bodyOptions) => {
    set((state) => ({
      bodyOptions: { ...state.bodyOptions, ...bodyOptions },
    }))

    const { soundboardOptions, backOptions, sidesOptions, bindingOptions } = get()

    get().setSoundboardOptions(soundboardOptions)
    get().setBackOptions(backOptions)
    get().setSidesOptions(sidesOptions)
    get().setBindingOptions(bindingOptions)
  },
  soundboardOptions: {
    soundHole: ESoundHoleOption.Round,
  },
  setSoundboardOptions: (options) => {
    set((state) => ({
      soundboardOptions: { ...state.soundboardOptions, ...options },
    }))

    const { bodyOptions, soundboardOptions, configuration } = get()

    const soundboardComponent = getConfiguredComponent(configuration, ELuthComponent.Soundboard)

    if (soundboardComponent) {
      const selectedSoundboardMeshes =
        soundboardMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[bodyOptions.armBevel]?.[
          soundboardOptions.soundHole
        ] ?? []
      soundboardComponent.meshes = selectedSoundboardMeshes
    }

    set({ configuration: { ...configuration } })
  },
  backOptions: {
    backMultiPiece: EBackMultiPieceOption.OnePiece,
  },
  setBackOptions: (options) => {
    set((state) => ({
      backOptions: { ...state.backOptions, ...options },
    }))

    const { bodyOptions, backOptions, configuration } = get()

    const backComponent = getConfiguredComponent(configuration, ELuthComponent.Back)

    if (backComponent) {
      const selectedBackMeshes =
        backMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[backOptions.backMultiPiece] ??
        []
      backComponent.meshes = selectedBackMeshes
    }
    set({ configuration: { ...configuration } })
  },
  sidesOptions: {},
  setSidesOptions: (options) => {
    set((state) => ({
      sidesOptions: { ...state.sidesOptions, ...options },
    }))

    const { bodyOptions, sidesOptions, configuration } = get()

    const sidesComponent = getConfiguredComponent(configuration, ELuthComponent.Sides)

    if (sidesComponent) {
      const selectedSidesMeshes =
        sidesMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[bodyOptions.armBevel] ?? []
      sidesComponent.meshes = selectedSidesMeshes
    }
    set({ configuration: { ...configuration } })
  },
  bindingOptions: {},
  setBindingOptions: (options) => {
    set((state) => ({
      sidesOptions: { ...state.sidesOptions, ...options },
    }))

    const { bodyOptions, bindingOptions, configuration } = get()

    const bindingComponent = getConfiguredComponent(configuration, ELuthComponent.Binding)

    if (bindingComponent) {
      const selectedBindingMeshes =
        bindingMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[bodyOptions.armBevel] ?? []
      bindingComponent.meshes = selectedBindingMeshes
    }
    set({ configuration: { ...configuration } })
  },
})

/** UI CONTROLS STATE SLICE */

interface IControls extends PresentationControlProps {
  rotation: [number, number, number]
}

export interface IUIControlsStoreState {
  workflow: 'Design' | 'Crafting'
  scope: ELuthComponent
  setScope: (scope: ELuthComponent) => void
  controls: IControls
  setControls: (controls: Partial<IControls>) => void
}

export const createUIControlsSlice: StateCreator<StoreState, [], [], IUIControlsStoreState> = (
  set,
) => ({
  workflow: 'Design',
  scope: ELuthComponent.Base,
  setScope: (scope) => {
    set(() => ({ scope }))
  },
  controls: {
    rotation: [0, 0, 0],
    zoom: 2,
    polar: [-Math.PI / 3, Math.PI / 3],
    azimuth: [-Math.PI / 4, Math.PI / 4],
    snap: { mass: 5, tension: 140 },
    config: { mass: 1, tension: 80 },
  },
  setControls: (controls) => {
    set((state) => ({ controls: { ...state.controls, ...controls } }))
  },
})
/** COMBINED STORE SLICES */

export type StoreState = IConfigurationStoreState & IOptionsStoreState & IUIControlsStoreState

export const useConfigurationStore = create<StoreState>()((set, get, store) => ({
  ...createConfigurationSlice(set, get, store),
  ...createOptionsSlice(set, get, store),
  ...createUIControlsSlice(set, get, store),
}))
