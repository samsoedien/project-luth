import { useContext, useRef, useState, useEffect } from 'react'
import { BufferGeometry, Group } from 'three'
import { context as GLTFJSXContext } from '../../_generated/LuthAcoustic'
import { PositionMesh, Wireframe } from '@react-three/drei'
import { IConfiguration } from '~/store/store'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'

export interface ISidesMeshesProps {
  configuration?: IConfiguration
  children: React.ReactNode
}

export default function SidesMeshes({ configuration, children }: ISidesMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const instancesGroupRef = useRef<Group>(null)
  const [instanceGeometry, setInstanceGeometry] = useState<PositionMesh[]>([])

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
    <group dispose={null}>
      {instanceGeometry.length > 0 ? (
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshNormalMaterial />
            {/* <Wireframe /> */}
          </mesh>
        ))
      ) : (
        <group ref={instancesGroupRef}>
          <instances.BodySides name="Body_Sides" />
          <instances.BodySidesVenetianCutaway name="Body_Sides_Venetian_Cutaway" />
          <instances.BodySidesFlorentineCutaway name="Body_Sides_Florentine_Cutaway" />
          <instances.BodySidesScallopedCutaway name="Body_Sides_Scalloped_Cutaway_(1)" />
          <instances.BodySidesArmBevel name="Body_Sides_Arm_Bevel" />
          <instances.BodySidesArmBevelVenetianCutaway name="Body_Sides_Arm_Bevel_Venetian_Cutaway" />
          <instances.BodySidesArmBevelFlorentineCutaway name="Body_Sides_Arm_Bevel_Florentine_Cutaway" />
          <instances.BodySidesArmBevelScallopedCutaway name="Body_Sides_Arm_Bevel_Scalloped_Cutaway" />
        </group>
      )}
      {children}
    </group>
  )
}
