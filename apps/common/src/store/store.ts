import { create, StateCreator } from 'zustand'

import { ELuthComponent, IConfiguration } from '~/models/configuration.model'
import { initialConfigurationState } from './initialConfigurationState'
import {
  EArmBevelOption,
  EBackMultiPieceOption,
  EBodyDepthOption,
  EBodyShapeOption,
  ECutawayOption,
  EScaleLengthOption,
  ESoundHoleOption,
} from '~/models/options.model'
import { getConfiguredComponent } from '~/helpers/meshUtils'
import {
  backMeshMap,
  bindingMeshMap,
  purflingMeshMap,
  sidesMeshMap,
  soundboardMeshMap,
} from '~/helpers/meshMap'
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
  bodyDepth: EBodyDepthOption
  cutaway: ECutawayOption
  armBevel: EArmBevelOption
}

export interface IScaleOptions {
  scaleLength: EScaleLengthOption
}

export interface ISoundboardOptions {
  soundHole: ESoundHoleOption
}

export interface IBackOptions {
  backMultiPiece: EBackMultiPieceOption
}

export interface ISidesOptions {}

export interface IBindingOptions {}

export interface INeckOptions {}

export interface IHeadstockOptions {}

export interface IFretboardOptions {}

export interface IBridgeOptions {}

export interface IPickguardOptions {}

export interface IStringsOptions {}

export interface IOptionsStoreState {
  bodyOptions: IBodyOptions
  setBodyOptions: (bodyOptions: Partial<IBodyOptions>) => void
  scaleOptions: IScaleOptions
  setScaleOptions: (bodyOptions: Partial<IScaleOptions>) => void
  soundboardOptions: ISoundboardOptions
  setSoundboardOptions: (soundboardOptions: Partial<ISoundboardOptions>) => void
  backOptions: IBackOptions
  setBackOptions: (backOptions: Partial<IBackOptions>) => void
  sidesOptions: ISidesOptions
  setSidesOptions: (sidesOptions: Partial<ISidesOptions>) => void
  bindingOptions: IBindingOptions
  setBindingOptions: (bindingOptions: Partial<IBindingOptions>) => void
  neckOptions: INeckOptions
  setNeckOptions: (neckOptions: Partial<INeckOptions>) => void
  headstockOptions: IHeadstockOptions
  setHeadstockOptions: (headstockOptions: Partial<IHeadstockOptions>) => void
  fretboardOptions: IFretboardOptions
  setFretboardOptions: (fretboardOptions: Partial<IFretboardOptions>) => void
  bridgeOptions: IBridgeOptions
  setBridgeOptions: (bridgeOptions: Partial<IBridgeOptions>) => void
  pickguardOptions: IPickguardOptions
  setPickguardOptions: (pickguardOptions: Partial<IPickguardOptions>) => void
  stringsOptions: IStringsOptions
  setStringsOptions: (stringsOptions: Partial<IStringsOptions>) => void
}

