import { PositionMesh } from '@react-three/drei'
import { useContext, useRef, useState, useEffect } from 'react'
import { Group, BufferGeometry } from 'three'
import { context as GLTFJSXContext } from '../../../_generated/LuthAcoustic'
import { IConfiguration } from '~/store/store'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'

export interface IBracesMeshesProps {
  configuration: IConfiguration
}

export default function BracesMeshes({ configuration }: IBracesMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const instanceGroupRef = useRef<Group>(null) // Ref to hold the Group
  const [instanceGeometry, setInstanceGeometry] = useState<PositionMesh[]>([]) // State to store geometries

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
          <instances.BodyXBraceB name="Body_X_BraceB" />
          <instances.BodyXBraceC name="Body_X_BraceC" />
          <instances.BodyBraceD name="Body_BraceD" />
          <instances.BodyBraceE name="Body_BraceE" />
          <instances.BodyBraceFRight name="Body_BraceF_Right" />
          <instances.BodyBraceFLeft name="Body_BraceF_Left" />
          <instances.BodyBraceGRight name="Body_BraceG_Right" />
          <instances.BodyBraceGLeft name="Body_BraceG_Left" />
          <instances.BodyBraceHRight name="Body_BraceH_Right" />
          <instances.BodyBraceHLeft name="Body_BraceH_Left" />
          <instances.BodyLateralBraceA name="Body_Lateral_BraceA" />
        </group>
      )}
    </group>
  )
}
