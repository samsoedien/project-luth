import { useContext } from 'react'
import LuthSoundboard, {
  // context as GLTFJSXContext,
  // LuthSoundboardInstances as Instances,
  Instances,
} from '../../_generated/LuthSoundboard'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { Helper, useTexture } from '@react-three/drei'
import { IConfiguration } from '~/models/configuration.model'

import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { BoxHelper } from 'three'

export interface ISoundboardMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}

export default function SoundboardMeshes({ configuration, children }: ISoundboardMeshesProps) {
  // const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  const BaseColorMap = useTexture('Body_Sides_Venetian_Cutaway_Batch001_PBR_Diffuse.png')
  const NormalMap = useTexture('Body_Sides_Venetian_Cutaway_Batch001_PBR_Normal.png')
  const ORMMap = useTexture('Body_Sides_Venetian_Cutaway_Batch001_PBR_ORM_Textures.png')

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
            >
              <meshNormalMaterial />
              {/* <meshStandardMaterial
                color="white"
                // map={BaseColorMap}
                // normalMap={NormalMap}
                // displacementMap={spruceHeightMap}
                // roughnessMap={ORMMap}
                // metalnessMap={ORMMap}
                // aoMap={ORMMap}
              /> */}
            </mesh>
          )
        })}
      <group ref={instanceGroupRef} scale={0}>
        <Instances>
          <Helper type={BoxHelper} args={['red']} />
          <LuthSoundboard />
        </Instances>
        {/* <group ref={instanceGroupRef} scale={0}>
        <instances.BodySoundboard name="Body_Soundboard" />
        <instances.BodySoundboardVenetianCutaway name="Body_Soundboard_Venetian_Cutaway" />
        <instances.BodySoundboardFlorentineCutaway name="Body_Soundboard_Florentine_Cutaway" />
        <instances.BodySoundboardArmBevel name="Body_Soundboard_Arm_Bevel" />
        <instances.BodySoundboardArmBevelCutawayVenetian name="Body_Soundboard_Arm_Bevel_Cutaway_Venetian" />
        <instances.BodySoundboardArmBevelCutawayFlorentine name="Body_Soundboard_Arm_Bevel_Cutaway_Florentine" />
      </group> */}
      </group>
      {children}
    </group>
  )
}
