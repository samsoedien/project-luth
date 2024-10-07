import { useContext } from 'react'
import { context as GLTFJSXContext } from '../../_generated/LuthAcoustic'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { IConfiguration } from '~/models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'

export interface IBackMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}

export default function BackMeshes({ configuration, children }: IBackMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  return (
    <group name={configuration.name} dispose={null} visible={configuration.groupVisibility}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) =>
          child.userData.middlePart ? (
            <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
              <meshStandardMaterial color={'black'} />
            </mesh>
          ) : (
            <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
              <meshNormalMaterial />
            </mesh>
          ),
        )}
      <group ref={instanceGroupRef} scale={0}>
        <instances.BodyBack name="Body_Back" />
        <instances.BodyBackVenetianCutaway name="Body_Back_Venetian_Cutaway" />
        <instances.BodyBackFlorentineCutaway name="Body_Back" />
        <instances.BodyBackTwoPieceLeft name="Body_Back_Two_Piece_Left" />
        <instances.BodyBackTwoPieceRight name="Body_Back_Two_Piece_Right" />
        {/* <instances.BodyBackTwoPieceVenetianCutawayLeft name="Body_Back_Two_Piece_Venetian_Cutaway_Left" /> */}
        <instances.BodyBackTwoPieceVenetianCutawayRight name="Body_Back_Two_Piece_Venetian_Cutaway_Right" />
        {/* <instances.BodyBackTwoPieceFlorentineCutawayLeft name="Body_Back_Two_Piece_Florentine_Cutaway_Left" /> */}
        <instances.BodyBackTwoPieceFlorentineCutawayRight name="Body_Back_Two_Piece_Florentine_Cutaway_Right" />
        <instances.BodyBackThreePieceLeft name="Body_Back_Three_Piece_Left" />
        <instances.BodyBackThreePieceRight name="Body_Back_Three_Piece_Right" />
        <instances.BodyBackThreePieceMiddle
          name="Body_Back_Three_Piece_Middle"
          userData={{ middlePart: true }}
        />
        {/* <instances.BodyBackThreePieceVenetianCutawayLeft name="Body_Back_Three_Piece_Venetian_Cutaway_Left" /> */}
        <instances.BodyBackThreePieceVenetianCutawayRight name="Body_Back_Three_Piece_Venetian_Cutaway_Right" />
        <instances.BodyBackThreePieceVenetianCutawayMiddle name="Body_Back_Three_Piece_Venetian_Cutaway_Middle" />
        <instances.BodyBackThreePieceFlorentineCutawayLeft name="Body_Back_Three_Piece_Florentine_Cutaway_Left" />
        <instances.BodyBackThreePieceFlorentineCutawayRight name="Body_Back_Three_Piece_Florentine_Cutaway_Right" />
        <instances.BodyBackThreePieceFlorentineCutawayMiddle name="Body_Back_Three_Piece_Florentine_Cutaway_Middle" />
      </group>
      {children}
    </group>
  )
}
