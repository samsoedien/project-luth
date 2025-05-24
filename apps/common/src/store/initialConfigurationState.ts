import { EBodyCutawayOption } from '~/models/options.model'
import { ELuthComponent, IConfiguration } from '../models/configuration.model'

export const initialConfigurationState: IConfiguration = {
  id: 1,
  name: 'Luth',
  author: 'Nathan',
  version: '0.0.1',
  state: 'draft',
  description: 'Luth configuration',
  createdAt: new Date(),
  updatedAt: new Date(),
  config: {
    name: ELuthComponent.Base,
    meshes: [],
    components: [
      {
        name: ELuthComponent.Body,
        meshes: [],
        features: {
          [EBodyCutawayOption.Venetian]: {
            label: 'Cutaway',
            features: {
              nut: 45,
              saddle: 52,
            },
            userProfile: ['fingerstyle'],
            tooltip:
              'Standard spacing for most guitars, suitable for fingerstyle and pickstyle playing.',
            icon: 'strings',
          },
        },
        components: [
          {
            name: ELuthComponent.Soundboard,
            meshes: ['Body_Soundboard'],
            components: [
              {
                name: ELuthComponent.Rosette,
                meshes: [],
              },
              {
                name: ELuthComponent.Braces,
                meshes: [],
              },
            ],
          },
          {
            name: ELuthComponent.Back,
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
            name: ELuthComponent.Pickguard,
            meshes: [],
          },
        ],
      },
      {
        name: ELuthComponent.Scale,
        meshes: [],
        components: [
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
                name: ELuthComponent.Nut,
                meshes: [],
              },
              {
                name: ELuthComponent.FretboardMarkers,
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
            name: ELuthComponent.Strings,
            meshes: [],
          },
        ],
      },
    ],
  },
}
