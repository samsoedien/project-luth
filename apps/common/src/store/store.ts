import { create, StateCreator } from 'zustand'

import { ELuthComponent, IConfiguration } from '~/models/configuration.model'
import { initialConfigurationState } from './initialConfigurationState'
import {
  EBodyArmBevelOption,
  EBackMultiPieceOption,
  EBodyDepthOption,
  EBodyShapeOption,
  EBodyCutawayOption,
  EHeelJointOption,
  ENeckShapeOption,
  ERosetteVariantOption,
  EScaleLengthOption,
  ESoundboardSoundHoleOption,
  EScaleFretHeelJointOption,
  ESidesSoundPortOption,
  EPurflingVariantOption,
  EPickguardShapeOption,
  EKerflingVariant,
  EFretboardRadiusOption,
  EFretboardExtensionOption,
  EScaleAssymetrical,
  ENeckAssymmetricalOption,
  IBackOptions,
  IBackStripOptions,
  IBindingOptions,
  IBodyOptions,
  IBracesOptions,
  IBridgeOptions,
  IFretboardOptions,
  IHeadstockOptions,
  IHeelTailBlocksOptions,
  IKerflingOtions,
  INeckOptions,
  IPickguardOptions,
  IPurflingOptions,
  IRosetteOptions,
  IScaleOptions,
  ISidesOptions,
  ISoundboardOptions,
  IStringsOptions,
  EHeadstockShapeOption,
  EBridgeTypeOption,
  EBracePatternOption,
  EBindingThicknessOption,
  EBodyOrientationOption,
  INutOptions,
  ISaddleOptions,
  IFretsOptions,
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
import { rosetteMeshMap } from '~/components/soundboard/rosette/rosetteMeshMap'
import { neckMeshMap } from '~/components/neck/neckMeshMap'
import { headstockMeshMap } from '~/components/headstock/headstockMeshMap'
import { fretboardMeshMap } from '~/components/fretboard/fretboardMeshMap'
import { stringsMeshMap } from '~/components/strings/stringsMeshMap'
import { pickguardMeshMap } from '~/components/pickguard/pickguardMeshMap'
import { bridgeMeshMap } from '~/components/bridge/bridgeMeshMap'
import { kerflingMeshMap } from '~/components/sides/kerfling/kerflingMeshMap'
import { backStripMeshMap } from '~/components/back/backStrip/backStripMeshMap'
import { nutMeshMap } from '~/components/fretboard/nut/nutMeshMap'
import { ISaddleMeshesProps } from '~/components/bridge/saddle/SaddleMeshes'
import { saddleMeshMap } from '~/components/bridge/saddle/saddleMeshMap'
import { fretsMeshMap } from '~/components/fretboard/frets/fretsMeshMap'

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
  setConfiguration: (config) => {
    set((state) => ({
      configuration: {
        ...state.configuration,
        ...config,
      },
    }))
  },
  saveConfiguration: () => {
    const config = get().configuration
    localStorage.setItem('guitar-config', JSON.stringify(config))
  },
  loadConfiguration: (config) => {
    set({ configuration: config })
  },
})

/** OPTIONS STATE SLICE */
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
  kerflingOptions: IKerflingOtions
  setKerflingOptions: (kerflingOptions: Partial<IKerflingOtions>) => void
  heelTailBlocksOptions: IHeelTailBlocksOptions
  setHeelTailBlocksOptions: (heelTailBlocksOptions: Partial<IHeelTailBlocksOptions>) => void
  purflingOptions: IPurflingOptions
  setPurflingOptions: (purflingOptions: Partial<IPurflingOptions>) => void
  fretsOptions: IFretsOptions
  setFretsOptions: (fretsOptions: Partial<IFretsOptions>) => void
  nutOptions: INutOptions
  setNutOptions: (nutOptions: Partial<INutOptions>) => void
  saddleOptions: ISaddleOptions
  setSaddleOptions: (saddleOptions: Partial<ISaddleOptions>) => void
}

