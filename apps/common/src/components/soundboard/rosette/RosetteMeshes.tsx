import { PositionMesh } from '@react-three/drei'
import { useContext, useRef, useState, useEffect } from 'react'
import { Group, BufferGeometry } from 'three'
import { context as GLTFJSXContext } from '../../../_generated/LuthAcousticDreadnaught'
import { IConfiguration } from '~/store/store'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'

export interface IRosetteMeshesProps {
  configuration?: IConfiguration
}

export default function RosetteMeshes({ configuration }: IRosetteMeshesProps) {
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
          <instances.BodyRosette name="Body_Rosette" />
        </group>
      )}
    </group>
  )
}
