import { PositionMesh } from '@react-three/drei'
import { useContext, useRef, useState, useEffect } from 'react'
import { Group, BufferGeometry } from 'three'
import { context as GLTFJSXContext } from '../../../_generated/LuthAcousticDreadnaught'
import { IConfiguration, useConfigurationStore } from '~/store/store'
import { ELuthComponent } from '~/models/configuration.model'

export interface IBackStripMeshesProps {
  configuration?: IConfiguration
  children?: React.ReactNode
}

export default function BackStripMeshes({ configuration, children }: IBackStripMeshesProps) {
  const instances = useContext(GLTFJSXContext)
  const instancesGroupRef = useRef<Group>(null)
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
    console.log(geometriesFiltered)
  }, [instances])

  return (
    <group dispose={null}>
      {instanceGeometry.length > 0 ? (
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshBasicMaterial color="white" />
          </mesh>
        ))
      ) : (
        <group ref={instancesGroupRef}>
          <instances.BodyBackCenterStrip name="Body_Back_Center_Strip" />
          <instances.BodyBackDoubleStripLeft name="Body_Back_Double_Strip_Left" />
          <instances.BodyBackDoubleStripRight name="Body_Back_Double_Strip_Right" />
        </group>
      )}
      {children}
    </group>
  )
}
