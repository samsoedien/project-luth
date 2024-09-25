import { PositionMesh } from '@react-three/drei'
import { useContext, useRef, useState, useEffect } from 'react'
import { Group, BufferGeometry } from 'three'
import { context as GLTFJSXContext } from '../../_generated/LuthAcousticDreadnaught'
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
    console.log(geometriesFiltered)
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
          <instances.BodyBackPieceLeft name="Body_Back_2Piece_Left" />
          <instances.BodyBackPieceRight name="Body_Back_2Piece_Right" />
          <instances.BodyBackPieceLeft1 name="Body_Back_3Piece_Left" />
          <instances.BodyBackPieceRight1 name="Body_Back_3Piece_Right" />
          <instances.BodyBackPieceMiddle name="Body_Back_3Piece_Middle" />
        </group>
      )}
      {children}
    </group>
  )
}
