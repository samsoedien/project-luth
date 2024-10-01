import { MeshStandardMaterial } from 'three'
import { ELuthComponent, IConfiguration } from '../models/configuration.model'

export const initialConfigurationState: IConfiguration = {
  name: ELuthComponent.Base,
  meshes: [],
  components: [
    {
      name: ELuthComponent.Soundboard,
      groupVisibility: true,
      meshes: ['Body_Soundboard_Venetian_Cutaway'],
      // material: new MeshStandardMaterial({ color: 'red' }),
      texture: 'sitka-spruce.jpg',
      components: [
        {
          name: ELuthComponent.Rosette,
          material: new MeshStandardMaterial({ color: 'green' }),
          meshes: [
            'Body_Rosette',
            'Body_Rosette_(1)',
            'Body_Rosette_(2)',
            'Body_Rosette_(3)',
            'Body_Rosette_(4)',
          ],
        },
        {
          name: ELuthComponent.Braces,
          groupVisibility: false,

          material: new MeshStandardMaterial({ color: 'blue' }),
          meshes: [
            'Body_X_BraceB',
            'Body_X_BraceC',
            'Body_BraceD',
            'Body_BraceE',
            'Body_BraceF_Right',
            'Body_BraceG_Right',
            'Body_BraceG_Left',
            'Body_BraceF_Left',
            'Body_BraceH_Left',
            'Body_BraceH_Right',
            'Body_Bridge_Plate',
          ],
        },
      ],
    },
    {
      name: ELuthComponent.Back,
      groupVisibility: true,
      meshes: [
        'Body_Back_Three_Piece_Left',
        'Body_Back_Three_Piece_Right',
        'Body_Back_Three_Piece_Middle',
      ],
      components: [
        {
          name: ELuthComponent.BackStrip,
          meshes: ['Body_Double_Back_Strip_Left', 'Body_Double_Back_Strip_Right'],
        },
      ],
    },
    {
      name: ELuthComponent.Sides,
      meshes: ['Body_Sides'],
      components: [
        {
          name: ELuthComponent.HeelTailBlocks,
          meshes: ['Body_Heel_Block', 'Body_Tail_Block'],
        },
      ],
    },
    {
      name: ELuthComponent.Binding,
      meshes: ['Body_Binding_Top_Venetian_Cutaway', 'Body_Binding_Bottom_Venetian_Cutaway'],
      components: [
        {
          name: ELuthComponent.Purfling,
          meshes: ['Body_Purfling_Top', 'Body_Purfling_Bottom'],
        },
      ],
    },
    {
      name: ELuthComponent.Neck,
      meshes: ['Body_Neck', 'Body_Heel'],
    },
    {
      name: ELuthComponent.Headstock,
      meshes: ['Body_Headstock'],
    },
    {
      name: ELuthComponent.Fretboard,
      meshes: ['Body_Fretboard'],
    },
  ],
}
