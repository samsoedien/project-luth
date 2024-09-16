import { create } from 'zustand'
import { EBodyShape } from '../features/3d-configurator/configurationOptions'
import { Material, MeshStandardMaterial } from 'three'
import { GLTFResult } from '..//_generated/LuthGuitar'

export enum LuthComponent {
  Soundboard = 'Soundboard',
  Back = 'Back',
  Sides = 'Sides',
  Binding = 'Binding',
  Neck = 'Neck',
  Headstock = 'Headstock',
  Fretboard = 'Fretboard',
  Bridge = 'Bridge',
  Pickguard = 'Pickguard',
  Strings = 'Strings',
  Perfling = 'Perfling',
}

// Define the IComponentData and IConfiguration types
export interface IComponentData {
  name: LuthComponent
  meshes: Array<keyof GLTFResult['nodes']>
  material?: Material
  components?: IComponentData[]
}

export interface IConfiguration {
  name: string
  bodyShape: EBodyShape
  components: IComponentData[]
}

// Define the Zustand store
interface ConfigurationStoreState {
  configuration: IConfiguration
  setConfiguration: (config: IConfiguration) => void
}

export const useConfigurationStore = create<ConfigurationStoreState>()((set) => ({
  configuration: {
    name: 'Luth_Model',
    bodyShape: EBodyShape.Dreadnought,
    components: [
      {
        name: LuthComponent.Soundboard,
        meshes: ['Body_Soundboard_Venetian_Cutaway_1'],
        material: new MeshStandardMaterial({ color: 'red' }),
      },

      {
        name: LuthComponent.Binding,
        meshes: ['Body_Binding_Top_Venetian_Cutaway_1', 'Body_Binding_Bottom_Venetian_Cutaway_1'],
        components: [
          {
            name: LuthComponent.Perfling,
            meshes: [
              'Body_Binding_Top_Venetian_Cutaway_1',
              'Body_Binding_Bottom_Venetian_Cutaway_1',
            ],
          },
        ],
      },
      {
        name: LuthComponent.Neck,
        meshes: ['Body_Neck_1', 'Body_Heel_1'],
      },
      {
        name: LuthComponent.Sides,
        meshes: ['Body_Sides_1'],
      },
    ],
  },
  setConfiguration: (config) => set({ configuration: config }),
}))