export const createOptionsSlice: StateCreator<StoreState, [], [], IOptionsStoreState> = (
  set,
  get,
) => ({
  /** Level 1 Options: Body & Scale (will delegate changes to a set components) */
  bodyOptions: {
    orientation: EBodyOrientationOption.RightHanded,
    bodyShape: EBodyShapeOption.Dreadnought,
    bodyDepth: EBodyDepthOption.Standard,
    cutaway: EBodyCutawayOption.Venetian,
    armBevel: EBodyArmBevelOption.None,
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
    assymetrical: EScaleAssymetrical.None,
    fretHeelJoint: EScaleFretHeelJointOption.Fret14,
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
    soundHole: ESoundboardSoundHoleOption.Standard,
  },
  setSoundboardOptions: (options) => {
    set((state) => ({
      soundboardOptions: { ...state.soundboardOptions, ...options },
    }))

    const {
      bodyOptions,
      soundboardOptions,
      rosetteOptions,
      bracesOptions,
      pickguardOptions,
      configuration,
    } = get()

    const selectedSoundboardMeshes =
      soundboardMeshMap[bodyOptions.bodyShape][bodyOptions.cutaway][bodyOptions.armBevel][
        soundboardOptions.soundHole
      ]

    get().setRosetteOptions(rosetteOptions)
    get().setBracesOptions(bracesOptions)
    get().setPickguardOptions(pickguardOptions)

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

    backComponent.meshes =
      backMeshMap[bodyOptions.bodyShape][bodyOptions.bodyDepth][bodyOptions.cutaway][
        backOptions.backMultiPiece
      ]

    get().setBackStripOptions(backStripOptions)

    set({ configuration: { ...configuration } })
  },
  sidesOptions: {
    soundPort: ESidesSoundPortOption.None,
  },
  setSidesOptions: (options) => {
    set((state) => ({
      sidesOptions: { ...state.sidesOptions, ...options },
    }))

    const { bodyOptions, sidesOptions, heelTailBlocksOptions, kerflingOptions, configuration } =
      get()

    const sidesComponent = getConfiguredComponent(configuration, ELuthComponent.Sides)

    sidesComponent.meshes =
      sidesMeshMap[bodyOptions.bodyShape][bodyOptions.bodyDepth][bodyOptions.cutaway][
        bodyOptions.armBevel
      ][sidesOptions.soundPort]

    get().setHeelTailBlocksOptions(heelTailBlocksOptions)
    get().setKerflingOptions(kerflingOptions)

    set({ configuration: { ...configuration } })
  },
  bindingOptions: {
    thickness: EBindingThicknessOption.Standard,
  },
  setBindingOptions: (options) => {
    set((state) => ({
      bindingOptions: { ...state.bindingOptions, ...options },
    }))

    const { bodyOptions, bindingOptions, purflingOptions, configuration } = get()

    const bindingComponent = getConfiguredComponent(configuration, ELuthComponent.Binding)

    bindingComponent.meshes =
      bindingMeshMap[bodyOptions.bodyShape][bodyOptions.bodyDepth][bodyOptions.cutaway][
        bodyOptions.armBevel
      ]

    get().setPurflingOptions(purflingOptions)

    set({ configuration: { ...configuration } })
  },
  neckOptions: {
    profileShape: ENeckShapeOption.CShape,
    assymetrical: ENeckAssymmetricalOption.None,
  },
  setNeckOptions: (options) => {
    set((state) => ({
      neckOptions: { ...state.neckOptions, ...options },
    }))

    const { configuration, scaleOptions, neckOptions } = get()

    const neckComponent = getConfiguredComponent(configuration, ELuthComponent.Neck)

    neckComponent.meshes =
      neckMeshMap[scaleOptions.scaleLength][scaleOptions.assymetrical][scaleOptions.fretHeelJoint][
        neckOptions.profileShape
      ][neckOptions.assymetrical]

    set({ configuration: { ...configuration } })
  },
  headstockOptions: {
    headstockShape: EHeadstockShapeOption.Standard,
  },
  setHeadstockOptions: (options) => {
    set((state) => ({
      headstockOptions: { ...state.headstockOptions, ...options },
    }))

    const { configuration, scaleOptions, headstockOptions } = get()

    const headstockComponent = getConfiguredComponent(configuration, ELuthComponent.Headstock)

    headstockComponent.meshes =
      headstockMeshMap[scaleOptions.scaleLength][scaleOptions.assymetrical][
        scaleOptions.fretHeelJoint
      ][headstockOptions.headstockShape]

    set({ configuration: { ...configuration } })
  },
  fretboardOptions: {
    radius: EFretboardRadiusOption.Modern,
    extension: EFretboardExtensionOption.Straight,
  },
  setFretboardOptions: (options) => {
    set((state) => ({
      fretboardOptions: { ...state.fretboardOptions, ...options },
    }))

    const { configuration, scaleOptions, fretboardOptions, fretsOptions } = get()

    const fretboardComponent = getConfiguredComponent(configuration, ELuthComponent.Fretboard)

    fretboardComponent.meshes =
      fretboardMeshMap[scaleOptions.scaleLength][scaleOptions.assymetrical][
        scaleOptions.fretHeelJoint
      ][fretboardOptions.extension][fretboardOptions.radius]

    get().setFretsOptions(fretsOptions)

    set({ configuration: { ...configuration } })
  },
  bridgeOptions: { variant: EBridgeTypeOption.Traditional },
  setBridgeOptions: (options) => {
    set((state) => ({
      bridgeOptions: { ...state.bridgeOptions, ...options },
    }))

    const { configuration, scaleOptions, bridgeOptions } = get()

    const bridgeComponent = getConfiguredComponent(configuration, ELuthComponent.Bridge)

    bridgeComponent.meshes =
      bridgeMeshMap[scaleOptions.scaleLength][scaleOptions.assymetrical][
        scaleOptions.fretHeelJoint
      ][bridgeOptions.variant]

    set({ configuration: { ...configuration } })
  },
  pickguardOptions: { shape: EPickguardShapeOption.Standard },
  setPickguardOptions: (options) => {
    set((state) => ({
      pickguardOptions: { ...state.pickguardOptions, ...options },
    }))

    const { configuration, soundboardOptions, pickguardOptions, bodyOptions } = get()

    const pickguardComponent = getConfiguredComponent(configuration, ELuthComponent.Pickguard)

    pickguardComponent.meshes =
      pickguardMeshMap[soundboardOptions.soundHole][pickguardOptions.shape]

    set({ configuration: { ...configuration } })
  },
  stringsOptions: {},
  setStringsOptions: (options) => {
    set((state) => ({
      stringsOptions: { ...state.pickguardOptions, ...options },
    }))

    const { configuration, scaleOptions } = get()

    const stringsComponent = getConfiguredComponent(configuration, ELuthComponent.Strings)

    stringsComponent.meshes = stringsMeshMap[scaleOptions.scaleLength]

    set({ configuration: { ...configuration } })
  },
  /** Level 3 Options: Sub Components (will not delegate any changes since it cannot have any child relations) */
  rosetteOptions: { variant: ERosetteVariantOption.VariantA },
  setRosetteOptions: (options) => {
    set((state) => ({
      rosetteOptions: { ...state.rosetteOptions, ...options },
    }))

    const { configuration, bodyOptions, rosetteOptions, soundboardOptions } = get()

    const rosetteComponent = getConfiguredComponent(configuration, ELuthComponent.Rosette)

    const selectedRosetteMeshes =
      rosetteMeshMap[soundboardOptions.soundHole][rosetteOptions.variant]
    rosetteComponent.meshes = selectedRosetteMeshes

    set({ configuration: { ...configuration } })
  },
  bracesOptions: { bracePattern: EBracePatternOption.X },
  setBracesOptions: (options) => {
    set((state) => ({
      bracesOptions: { ...state.bracesOptions, ...options },
    }))

    const { configuration, bodyOptions, soundboardOptions } = get()

    const bracesComponent = getConfiguredComponent(configuration, ELuthComponent.Braces)

    const selectedBracesMeshes =
      bracesMeshMap[bodyOptions.bodyShape][bodyOptions.cutaway][soundboardOptions.soundHole]

    bracesComponent.meshes = selectedBracesMeshes

    set({ configuration: { ...configuration } })
  },
  backStripOptions: {},
  setBackStripOptions: (options) => {
    set((state) => ({
      backStripOptions: { ...state.backStripOptions, ...options },
    }))

    const { configuration, bodyOptions, backOptions } = get()

    const backStripComponent = getConfiguredComponent(configuration, ELuthComponent.BackStrip)

    const selectedBackStripMeshes =
      backStripMeshMap[bodyOptions.bodyShape][bodyOptions.bodyDepth][backOptions.backMultiPiece]

    backStripComponent.meshes = selectedBackStripMeshes

    set({ configuration: { ...configuration } })
  },
  kerflingOptions: {
    variant: EKerflingVariant.Traditional,
  },
  setKerflingOptions: (options) => {
    set((state) => ({
      kerflingOptions: { ...state.kerflingOptions, ...options },
    }))

    const { configuration, bodyOptions, kerflingOptions, backOptions } = get()

    const kerflingComponent = getConfiguredComponent(configuration, ELuthComponent.Kerfling)

    const selectedKerflingMeshes =
      kerflingMeshMap[bodyOptions.bodyShape][bodyOptions.bodyDepth][bodyOptions.cutaway][
        bodyOptions.armBevel
      ][kerflingOptions.variant]

    kerflingComponent.meshes = selectedKerflingMeshes

    set({ configuration: { ...configuration } })
  },
  heelTailBlocksOptions: { heelJoint: EHeelJointOption.Dovetail },
  setHeelTailBlocksOptions: (options) => {
    set((state) => ({
      heelTailBlocksOptions: { ...state.heelTailBlocksOptions, ...options },
    }))

    const { configuration, bodyOptions, heelTailBlocksOptions } = get()

    const heelTailBlocksComponent = getConfiguredComponent(
      configuration,
      ELuthComponent.HeelTailBlocks,
    )

    const selectedHeelTailBlocksMeshes =
      heelTailBlocksMeshMap[bodyOptions.bodyShape][bodyOptions.bodyDepth][
        heelTailBlocksOptions.heelJoint
      ]

    heelTailBlocksComponent.meshes = selectedHeelTailBlocksMeshes

    set({ configuration: { ...configuration } })
  },
  purflingOptions: {
    variant: EPurflingVariantOption.Herringbone,
  },
  setPurflingOptions: (options) => {
    set((state) => ({
      purflingOptions: { ...state.purflingOptions, ...options },
    }))

    const { configuration, bodyOptions, bindingOptions, purflingOptions } = get()

    const purflingComponent = getConfiguredComponent(configuration, ELuthComponent.Purfling)

    const selectedPurflingMeshes =
      purflingMeshMap[bodyOptions.bodyShape][bodyOptions.bodyDepth][bodyOptions.cutaway][
        bodyOptions.armBevel
      ][purflingOptions.variant]
    purflingComponent.meshes = selectedPurflingMeshes

    set({ configuration: { ...configuration } })
  },
  fretsOptions: {},
  setFretsOptions: (options) => {
    set((state) => ({
      fretsOptions: { ...state.fretsOptions, ...options },
    }))

    const { configuration, scaleOptions, fretboardOptions } = get()

    const fretsComponent = getConfiguredComponent(configuration, ELuthComponent.Frets)

    const selectedFretsMeshes =
      fretsMeshMap[scaleOptions.scaleLength][scaleOptions.assymetrical][scaleOptions.fretHeelJoint][
        fretboardOptions.extension
      ]

    fretsComponent.meshes = selectedFretsMeshes

    set({ configuration: { ...configuration } })
  },
  nutOptions: {},
  setNutOptions: (options) => {
    set((state) => ({
      nutOptions: { ...state.nutOptions, ...options },
    }))

    const { configuration, scaleOptions } = get()

    const nutComponent = getConfiguredComponent(configuration, ELuthComponent.Nut)

    const selectedNutMeshes =
      nutMeshMap[scaleOptions.scaleLength][scaleOptions.assymetrical][scaleOptions.fretHeelJoint]
    nutComponent.meshes = selectedNutMeshes

    set({ configuration: { ...configuration } })
  },
  saddleOptions: {},
  setSaddleOptions: (options) => {
    set((state) => ({
      saddleOptions: { ...state.saddleOptions, ...options },
    }))

    const { configuration, scaleOptions } = get()

    const saddleComponent = getConfiguredComponent(configuration, ELuthComponent.Saddle)

    const selectedSaddleMeshes =
      saddleMeshMap[scaleOptions.scaleLength][scaleOptions.assymetrical][scaleOptions.fretHeelJoint]
    saddleComponent.meshes = selectedSaddleMeshes

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
