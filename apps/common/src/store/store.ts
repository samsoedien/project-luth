import { create } from 'zustand'
import { EBodyShape } from '../features/3d-configurator/configurationOptions'
import { Material, MeshStandardMaterial } from 'three'
import { GLTFResult } from '..//_generated/LuthAcousticDreadnaught'

export enum ELuthComponent {
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
  Braces = 'Braces',
}

export enum EBodyDepth {
  Standard = 'Standard',
  Thinline = 'Thinline',
}

// Define the IComponentData and IConfiguration types
export interface IComponentData {
  name: ELuthComponent
  meshes: Array<keyof GLTFResult['nodes']>
  material?: Material
  components?: IComponentData[]
}

export interface IConfiguration {
  name: string
  bodyShape: EBodyShape
  bodyDepth: EBodyDepth
  components: IComponentData[]
}

// Define the Zustand store
interface ConfigurationStoreState {
  configuration: IConfiguration
  setConfiguration: (config: IConfiguration) => void
  setComponentConfiguration: (
    componentName: ELuthComponent,
    meshes: Array<keyof GLTFResult['nodes']>,
  ) => void
}

export const useConfigurationStore = create<ConfigurationStoreState>()((set) => ({
  configuration: {
    name: 'Luth_Model',
    bodyShape: EBodyShape.Dreadnought,
    bodyDepth: EBodyDepth.Thinline,
    components: [
      {
        name: ELuthComponent.Soundboard,
        meshes: ['Body_Soundboard_Venetian_Cutaway_1'],
        material: new MeshStandardMaterial({ color: 'red' }),
        components: [
          {
            name: ELuthComponent.Braces,
            meshes: [
              'Body_X_BraceB_1',
              'Body_X_BraceC_1',
              'Body_BraceD_1',
              'Body_BraceE_1',
              'Body_BraceF_Right_1',
              'Body_BraceG_Right_1',
              'Body_BraceG_Left_1',
              'Body_BraceF_Left_1',
              'Body_BraceH_Left_1',
              'Body_BraceH_Right_1',
              'Body_Bridge_Plate_1',
            ],
          },
        ],
      },
      {
        name: ELuthComponent.Binding,
        meshes: ['Body_Binding_Top_Venetian_Cutaway_1', 'Body_Binding_Bottom_Venetian_Cutaway_1'],
        components: [
          {
            name: ELuthComponent.Perfling,
            meshes: [
              'Body_Binding_Top_Venetian_Cutaway_1',
              'Body_Binding_Bottom_Venetian_Cutaway_1',
            ],
          },
        ],
      },
      {
        name: ELuthComponent.Neck,
        meshes: ['Body_Neck_1', 'Body_Heel_1'],
      },
      {
        name: ELuthComponent.Sides,
        meshes: ['Body_Sides_1'],
      },
    ],
  },
  setConfiguration: (config) => set({ configuration: config }),
  setComponentConfiguration: (componentName, meshes) =>
    set((state) => ({
      configuration: {
        ...state.configuration,
        components: state.configuration.components.map((component) =>
          component.name === componentName ? { ...component, meshes } : component,
        ),
      },
    })),
}))
