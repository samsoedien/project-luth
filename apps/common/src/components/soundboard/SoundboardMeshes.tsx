import { memo, useContext, useEffect, useMemo, useState } from 'react'
import { context as GLTFJSXContext } from '../../_generated/LuthAcoustic'
import { IConfiguration } from '~/store/store'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { useLoader } from '@react-three/fiber'
import {
  Box3,
  BoxHelper,
  MirroredRepeatWrapping,
  NearestFilter,
  RepeatWrapping,
  TextureLoader,
  Vector3,
} from 'three'
import {
  RenderTexture,
  useTexture,
  useHelper,
  Helper,
  GradientTexture,
  GradientType,
  Html,
  useCursor,
} from '@react-three/drei'

export interface ISoundboardMeshesProps {
  configuration: IConfiguration
  children: React.ReactNode
}

export default memo(function SoundboardMeshes({ configuration, children }: ISoundboardMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  const [hovered, set] = useState<boolean>(false)
  useCursor(hovered /*'pointer', 'auto', document.body*/)

  useEffect(() => {
    console.log('configuration, changed', configuration)
  }, [configuration])

  const soundboardTexture = useTexture('sitka-spruce.jpg')

  soundboardTexture.repeat.x = 2
  soundboardTexture.wrapS = MirroredRepeatWrapping

  if (instanceGroupRef.current) {
    const boundingBox = new Box3().setFromObject(instanceGroupRef.current)
    console.log('boundingBox', boundingBox)
    const size = new Vector3()
    console.log('size', size)
    boundingBox.getSize(size)
    console.log(boundingBox.getSize(size))

    console.log('soundboardTexture', soundboardTexture)
  }

  return (
    <group name={configuration.name} dispose={null}>
      {instanceGeometry.length > 0 ? (
        instanceGeometry.map((child) => (
          <mesh
            key={child.uuid}
            name={child.name}
            geometry={child.geometry}
            onPointerOver={() => set(true)}
            onPointerOut={() => set(false)}
            // castShadow
            // receiveShadow
          >
            <meshStandardMaterial map={soundboardTexture} />
            {/* <meshBasicMaterial map={soundboardTexture}>
              <GradientTexture
                stops={[0, 0.5, 1]} // As many stops as you want
                colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
                size={1024} // Size (height) is optional, default = 1024
                width={1024} // Width of the canvas producing the texture, default = 16
                type={GradientType.Radial} // The type of the gradient, default = GradientType.Linear
                innerCircleRadius={0} // Optional, the radius of the inner circle of the gradient, default = 0
                outerCircleRadius={'auto'} // Optional, the radius of the outer circle of the gradient, default = auto
              />
            </meshBasicMaterial> */}
            <Helper type={BoxHelper} args={['red']} />
            {/* <Html scale={10} rotation={[0, 0, 0]} transform occlude>
              <div className="annotation">
                6.550 $ <span style={{ fontSize: '1.5em' }}>Annotation</span>
              </div>
            </Html> */}
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
})