export const createOptionsSlice: StateCreator<StoreState, [], [], IOptionsStoreState> = (
  set,
  get,
) => ({
  bodyOptions: {
    bodyShape: EBodyShapeOption.Dreadnought,
    bodyDepth: EBodyDepthOption.Standard,
    cutaway: ECutawayOption.Venetian,
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
  scaleOptions: {
    scaleLength: EScaleLengthOption.Standard,
  },
  setScaleOptions: (scaleOptions) => {
    set((state) => ({
      scaleOptions: { ...state.scaleOptions, ...scaleOptions },
    }))

    const { neckOptions, headstockOptions, fretboardOptions, bridgeOptions } = get()

    get().setNeckOptions(neckOptions)
    get().setHeadstockOptions(headstockOptions)
    get().setFretboardOptions(fretboardOptions)
    get().setBridgeOptions(bridgeOptions)
  },
  soundboardOptions: {
    soundHole: ESoundHoleOption.Round,
  },
  setSoundboardOptions: (options) => {
    set((state) => ({
      soundboardOptions: { ...state.soundboardOptions, ...options },
    }))

    const { bodyOptions, soundboardOptions, configuration } = get()

    const selectedSoundboardMeshes =
      soundboardMeshMap[bodyOptions.bodyShape][bodyOptions.cutaway][bodyOptions.armBevel][
        soundboardOptions.soundHole
      ] ?? []

    // Create the new configuration with updated meshes
    set({
      configuration: {
        ...configuration, // ensure new reference
        components: configuration.components?.map((component) =>
          component.name === ELuthComponent.Soundboard
            ? { ...component, meshes: [...selectedSoundboardMeshes] } // ensure new reference for `meshes`
            : component,
        ),
      },
    })
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
        backMeshMap[bodyOptions.bodyShape][bodyOptions.bodyDepth][bodyOptions.cutaway][
          backOptions.backMultiPiece
        ] ?? []
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
      bindingOptions: { ...state.bindingOptions, ...options },
    }))

    const { bodyOptions, bindingOptions, configuration } = get()

    const bindingComponent = getConfiguredComponent(configuration, ELuthComponent.Binding)

    if (bindingComponent) {
      const selectedBindingMeshes =
        bindingMeshMap[bodyOptions.bodyShape][bodyOptions.bodyDepth][bodyOptions.cutaway][
          bodyOptions.armBevel
        ] ?? []
      bindingComponent.meshes = selectedBindingMeshes
    }

    const purflingComponent = getConfiguredComponent(configuration, ELuthComponent.Purfling)
    if (purflingComponent) {
      const selectedBindingMeshes =
        purflingMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[bodyOptions.armBevel] ??
        []
      purflingComponent.meshes = selectedBindingMeshes
    }

    set({ configuration: { ...configuration } })
  },
  neckOptions: {},
  setNeckOptions: (options) => {
    set((state) => ({
      neckOptions: { ...state.neckOptions, ...options },
    }))

    const { configuration, scaleOptions } = get()

    const neckComponent = getConfiguredComponent(configuration, ELuthComponent.Neck)

    if (neckComponent) {
      const selectedneckMeshes: any[] = []
      //     backMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[backOptions.backMultiPiece] ??
      //     []
      neckComponent.meshes = selectedneckMeshes
    }
    set({ configuration: { ...configuration } })
  },
  headstockOptions: {},
  setHeadstockOptions: (options) => {
    set((state) => ({
      headstockOptions: { ...state.headstockOptions, ...options },
    }))

    const { configuration, scaleOptions } = get()

    const headstockComponent = getConfiguredComponent(configuration, ELuthComponent.Headstock)

    if (headstockComponent) {
      const selectedHeadstockMeshes: any[] = []
      //     backMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[backOptions.backMultiPiece] ??
      //     []
      headstockComponent.meshes = selectedHeadstockMeshes
    }
    set({ configuration: { ...configuration } })
  },
  fretboardOptions: {},
  setFretboardOptions: (options) => {
    set((state) => ({
      fretboardOptions: { ...state.fretboardOptions, ...options },
    }))

    const { configuration, scaleOptions } = get()

    const fretboardComponent = getConfiguredComponent(configuration, ELuthComponent.Fretboard)

    if (fretboardComponent) {
      const selectedFretboardkMeshes: any[] = []
      //     backMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[backOptions.backMultiPiece] ??
      //     []
      fretboardComponent.meshes = selectedFretboardkMeshes
    }
    set({ configuration: { ...configuration } })
  },
  bridgeOptions: {},
  setBridgeOptions: (options) => {
    set((state) => ({
      bridgeOptions: { ...state.bridgeOptions, ...options },
    }))

    const { configuration, scaleOptions } = get()

    const bridgeComponent = getConfiguredComponent(configuration, ELuthComponent.Bridge)

    if (bridgeComponent) {
      const selectedBridgekMeshes: any[] = []
      //     backMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[backOptions.backMultiPiece] ??
      //     []
      bridgeComponent.meshes = selectedBridgekMeshes
    }
    set({ configuration: { ...configuration } })
  },
  pickguardOptions: {},
  setPickguardOptions: (options) => {
    set((state) => ({
      pickguardOptions: { ...state.pickguardOptions, ...options },
    }))

    const { configuration } = get()

    const pickguardComponent = getConfiguredComponent(configuration, ELuthComponent.Pickguard)

    if (pickguardComponent) {
      const selectedPickguardkMeshes: any[] = []
      //     backMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[backOptions.backMultiPiece] ??
      //     []
      pickguardComponent.meshes = selectedPickguardkMeshes
    }
    set({ configuration: { ...configuration } })
  },
  stringsOptions: {},
  setStringsOptions: (options) => {
    set((state) => ({
      stringsOptions: { ...state.pickguardOptions, ...options },
    }))

    const { configuration, scaleOptions } = get()

    const stringsComponent = getConfiguredComponent(configuration, ELuthComponent.Strings)

    if (stringsComponent) {
      const selectedStringskMeshes: any[] = []
      //     backMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[backOptions.backMultiPiece] ??
      //     []
      stringsComponent.meshes = selectedStringskMeshes
    }
    set({ configuration: { ...configuration } })
  },
})

/** UI CONTROLS STATE SLICE */

// interface IControls extends PresentationControlProps {
//   rotation: [number, number, number]
// }

export interface IUIControlsStoreState {
  workflow: 'Design' | 'Crafting'
  scope: ELuthComponent
  setScope: (scope: ELuthComponent) => void
  controls: PresentationControlProps
  setControls: (controls: Partial<PresentationControlProps>) => void
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
    // snap: { mass: 5, tension: 140 },
    // co nfig: { mass: 1, tension: 80 },
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
