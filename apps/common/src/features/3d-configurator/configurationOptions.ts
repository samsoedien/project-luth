import { Group, Material, MeshStandardMaterial } from 'three'
import { GLTFResult } from '~/_generated/LuthGuitar'

export interface ILuthComponents {
  Soundboard: Group
  Back: Group
  Sides: Group
  Binding: Group
  Neck: Group
  Headstock: Group
  Fretboard: Group
  Bridge: Group
  Pickguard: Group
  Strings: Group
}

// export interface IConfiguration {
//   bodyShape: EBodyShape
//   cutaway: ECutawayOption
//   armBevel: boolean
//   soundboard: {
//     material: string
//   }
// }

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

export enum EScaleLength {
  'Standard' = 'Standard',
}

export const getSoundBoardMesh = (cutaway: ECutawayOption): string => {
  switch (cutaway) {
    case ECutawayOption.Venetian:
      return 'Body_Soundboard_Venetian_Cutaway_1'
    case ECutawayOption.Florentine:
      return 'Body_Soundboard_Florentine_Cutaway_1'
    case ECutawayOption.Scalloped:
      return 'Body_Soundboard_Scalloped_Cutaway_1'
    default:
      return 'Body_Soundboard_1'
  }
}

export const getSidesMesh = (cutaway: ECutawayOption): string => {
  switch (cutaway) {
    case ECutawayOption.Venetian:
      return 'Body_Sides_Venetian_Cutaway_1'
    case ECutawayOption.Florentine:
      return 'Body_Sides_Florentine_Cutaway_1'
    case ECutawayOption.Scalloped:
      return 'Body_Sides_Scalloped_Cutaway_1'
    default:
      return 'Body_Sides_1'
  }
}

// export const SidesVisibility: Partial<MeshVisibilityConfig> = {
//   Body_Sides_1: { visible: false },
//   Body_Sides_Venetian_Cutaway_1: { visible: false },
//   Body_Sides_Florentine_Cutaway_1: { visible: false },
//   'Body_Sides_Scalloped_Cutaway_(1)_1': { visible: false },
// }

// export const getMeshByCutaway = (
//   cutaway: ECutawayOption,
//   armbevel?: boolean,
// ): Partial<MeshVisibilityConfig> => {
//   switch (cutaway) {
//     case ECutawayOption.None:
//       return {
//         Body_Soundboard_1: { visible: true },
//         Body_Back_1: { visible: true },
//         Body_Sides_1: { visible: true },
//         Body_Binding_Top_1: { visible: true },
//         Body_Binding_Bottom_1: { visible: true },
//       }
//     case ECutawayOption.Venetian:
//       return {
//         Body_Soundboard_Venetian_Cutaway_1: { visible: true },
//         Body_Back_Venetian_Cutaway_1: { visible: true },
//         Body_Sides_Venetian_Cutaway_1: { visible: true },
//         Body_Binding_Top_Venetian_Cutaway_1: { visible: true },
//         Body_Binding_Bottom_Venetian_Cutaway_1: { visible: true },
//       }
//     case ECutawayOption.Florentine:
//       return {
//         Body_Soundboard_Florentine_Cutaway_1: { visible: true },
//         Body_Back_Florentine_Cutaway_1: { visible: true },
//         Body_Sides_Florentine_Cutaway_1: { visible: true },
//         Body_Binding_Top_Florentine_Cutaway_1: { visible: true },
//         Body_Binding_Bottom_Florentine_Cutaway_1: { visible: true },
//       }

//     case ECutawayOption.Scalloped:
//       return {
//         'Body_Sides_Scalloped_Cutaway_(1)_1': { visible: true },
//       }
//     default:
//       return {
//         Body_Sides_1: { visible: true },
//       }
//   }
// }

export const getMeshbyScaleLength = (): Partial<MeshVisibilityConfig> => {
  return {
    Body_Neck_1: { visible: true },
    Body_Headstock_1: { visible: true },
  }
}

export const meshes = {
  Soundboard: 'Soundboard_Venetian_Cutaway_1',
  Back: 'Back_Venetian_Cutaway_1',
  Sides: 'Sides_Venetian_Cutaway_1',
  Binding: ['Binding_Top_Venetian_Cutaway_1', 'Binding_Bottom_Venetian_Cutaway_1'],
  Perfling: ['Perfling_Top_Venetian_Cutaway_1', 'Perfling_Bottom_Venetian_Cutaway_1'],
}

interface IComponentData {
  name: string
  meshes: Array<keyof GLTFResult['nodes']>
  material?: Material
  components?: IComponentData[]
}

interface IConfiguration {
  name: string
  bodyShape: EBodyShape
  components?: IComponentData[]
}
