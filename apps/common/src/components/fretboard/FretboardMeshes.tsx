import { useContext } from 'react'
import { context as GLTFJSXContext } from '../../_generated/LuthAcoustic'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { IConfiguration } from '~/models/configuration.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { useTexture } from '@react-three/drei'

export interface IFretboardMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}

export default function FretboardMeshes({ configuration, children }: IFretboardMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  return (
    <group name={configuration.name} dispose={null} visible={configuration?.groupVisibility}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh key={child.uuid} name={child.name} geometry={child.geometry}>
            <meshNormalMaterial />
          </mesh>
        ))}
      <group ref={instanceGroupRef} scale={0}>
        <instances.BodyFretboard name="Body_Fretboard" />
        <instances.BodyFretboard5 name="Body_Fretboard_1" />
        <instances.BodyFretboardSoundholeTangent name="Body_Fretboard_Soundhole_Tangent" />
      </group>
      {children}
    </group>
  )
}
