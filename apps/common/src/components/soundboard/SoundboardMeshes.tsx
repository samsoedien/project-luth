import { useContext, useEffect, useRef } from 'react'
import { context as GLTFJSXContext } from '../../_generated/LuthAcoustic'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { Mesh, MirroredRepeatWrapping } from 'three'
import { useTexture } from '@react-three/drei'
import { IConfiguration } from '~/models/configuration.model'

import { GLTFJSXInstances } from '~/models/gltfjsx.model'

export interface ISoundboardMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}

export default function SoundboardMeshes({ configuration, children }: ISoundboardMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  const meshRef = useRef<Mesh>(null)

  useEffect(() => {
    console.log('meshRef', meshRef.current)
  }, [configuration])

  const soundboardTexture = useTexture('sitka-spruce.jpg')

  soundboardTexture.repeat.x = 2
  soundboardTexture.wrapS = MirroredRepeatWrapping

  return (
    <group name={configuration.name} dispose={null}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => {
          return (
            <mesh
              ref={meshRef}
              key={child.uuid}
              name={child.name}
              geometry={child.geometry}
              castShadow
              receiveShadow
              onClick={(e) => console.log('click', configuration)}
            >
              <meshStandardMaterial map={soundboardTexture} />;
            </mesh>
          )
        })}
      <group ref={instanceGroupRef} scale={0}>
        <instances.BodySoundboard name="Body_Soundboard" />
        <instances.BodySoundboardVenetianCutaway name="Body_Soundboard_Venetian_Cutaway" />
        <instances.BodySoundboardFlorentineCutaway name="Body_Soundboard_Florentine_Cutaway" />
        <instances.BodySoundboardArmBevel name="Body_Soundboard_Arm_Bevel" />
        <instances.BodySoundboardArmBevelCutawayVenetian name="Body_Soundboard_Arm_Bevel_Cutaway_Venetian" />
        <instances.BodySoundboardArmBevelCutawayFlorentine name="Body_Soundboard_Arm_Bevel_Cutaway_Florentine" />
      </group>
      {children}
    </group>
  )
}
