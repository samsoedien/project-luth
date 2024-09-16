import { meshVisibilityConfig } from '../features/meshVisibilityConfig'
import { MeshVisibilityConfig } from '../features/withMeshModifier'
import { create } from 'zustand'
import {
  getSoundBoardMesh,
  getSidesMesh,
  SidesVisibility,
  getMeshByCutaway,
} from '../features/3d-configurator/configurationOptions'

export enum EBodyShape {
  Dreadnought = 'Dreadnought',
  GrandConcert = 'Grand Concert',
  Auditorium = 'Auditorium',
  Jumbo = 'Jumbo',
  OM = 'OM',
  Parlor = 'Parlor',
}

export enum ECutawayOption {
  None = 'None',
  Venetian = 'Venetian',
  Florentine = 'Florentine',
  Scalloped = 'Scalloped',
}

export interface IConfiguration {
  bodyShape: EBodyShape
  cutaway: ECutawayOption
  armBevel: boolean
  setCutaway: (cutaway: ECutawayOption) => void
  meshVisibilityConfig: MeshVisibilityConfig
  setMeshVisibilityConfig: () => void
}

export const useConfigurationStore = create<IConfiguration>()((set) => ({
  bodyShape: EBodyShape.Dreadnought,
  cutaway: ECutawayOption.None,
  armBevel: false,
  setCutaway: (cutaway) => set(() => ({ cutaway })),
  meshVisibilityConfig,
  setMeshVisibilityConfig: () => {
    set((state) => {
      // const soundboardCutawayMesh = getSoundBoardMesh(state.cutaway)
      const sidesCutawayMesh = getMeshByCutaway(state.cutaway)
      return {
        meshVisibilityConfig: {
          ...meshVisibilityConfig,
          // ...state.meshVisibilityConfig,
          ...sidesCutawayMesh,

          // [sidesCutawayMesh]: { visible: true },
          // Optionally hide other meshes
        },
      }
    })
  },
}))
