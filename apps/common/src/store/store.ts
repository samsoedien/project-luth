import { Material } from 'three'
import { create } from 'zustand'
import { GLTFResult } from '../_generated/LuthAcousticDreadnaught'
import {
  EArmBevelOption,
  EBackMultiPieceOption,
  EBodyShapeOption,
  ECutawayOption,
} from '../models/options.model'
import { ELuthComponent } from '../models/configuration.model'
import { initialConfigurationState } from './initialConfigurationState'
import {
  backMeshMap,
  backStripMeshMap,
  bindingMeshMap,
  sidesMeshMap,
  soundboardMeshMap,
} from '~/helpers/meshMap'

export interface IBaseConfiguration {
  name: string
  file?: string
  version: string
  components: IConfiguration[]
}

export interface IConfiguration {
  name: ELuthComponent
  meshes: Array<keyof GLTFResult['nodes']>
  material?: Material
  texture?: string
  components?: IConfiguration[]
  groupVisibility?: boolean
}

export interface IOptions {
  bodyShape: EBodyShapeOption
  cutaway: ECutawayOption
  armBevel: EArmBevelOption
  backMultiPiece: EBackMultiPieceOption
}

export interface IConfigurationStoreState {
  options: IOptions
  setOptions: (options: Partial<IOptions>) => void
  configuration: IBaseConfiguration
  applyOptionsToConfig: () => void
}

export const useConfigurationStore = create<IConfigurationStoreState>()((set, get) => ({
  options: {
    bodyShape: EBodyShapeOption.Dreadnought,
    cutaway: ECutawayOption.None,
    armBevel: EArmBevelOption.None,
    backMultiPiece: EBackMultiPieceOption.OnePiece,
  },
  setOptions: (options) => {
    set((state) => ({
      options: { ...state.options, ...options },
    }))
    get().applyOptionsToConfig() // Trigger configuration update
  },
  configuration: initialConfigurationState,
  applyOptionsToConfig: () => {
    const { options, configuration } = get()

    const { bodyShape, cutaway, armBevel, backMultiPiece } = options

    const soundboardComponent = configuration.components.find(
      (component) => component.name === ELuthComponent.Soundboard,
    )
    if (soundboardComponent) {
      const selectedSoundboardMeshes = soundboardMeshMap[bodyShape]?.[cutaway]?.[armBevel] ?? []
      soundboardComponent.meshes = selectedSoundboardMeshes
    }

    const backComponent = configuration.components.find(
      (component) => component.name === ELuthComponent.Back,
    )
    if (backComponent) {
      const selectedBackMeshes = backMeshMap[bodyShape]?.[cutaway]?.[backMultiPiece] ?? []
      backComponent.meshes = selectedBackMeshes
    }

    const sidesComponent = configuration.components.find(
      (component) => component.name === ELuthComponent.Sides,
    )
    if (sidesComponent) {
      const selectedSidesMeshes = sidesMeshMap[bodyShape]?.[cutaway]?.[armBevel] ?? []
      sidesComponent.meshes = selectedSidesMeshes
    }

    const backStripComponent = configuration.components.find(
      (component) => component.name === ELuthComponent.BackStrip,
    )
    if (backStripComponent) {
      const selectedBackMeshes = backStripMeshMap[bodyShape]?.[cutaway]?.[backMultiPiece] ?? []
      backStripComponent.meshes = selectedBackMeshes
    }

    const bindingComponent = configuration.components.find(
      (component) => component.name === ELuthComponent.Binding,
    )
    if (bindingComponent) {
      const selectedBindingMeshes = bindingMeshMap[bodyShape]?.[cutaway]?.[armBevel] ?? []
      bindingComponent.meshes = selectedBindingMeshes
    }

    set({ configuration: { ...configuration } })
  },
}))
