import { ELuthComponent, IConfiguration } from '../models/configuration.model'

export const initialConfigurationState: IConfiguration = {
  id: 1,
  name: 'Luth',
  author: 'Nathan',
  version: '0.0.1',
  description: 'Luth configuration',
  config: {
    name: ELuthComponent.Base,
    meshes: [],
    components: [
      {
        name: ELuthComponent.Soundboard,
        groupVisibility: true,
        meshes: ['Body_Soundboard'],
        components: [
          {
            name: ELuthComponent.Rosette,
            meshes: [],
          },
          {
            name: ELuthComponent.Braces,
            groupVisibility: false,
            meshes: [],
          },
        ],
      },
      {
        name: ELuthComponent.Back,
        groupVisibility: true,
        meshes: [],
        components: [
          {
            name: ELuthComponent.BackStrip,
            meshes: [],
          },
        ],
      },
      {
        name: ELuthComponent.Sides,
        meshes: [],
        components: [
          {
            name: ELuthComponent.HeelTailBlocks,
            meshes: [],
          },
          {
            name: ELuthComponent.EndGraft,
            meshes: [],
          },
          {
            name: ELuthComponent.Kerfling,
            meshes: [],
          },
        ],
      },
      {
        name: ELuthComponent.Binding,
        meshes: [],
        components: [
          {
            name: ELuthComponent.Purfling,
            meshes: [],
          },
        ],
      },
      {
        name: ELuthComponent.Neck,
        meshes: [],
      },
      {
        name: ELuthComponent.Headstock,
        meshes: [],
      },
      {
        name: ELuthComponent.Fretboard,
        meshes: [],
        components: [
          {
            name: ELuthComponent.Frets,
            meshes: [],
          },
          {
            name: ELuthComponent.FretboardMarkers,
            meshes: [],
          },
          {
            name: ELuthComponent.Nut,
            meshes: [],
          },
        ],
      },
      {
        name: ELuthComponent.Bridge,
        meshes: [],
        components: [
          {
            name: ELuthComponent.Saddle,
            meshes: [],
          },
        ],
      },
      {
        name: ELuthComponent.Pickguard,
        meshes: [],
      },

      {
        name: ELuthComponent.Strings,
        meshes: [],
      },
    ],
  },
}
