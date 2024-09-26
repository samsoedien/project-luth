import { useContext, useEffect } from 'react'
import { context as GLTFJSXContext } from '../../_generated/LuthAcoustic'
import { IConfiguration } from '~/store/store'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { useLoader } from '@react-three/fiber'
import { BoxHelper, MirroredRepeatWrapping, RepeatWrapping, TextureLoader } from 'three'
import { RenderTexture, useTexture, useHelper, Helper } from '@react-three/drei'
import { useMeshSizes, useScaledTexture, useSharedTexture } from '~/hooks/useScaledTexture'

export interface ISoundboardMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}

export default function SoundboardMeshes({ configuration, children }: ISoundboardMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  const soundboardTexture = useTexture('sitka-spruce.jpg')

  soundboardTexture.repeat.x = 2
  soundboardTexture.wrapS = MirroredRepeatWrapping
  soundboardTexture.wrapT = MirroredRepeatWrapping
  soundboardTexture.offset.x = 0.5

  console.log('soundboardTexture', soundboardTexture)

  return (
    <group name={configuration.name} dispose={null}>
      {instanceGeometry.length > 0 ? (
        instanceGeometry.map((child) => (
          <mesh
            key={child.uuid}
            name={child.name}
            geometry={child.geometry}
            // castShadow
            // receiveShadow
          >
            <meshStandardMaterial map={soundboardTexture} />
            <Helper type={BoxHelper} args={['red']} />
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
