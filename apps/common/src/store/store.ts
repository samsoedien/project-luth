import { create, StateCreator } from 'zustand'

import { ELuthComponent, IConfiguration } from '~/models/configuration.model'
import { initialConfigurationState } from './initialConfigurationState'
import {
  EArmBevelOption,
  EBackMultiPieceOption,
  EBodyDepthOption,
  EBodyShapeOption,
  ECutawayOption,
  EHeelJointOption,
  ENeckShapeOption,
  EScaleLengthOption,
  ESoundHoleOption,
} from '~/models/options.model'
import { getConfiguredComponent } from '~/helpers/meshUtils'

import { PresentationControlProps } from '@react-three/drei'

import { backMeshMap } from '~/components/back/backMeshMap'
import { bindingMeshMap } from '~/components/binding/bindingMeshMap'
import { purflingMeshMap } from '~/components/binding/purfling/purflingMeshMap'
import { sidesMeshMap } from '~/components/sides/sidesMeshMap'
import { bracesMeshMap } from '~/components/soundboard/braces/bracesMeshMap'
import { soundboardMeshMap } from '~/components/soundboard/soundboardMeshMap'
import { heelTailBlocksMeshMap } from '~/components/sides/heelTailBlocks/heelTailBlocksMeshMap'

/** CONFIGURATION STATE SLICE */
export interface IConfigurationStoreState {
  configuration: IConfiguration
  setConfiguration: (config: Partial<IConfiguration>) => void
  saveConfiguration: () => void
  loadConfiguration: (config: IConfiguration) => void
}

export const createConfigurationSlice: StateCreator<
  StoreState,
  [],
  [],
  IConfigurationStoreState
