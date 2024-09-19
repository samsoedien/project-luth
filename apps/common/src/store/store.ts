import { Material, Texture } from 'three'
import { create } from 'zustand'
import { GLTFResult } from '../_generated/LuthAcousticDreadnaught'
import {
  EArmBevelOption,
  EBackMultiPiece,
  EBodyShapeOption,
  ECutawayOption,
} from '../models/options.model'
import { ELuthComponent } from '../models/configuration.model'
import { initialConfigurationState } from './initialConfigurationState'
import { backMeshMap, bindingMeshMap, sidesMeshMap, soundboardMeshMap } from '~/features/meshMap'

export interface IConfiguration {
  name: string
  file?: string
  version: string
  components: IComponentData[]
}

export interface IComponentData {
  name: ELuthComponent
  meshes: Array<keyof GLTFResult['nodes']>
  material?: Material
  texture?: string
  components?: IComponentData[]
  groupVisibility?: boolean
}

export interface IOptions {
  bodyShape: EBodyShapeOption
  cutaway: ECutawayOption
  armBevel: EArmBevelOption
  backMultiPiece: EBackMultiPiece
}

export interface IConfigurationStoreState {
  options: IOptions
  setOptions: (options: Partial<IOptions>) => void
  configuration: IConfiguration
  applyOptionsToConfig: () => void
}

export const useConfigurationStore = create<IConfigurationStoreState>()((set, get) => ({
  options: {
    bodyShape: EBodyShapeOption.Dreadnought,
    cutaway: ECutawayOption.None,
    armBevel: EArmBevelOption.None,
    backMultiPiece: EBackMultiPiece.OnePiece,
  },
  setOptions: (options) => {
    set((state) => ({
      options: { ...state.options, ...options },
    }))
    // get().applyOptionsToConfig() // Trigger configuration update
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
      console.log('selectedSoundboardMeshes', selectedSoundboardMeshes)
    }

    const backComponent = configuration.components.find(
      (component) => component.name === ELuthComponent.Back,
    )
    if (backComponent) {
      const selectedBackMeshes = backMeshMap[bodyShape]?.[cutaway]?.[backMultiPiece] ?? []
      backComponent.meshes = selectedBackMeshes
      console.log('selectedBackMeshes', selectedBackMeshes)
    }

    const sidesComponent = configuration.components.find(
      (component) => component.name === ELuthComponent.Sides,
    )
    if (sidesComponent) {
      const selectedSidesMeshes = sidesMeshMap[bodyShape]?.[cutaway]?.[armBevel] ?? []
      sidesComponent.meshes = selectedSidesMeshes
      console.log('selectedSidesMeshes', selectedSidesMeshes)
    }

    const bindingComponent = configuration.components.find(
      (component) => component.name === ELuthComponent.Binding,
    )
    if (bindingComponent) {
      const selectedBindingMeshes = bindingMeshMap[bodyShape]?.[cutaway]?.[armBevel] ?? []
      bindingComponent.meshes = selectedBindingMeshes
      console.log('selectedBindingMeshes', selectedBindingMeshes)
    }

    set({ configuration: { ...configuration } })
  },
}))
