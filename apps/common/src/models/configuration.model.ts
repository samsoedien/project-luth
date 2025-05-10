import { Material } from 'three'
// import { GLTFResult } from '~/_generated/LuthAcoustic'
import { LuthGLTFResultCombined } from './gltfjsx.model'

export enum ELuthModel {
  Acoustic = 'Acoustic',
  Electric = 'Electric',
  Ukelele = 'Ukelele',
}

export enum ELuthComponent {
  Base = 'Base',
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
  Braces = 'Braces',
  BackStrip = 'BackStrip',
  HeelTailBlocks = 'HeelTailBlocks',
  Purfling = 'Purfling',
  Rosette = 'Rosette',
  Frets = 'Frets',
  EndGraft = 'EndGraft',
  Nut = 'Nut',
  Saddle = 'Saddle',
  FretboardMarkers = 'FretboardMarkers',
}

export interface IConfiguration {
  name: ELuthComponent
  meshes: Array<keyof LuthGLTFResultCombined['nodes']>
  material?: Material
  texture?: string
  components?: IConfiguration[]
  groupVisibility?: boolean
}
