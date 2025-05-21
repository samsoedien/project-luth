import { LuthGLTFResultCombined } from './gltfjsx.model'

export enum ELuthComponent {
  // Base Components
  Base = 'Base',
  Body = 'Body',
  Scale = 'Scale',
  // Main Component
  Soundboard = 'Soundboard',
  Back = 'Back',
  Sides = 'Sides',
  Binding = 'Binding',
  Neck = 'Neck',
  Headstock = 'Headstock',
  Fretboard = 'Fretboard',
  Bridge = 'Bridge',
  Pickguard = 'Pickguard',
  Electronics = 'Electronics',
  Strings = 'Strings',
  // Sub Components
  Rosette = 'Rosette',
  Braces = 'Braces',
  BackStrip = 'BackStrip',
  EndGraft = 'EndGraft',
  HeelTailBlocks = 'HeelTailBlocks',
  Kerfling = 'Kerfling',
  Purfling = 'Purfling',
  Frets = 'Frets',
  FretboardMarkers = 'FretboardMarkers',
  Nut = 'Nut',
  Saddle = 'Saddle',
}

export const luthBodyDeps = [
  ELuthComponent.Soundboard,
  ELuthComponent.Back,
  ELuthComponent.Sides,
  ELuthComponent.Binding,
  ELuthComponent.Pickguard,
] as const

export const luthScaleDeps = [
  ELuthComponent.Neck,
  ELuthComponent.Headstock,
  ELuthComponent.Fretboard,
  ELuthComponent.Bridge,
] as const

export type LuthComponentDepsMap = {
  [ELuthComponent.Base]: [ELuthComponent.Body, ELuthComponent.Scale, ELuthComponent.Strings]
  [ELuthComponent.Body]: typeof luthBodyDeps
  [ELuthComponent.Scale]: typeof luthScaleDeps
  [ELuthComponent.Soundboard]: [ELuthComponent.Rosette, ELuthComponent.Braces]
  [ELuthComponent.Back]: [ELuthComponent.BackStrip]
  [ELuthComponent.Sides]: [
    ELuthComponent.HeelTailBlocks,
    ELuthComponent.EndGraft,
    ELuthComponent.Kerfling,
  ]
  [ELuthComponent.Binding]: [ELuthComponent.Purfling]
  [ELuthComponent.Neck]: []
  [ELuthComponent.Headstock]: []
  [ELuthComponent.Fretboard]: [
    ELuthComponent.Frets,
    ELuthComponent.Nut,
    ELuthComponent.FretboardMarkers,
  ]
  [ELuthComponent.Bridge]: [ELuthComponent.Saddle]
}

// const LuthComponentDepsMap = {
//   [ELuthComponent.Base]: [
//     ELuthComponent.Soundboard,
//     ELuthComponent.Back,
//     ELuthComponent.Sides,
//     ELuthComponent.Binding,
//     ELuthComponent.Neck,
//     ELuthComponent.Headstock,
//     ELuthComponent.Fretboard,
//     ELuthComponent.Bridge,
//     ELuthComponent.Pickguard,
//     ELuthComponent.Strings,
//   ],
//   [ELuthComponent.Soundboard]: [ELuthComponent.Rosette, ELuthComponent.Braces],
//   [ELuthComponent.Back]: [ELuthComponent.BackStrip],
//   [ELuthComponent.Sides]: [
//     ELuthComponent.HeelTailBlocks,
//     ELuthComponent.EndGraft,
//     ELuthComponent.Kerfling,
//   ],
//   [ELuthComponent.Binding]: [ELuthComponent.Purfling],
//   [ELuthComponent.Fretboard]: [
//     ELuthComponent.Frets,
//     ELuthComponent.FretboardMarkers,
//     ELuthComponent.Nut,
//   ],
//   [ELuthComponent.Bridge]: [ELuthComponent.Saddle],
//   [ELuthComponent.Neck]: [],
//   [ELuthComponent.Headstock]: [],
//   [ELuthComponent.BackStrip]: [],
//   [ELuthComponent.HeelTailBlocks]: [],
//   [ELuthComponent.EndGraft]: [],
//   [ELuthComponent.Kerfling]: [],
//   [ELuthComponent.Purfling]: [],
//   [ELuthComponent.Frets]: [],
//   [ELuthComponent.FretboardMarkers]: [],
//   [ELuthComponent.Nut]: [],
//   [ELuthComponent.Saddle]: [],
//   [ELuthComponent.Pickguard]: [],
//   [ELuthComponent.Strings]: [],
//   [ELuthComponent.Rosette]: [],
//   [ELuthComponent.Braces]: [],
// } as const satisfies Record<ELuthComponent, readonly ELuthComponent[]>

type LuthDeps<T extends ELuthComponent> = T extends keyof LuthComponentDepsMap
  ? IMeshConfiguration<LuthComponentDepsMap[T][number]>[]
  : []

export interface IConfiguration {
  id: number | string
  name: string
  author: string
  version: string
  description: string
  state: 'draft' | 'published'
  createdAt: Date
  updatedAt?: Date
  config: IMeshConfiguration<ELuthComponent>
}

export type IMeshConfiguration<T extends ELuthComponent> = {
  name: T
  meshes: Array<keyof LuthGLTFResultCombined['nodes']>
  materials?: Array<keyof LuthGLTFResultCombined['materials']>
  components?: LuthDeps<T>
  features?: Record<string, unknown>
  collaboration?: {
    comments: string[]
  }
  metadata?: {
    constraints: unknown[]
    dimensions: unknown[]
    dependsOn: ELuthComponent[]
  }
}
