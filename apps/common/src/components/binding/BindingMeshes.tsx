import { useContext, useRef, useState, useEffect } from 'react'
import { BufferGeometry, Group } from 'three'
import { context as GLTFJSXContext } from '../../_generated/LuthAcousticDreadnaught'
import { PositionMesh } from '@react-three/drei'
import { IConfiguration, useConfigurationStore } from '~/store/store'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'

export interface IBindingMeshesProps {
  configuration?: IConfiguration
  children: React.ReactNode
}

export default function BindingMeshes({ configuration, children }: IBindingMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const instancesGroupRef = useRef<Group>(null) // Ref to hold the Group
  const [instanceGeometry, setInstanceGeometry] = useState<PositionMesh[]>([]) // State to store geometries

  useEffect(() => {
    if (!instancesGroupRef.current) return
    const geometries: PositionMesh[] = []

    instancesGroupRef.current.traverse((child) => {
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
    <group name={configuration.name} dispose={null}>
      {instanceGeometry.length > 0 ? (
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshStandardMaterial color="black" />
          </mesh>
        ))
      ) : (
        <group ref={instancesGroupRef}>
          <instances.BodyBindingTop name="Body_Binding_Top" />
          <instances.BodyBindingBottom name="Body_Binding_Bottom" />
          <instances.BodyBindingTopVenetianCutaway name="Body_Binding_Top_Venetian_Cutaway" />
          <instances.BodyBindingBottomVenetianCutaway name="Body_Binding_Bottom_Venetian_Cutaway" />
          <instances.BodyBindingTopFlorentineCutaway name="Body_Binding_Top_Florentine_Cutaway" />
          <instances.BodyBindingBottomFlorentineCutaway name="Body_Binding_Bottom_Florentine_Cutaway" />
        </group>
      )}
      {children}
    </group>
  )
}
