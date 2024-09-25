import { useContext, useRef, useState, useEffect } from 'react'
import { BufferGeometry, Group } from 'three'
import { context as GLTFJSXContext } from '../../_generated/LuthAcousticDreadnaught'
import { PositionMesh } from '@react-three/drei'
import { IConfiguration } from '~/store/store'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'

export interface ISoundboardMeshesProps {
  configuration?: IConfiguration
  children: React.ReactNode
}

export default function SoundboardMeshes({ configuration, children }: ISoundboardMeshesProps) {
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
      configuration.meshes.includes(child.name),
    )

    setInstanceGeometry(geometriesFiltered)
  }, [instances])

  return (
    <group name={configuration.name} dispose={null}>
      {instanceGeometry.length > 0 ? (
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshNormalMaterial />
          </mesh>
        ))
      ) : (
        <group ref={instanceGroupRef}>
          <instances.BodySoundboard name="Body_Soundboard" />
          <instances.BodySoundboardVenetianCutaway name="Body_Soundboard_Venetian_Cutaway" />
          <instances.BodySoundboardFlorentineCutaway name="Body_Soundboard_Florentine_Cutaway" />
          <instances.BodySoundboardArmBevel name="Body_Soundboard_Arm_Bevel" />
          <instances.BodySoundboardArmBevelCutawayVenetian name="Body_Soundboard_Arm_Bevel_Cutaway_Venetian" />
          <instances.BodySoundboardArmBevelCutawayFlorentine name="Body_Soundboard_Arm_Bevel_Cutaway_Florentine" />
        </group>
      )}
      {children}
    </group>
  )
}
