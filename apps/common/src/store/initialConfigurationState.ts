import { MeshStandardMaterial } from 'three'
import { ELuthComponent } from '../models/configuration.model'
import { IConfiguration } from '~/store/store'

export const initialConfigurationState: IConfiguration = {
  name: 'Luth_Model',
  version: '1.0.0',
  components: [
    {
      name: ELuthComponent.Soundboard,
      groupVisibility: true,
      meshes: ['Body_Soundboard_Venetian_Cutaway_1'],
      material: new MeshStandardMaterial({ color: 'red' }),
      texture: 'sitka-spruce.jpg',
      components: [
        {
          name: ELuthComponent.Braces,
          groupVisibility: false,

          material: new MeshStandardMaterial({ color: 'blue' }),
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
      name: ELuthComponent.Back,
      meshes: ['Body_Back_3Piece_Left_1', 'Body_Back_3Piece_Right_1', 'Body_Back_3Piece_Middle_1'],
      components: [
        {
          name: ELuthComponent.BackStrip,
          meshes: ['Body_Double_Back_Strip_Left_1', 'Body_Double_Back_Strip_Right_1'],
        },
      ],
    },
    {
      name: ELuthComponent.Sides,
      meshes: ['Body_Sides_1'],
      components: [
        {
          name: ELuthComponent.HeelTailBlocks,
          meshes: ['Body_Heel_Block_1', 'Body4_1'],
        },
      ],
    },
    {
      name: ELuthComponent.Binding,
      meshes: ['Body_Binding_Top_Venetian_Cutaway_1', 'Body_Binding_Bottom_Venetian_Cutaway_1'],
      components: [
        // {
        //   name: ELuthComponent.Perfling,
        //   meshes: ['Body_Purfling_Top_1', 'Body_Purfling_Bottom_1'],
        // },
      ],
    },
    {
      name: ELuthComponent.Neck,
      meshes: ['Body_Neck_1', 'Body_Heel_1'],
    },
  ],
}