> = (set, get) => ({
  configuration: initialConfigurationState,
  setConfiguration: () => {
    set((state) => ({ configuration: state.configuration }))
  },
  // setConfiguration: (config) => {
  //   set((state) => ({
  //     configuration: {
  //       ...state.configuration,
  //       ...config,
  //     },
  //   }))
  // },
  saveConfiguration: () => {
    const config = get().configuration
    localStorage.setItem('guitar-config', JSON.stringify(config))
  },
  loadConfiguration: (config) => {
    set({ configuration: config })
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

export interface INeckOptions {
  profileShape: ENeckShapeOption
}

export interface IHeadstockOptions {}

export interface IFretboardOptions {}

export interface IBridgeOptions {}

export interface IPickguardOptions {}

export interface IStringsOptions {}

export interface IRosetteOptions {}

export interface IBracesOptions {}

export interface IBackStripOptions {}

export interface IHeelTailBlocksOptions {}

export interface IPurflingOptions {}

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
  rosetteOptions: IRosetteOptions
  setRosetteOptions: (rosetteOptions: Partial<IRosetteOptions>) => void
  bracesOptions: IBracesOptions
  setBracesOptions: (bracesOptions: Partial<IBracesOptions>) => void
  backStripOptions: IBackStripOptions
  setBackStripOptions: (backStripOptions: Partial<IBackStripOptions>) => void
  heelTailBlocksOptions: IHeelTailBlocksOptions
  setHeelTailBlocksOptions: (heelTailBlocksOptions: Partial<IHeelTailBlocksOptions>) => void
  purflingOptions: IPurflingOptions
  setPurflingOptions: (purflingOptions: Partial<IPurflingOptions>) => void
}

export const createOptionsSlice: StateCreator<StoreState, [], [], IOptionsStoreState> = (
  set,
  get,
) => ({
  /** Level 1 Options: Body & Scale (will delegate changes to a set components) */
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
  /** Level 2 Options: Components (wil delegate changes to all it's child components) */
  soundboardOptions: {
    soundHole: ESoundHoleOption.Round,
  },
  setSoundboardOptions: (options) => {
    set((state) => ({
      soundboardOptions: { ...state.soundboardOptions, ...options },
    }))

    const { bodyOptions, soundboardOptions, rosetteOptions, bracesOptions, configuration } = get()

    const selectedSoundboardMeshes =
      soundboardMeshMap[bodyOptions.bodyShape][bodyOptions.cutaway][bodyOptions.armBevel][
        soundboardOptions.soundHole
      ] ?? []

    get().setRosetteOptions(rosetteOptions)
    get().setBracesOptions(bracesOptions)

    // Create the new configuration with updated meshes //TODO: verify if this implementation can be applied to other setOptions
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

    const { bodyOptions, backOptions, backStripOptions, configuration } = get()

    const backComponent = getConfiguredComponent(configuration, ELuthComponent.Back)

    const selectedBackMeshes =
      backMeshMap[bodyOptions.bodyShape][bodyOptions.bodyDepth][bodyOptions.cutaway][
        backOptions.backMultiPiece
      ] ?? []
    backComponent.meshes = selectedBackMeshes

    get().setBackStripOptions(backStripOptions)

    set({ configuration: { ...configuration } })
  },
  sidesOptions: {},
  setSidesOptions: (options) => {
    set((state) => ({
      sidesOptions: { ...state.sidesOptions, ...options },
    }))

    const { bodyOptions, sidesOptions, configuration } = get()

    const sidesComponent = getConfiguredComponent(configuration, ELuthComponent.Sides)

    const selectedSidesMeshes =
      sidesMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[bodyOptions.armBevel] ?? []
    sidesComponent.meshes = selectedSidesMeshes

    set({ configuration: { ...configuration } })
  },
  bindingOptions: {},
  setBindingOptions: (options) => {
    set((state) => ({
      bindingOptions: { ...state.bindingOptions, ...options },
    }))

    const { bodyOptions, bindingOptions, purflingOptions, configuration } = get()

    const bindingComponent = getConfiguredComponent(configuration, ELuthComponent.Binding)

    const selectedBindingMeshes =
      bindingMeshMap[bodyOptions.bodyShape][bodyOptions.bodyDepth][bodyOptions.cutaway][
        bodyOptions.armBevel
      ] ?? []
    bindingComponent.meshes = selectedBindingMeshes

    get().setPurflingOptions(purflingOptions)

    set({ configuration: { ...configuration } })
  },
  neckOptions: {
    profileShape: ENeckShapeOption.CShape,
  },
  setNeckOptions: (options) => {
    set((state) => ({
      neckOptions: { ...state.neckOptions, ...options },
    }))

    const { configuration, scaleOptions } = get()

    const neckComponent = getConfiguredComponent(configuration, ELuthComponent.Neck)

    const selectedneckMeshes: any[] = []
    //     backMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[backOptions.backMultiPiece] ??
    //     []
    neckComponent.meshes = selectedneckMeshes

    set({ configuration: { ...configuration } })
  },
  headstockOptions: {},
  setHeadstockOptions: (options) => {
    set((state) => ({
      headstockOptions: { ...state.headstockOptions, ...options },
    }))

    const { configuration, scaleOptions } = get()

    const headstockComponent = getConfiguredComponent(configuration, ELuthComponent.Headstock)

    const selectedHeadstockMeshes: any[] = []
    //     backMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[backOptions.backMultiPiece] ??
    //     []
    headstockComponent.meshes = selectedHeadstockMeshes

    set({ configuration: { ...configuration } })
  },
  fretboardOptions: {},
  setFretboardOptions: (options) => {
    set((state) => ({
      fretboardOptions: { ...state.fretboardOptions, ...options },
    }))

    const { configuration, scaleOptions } = get()

    const fretboardComponent = getConfiguredComponent(configuration, ELuthComponent.Fretboard)

    const selectedFretboardkMeshes: any[] = []
    //     backMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[backOptions.backMultiPiece] ??
    //     []
    fretboardComponent.meshes = selectedFretboardkMeshes

    set({ configuration: { ...configuration } })
  },
  bridgeOptions: {},
  setBridgeOptions: (options) => {
    set((state) => ({
      bridgeOptions: { ...state.bridgeOptions, ...options },
    }))

    const { configuration, scaleOptions } = get()

    const bridgeComponent = getConfiguredComponent(configuration, ELuthComponent.Bridge)

    const selectedBridgekMeshes: any[] = []
    //     backMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[backOptions.backMultiPiece] ??
    //     []
    bridgeComponent.meshes = selectedBridgekMeshes

    set({ configuration: { ...configuration } })
  },
  pickguardOptions: {},
  setPickguardOptions: (options) => {
    set((state) => ({
      pickguardOptions: { ...state.pickguardOptions, ...options },
    }))

    const { configuration } = get()

    const pickguardComponent = getConfiguredComponent(configuration, ELuthComponent.Pickguard)

    const selectedPickguardkMeshes: any[] = []
    //     backMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[backOptions.backMultiPiece] ??
    //     []
    pickguardComponent.meshes = selectedPickguardkMeshes

    set({ configuration: { ...configuration } })
  },
  stringsOptions: {},
  setStringsOptions: (options) => {
    set((state) => ({
      stringsOptions: { ...state.pickguardOptions, ...options },
    }))

    const { configuration, scaleOptions } = get()

    const stringsComponent = getConfiguredComponent(configuration, ELuthComponent.Strings)

    const selectedStringsMeshes: any[] = []
    //     backMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[backOptions.backMultiPiece] ??
    //     []
    stringsComponent.meshes = selectedStringsMeshes

    set({ configuration: { ...configuration } })
  },
  /** Level 3 Options: Sub Components (will not delegate any changes since it cannot have any child relations) */
  rosetteOptions: {},
  setRosetteOptions: (options) => {
    set((state) => ({
      rosetteOptions: { ...state.rosetteOptions, ...options },
    }))

    const { configuration, bodyOptions, soundboardOptions } = get()

    const rosetteComponent = getConfiguredComponent(configuration, ELuthComponent.Rosette)

    const selectedRosetteMeshes: any[] = []
    //     backMeshMap?.[bodyOptions.bodyShape]?.[bodyOptions.cutaway]?.[backOptions.backMultiPiece] ??
    //     []
    rosetteComponent.meshes = selectedRosetteMeshes

    set({ configuration: { ...configuration } })
  },
  bracesOptions: {},
  setBracesOptions: (options) => {
    set((state) => ({
      bracesOptions: { ...state.bracesOptions, ...options },
    }))

    const { configuration, bodyOptions, soundboardOptions } = get()

    const bracesComponent = getConfiguredComponent(configuration, ELuthComponent.Braces)

    const selectedBracesMeshes =
      bracesMeshMap[bodyOptions.bodyShape][bodyOptions.cutaway][bodyOptions.armBevel][
        soundboardOptions.soundHole
      ] ?? []

    bracesComponent.meshes = selectedBracesMeshes

    set({ configuration: { ...configuration } })
  },
  backStripOptions: {},
  setBackStripOptions: (options) => {
    set((state) => ({
      backStripOptions: { ...state.backStripOptions, ...options },
    }))

    const { configuration, bodyOptions, backOptions } = get()

    const backStripOptions = getConfiguredComponent(configuration, ELuthComponent.BackStrip)

    const selectedBackStripMeshes: any[] = []

    // const selectedBackStripMeshes =
    //   bracesMeshMap[bodyOptions.bodyShape][bodyOptions.cutaway][bodyOptions.armBevel][
    //     soundboardOptions.soundHole
    //   ] ?? []

    backStripOptions.meshes = selectedBackStripMeshes

    set({ configuration: { ...configuration } })
  },
  heelTailBlocksOptions: { heelJoint: EHeelJointOption.Dovetail },
  setHeelTailBlocksOptions: (options) => {
    set((state) => ({
      heelTailBlocksOptions: { ...state.heelTailBlocksOptions, ...options },
    }))

    const { configuration, bodyOptions, heelTailBlocksOptions, backOptions } = get()

    const heelTailBlocksComponent = getConfiguredComponent(
      configuration,
      ELuthComponent.HeelTailBlocks,
    )

    const selectedHeelTailBlocksMeshes =
      heelTailBlocksMeshMap[bodyOptions.bodyShape][heelTailBlocksOptions.heelJoint] ?? []

    heelTailBlocksComponent.meshes = selectedHeelTailBlocksMeshes

    set({ configuration: { ...configuration } })
  },
  purflingOptions: {},
  setPurflingOptions: (options) => {
    set((state) => ({
      purflingOptions: { ...state.purflingOptions, ...options },
    }))

    const { configuration, bodyOptions, bindingOptions } = get()

    const purflingComponent = getConfiguredComponent(configuration, ELuthComponent.Purfling)

    const selectedPurflingMeshes =
      purflingMeshMap[bodyOptions.bodyShape][bodyOptions.bodyDepth][bodyOptions.cutaway][
        bodyOptions.armBevel
      ] ?? []
    purflingComponent.meshes = selectedPurflingMeshes

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
    snap: false,
  },
  setControls: (controls) => {
    set((state) => ({ controls: { ...state.controls, ...controls } }))
  },
})

/** HISTORY STATE SLICE  */

export interface IHistoryStoreState {
  history: IOptionsStoreState[]
  future: IOptionsStoreState[]
  undo: () => void
  redo: () => void
}

export const createHistorySlice: StateCreator<StoreState, [], [], IHistoryStoreState> = (
  set,
  get,
) => ({
  history: [],
  future: [],
  undo: () => {},
  redo: () => {},
})

/** COMBINED STORE SLICES */

export type StoreState = IConfigurationStoreState &
  IOptionsStoreState &
  IUIControlsStoreState &
  IHistoryStoreState

export const useConfigurationStore = create<StoreState>()((set, get, store) => ({
  ...createConfigurationSlice(set, get, store),
  ...createOptionsSlice(set, get, store),
  ...createUIControlsSlice(set, get, store),
  ...createHistorySlice(set, get, store),
}))
