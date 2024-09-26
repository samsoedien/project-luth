import { PositionMesh } from '@react-three/drei'
import { useContext, useRef, useState, useEffect } from 'react'
import { Group, BufferGeometry } from 'three'
import { context as GLTFJSXContext } from '../../_generated/LuthAcoustic'
import { IConfiguration } from '~/store/store'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'

export interface IBackMeshesProps {
  configuration?: IConfiguration
  children: React.ReactNode
}

export default function BackMeshes({ configuration, children }: IBackMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const instanceGroupRef = useRef<Group>(null)
  const [instanceGeometry, setInstanceGeometry] = useState<PositionMesh[]>([])

  useEffect(() => {
    if (!instanceGroupRef.current) return
    const geometries: PositionMesh[] = []

    instanceGroupRef.current.traverse((child) => {
      if ('geometry' in child && child.geometry instanceof BufferGeometry) {
        geometries.push(child as PositionMesh)
      }
    })

    const geometriesFiltered = geometries.filter((child) =>
      configuration?.meshes.includes(child.name),
    )
    setInstanceGeometry(geometriesFiltered)
  }, [instances])

  return (
    <group dispose={null}>
      {instanceGeometry.length > 0 ? (
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshNormalMaterial />
          </mesh>
        ))
      ) : (
        <group ref={instanceGroupRef}>
          <instances.BodyBack name="Body_Back" />
          <instances.BodyBackVenetianCutaway name="Body_Back_Venetian_Cutaway" />
          <instances.BodyBackFlorentineCutaway name="Body_Back" />
          <instances.BodyBackTwoPieceLeft name="Body_Back_Two_Piece_Left" />
          <instances.BodyBackTwoPieceRight name="Body_Back_Two_Piece_Right" />
          <instances.BodyBackThreePieceLeft name="Body_Back_Three_Piece_Left" />
          <instances.BodyBackThreePieceRight name="Body_Back_Three_Piece_Right" />
          <instances.BodyBackThreePieceMiddle name="Body_Back_Three_Piece_Middle" />
        </group>
      )}
      {children}
    </group>
  )
}
