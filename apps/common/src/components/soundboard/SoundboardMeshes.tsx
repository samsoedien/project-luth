import { useContext, useEffect, useRef } from 'react'
// import { context as GLTFJSXContext } from '../../_generated/LuthAcoustic'
import {
  LuthSoundboard,
  context as GLTFJSXContext,
  LuthSoundboardInstances,
} from '../../_generated/LuthSoundboard'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
// import { Mesh, MirroredRepeatWrapping, Texture } from 'three'
// import { useTexture } from '@react-three/drei'
import { IConfiguration } from '~/models/configuration.model'

import { GLTFJSXInstances } from '~/models/gltfjsx.model'

// Procedural texture generator for metalness and roughness maps
// function generateProceduralTexture(type: 'metalness' | 'roughness'): Texture {
//   const size = 256 // Size of the texture
//   const data = new Uint8Array(size * size * 3) // Create empty pixel data

//   for (let i = 0; i < size * size * 3; i += 3) {
//     const value = Math.random() * 255 // Generate random grayscale value
//     data[i] = value // R
//     data[i + 1] = value // G
//     data[i + 2] = value // B
//   }

//   // Create the texture
//   const texture = new Texture()
//   texture.image = { data, width: size, height: size }
//   texture.needsUpdate = true

//   if (type === 'roughness') {
//     texture.wrapS = MirroredRepeatWrapping
//     texture.wrapT = MirroredRepeatWrapping
//   }

//   return texture
// }

export interface ISoundboardMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}

export default function SoundboardMeshes({ configuration, children }: ISoundboardMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  return (
    <group name={configuration.name} dispose={null}>
      {/* {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => {
          return (
            <mesh
              key={child.uuid}
              name={child.name}
              geometry={child.geometry}
              castShadow
              receiveShadow
              onClick={(e) => console.log('click', configuration)}
            >
              <meshNormalMaterial />
            </mesh>
          )
        })} */}
      <LuthSoundboardInstances>
        <LuthSoundboard scale={1} />
      </LuthSoundboardInstances>
      {/* <group ref={instanceGroupRef} scale={0}>
        <instances.BodySoundboard name="Body_Soundboard" />
        <instances.BodySoundboardVenetianCutaway name="Body_Soundboard_Venetian_Cutaway" />
        <instances.BodySoundboardFlorentineCutaway name="Body_Soundboard_Florentine_Cutaway" />
        <instances.BodySoundboardArmBevel name="Body_Soundboard_Arm_Bevel" />
        <instances.BodySoundboardArmBevelCutawayVenetian name="Body_Soundboard_Arm_Bevel_Cutaway_Venetian" />
        <instances.BodySoundboardArmBevelCutawayFlorentine name="Body_Soundboard_Arm_Bevel_Cutaway_Florentine" />
      </group> */}
      {children}
    </group>
  )
}
