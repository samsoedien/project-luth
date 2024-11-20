import { useContext, useEffect, useRef } from 'react'
import { context as GLTFJSXContext } from '../../_generated/LuthAcoustic'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { Mesh, MirroredRepeatWrapping, Texture } from 'three'
import { useTexture } from '@react-three/drei'
import { IConfiguration } from '~/models/configuration.model'

import { GLTFJSXInstances } from '~/models/gltfjsx.model'

// Procedural texture generator for metalness and roughness maps
function generateProceduralTexture(type: 'metalness' | 'roughness'): Texture {
  const size = 256 // Size of the texture
  const data = new Uint8Array(size * size * 3) // Create empty pixel data

  for (let i = 0; i < size * size * 3; i += 3) {
    const value = Math.random() * 255 // Generate random grayscale value
    data[i] = value // R
    data[i + 1] = value // G
    data[i + 2] = value // B
  }

  // Create the texture
  const texture = new Texture()
  texture.image = { data, width: size, height: size }
  texture.needsUpdate = true

  if (type === 'roughness') {
    texture.wrapS = MirroredRepeatWrapping
    texture.wrapT = MirroredRepeatWrapping
  }

  return texture
}

export interface ISoundboardMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}

export default function SoundboardMeshes({ configuration, children }: ISoundboardMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  // Load photographic texture for the soundboard
  // const soundboardTexture = useTexture('sitka-spruce.jpg')
  // soundboardTexture.repeat.x = 2
  // soundboardTexture.wrapS = MirroredRepeatWrapping

  const soundboardBaseColorMap = useTexture('spruce-test_BaseColor.jpg')
  const soundboardAOMap = useTexture('spruce-test_AmbientOcclusion.jpg')
  const soundboardNormalMap = useTexture('spruce-test_Normal.jpg')
  const soundboardHeightMap = useTexture('spruce-test_Height.jpg')
  const soundboardMetalicMap = useTexture('spruce-test_Metallic.jpg')
  const soundboardRoughnessMap = useTexture('spruce-test_Roughness.jpg')

  const Wood0244BaseColor = useTexture('Wood_024_basecolor.jpg')
  const Wood0244Height = useTexture('Wood_024_height.jpg')
  const Wood024Normal = useTexture('Wood_024_normal.jpg')
  const Wood024Roughness = useTexture('Wood_024_roughness.jpg')
  const Wood024AmbientOcclusion = useTexture('Wood_024_ambientOcclusion.jpg')

  // Generate procedural textures for metalness and roughness maps
  const proceduralMetalnessMap: Texture = generateProceduralTexture('metalness')
  const proceduralRoughnessMap: Texture = generateProceduralTexture('roughness')

  return (
    <group name={configuration.name} dispose={null}>
      {instanceGeometry.length > 0 &&
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
              <meshStandardMaterial map={soundboardBaseColorMap} />
              {/* <meshStandardMaterial
                map={soundboardBaseColorMap}
                aoMap={soundboardAOMap}
                normalMap={soundboardNormalMap}
                metalnessMap={soundboardMetalicMap}
                roughnessMap={soundboardRoughnessMap}
                displacementMap={soundboardHeightMap}
                // map={soundboardTexture} // Base texture (photographic)
                // metalnessMap={proceduralMetalnessMap} // Procedural metalness map
                // roughnessMap={proceduralRoughnessMap} // Procedural roughness map
              /> */}
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
