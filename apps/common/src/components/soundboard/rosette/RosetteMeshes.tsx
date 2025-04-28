import { GradientTexture, GradientType, Helper, PositionMesh, useTexture } from '@react-three/drei'
import { useContext, useRef, useState, useEffect } from 'react'
import { TextureLoader, RepeatWrapping, BoxHelper, Box3 } from 'three'
import { context as GLTFJSXContext } from '../../../_generated/LuthAcoustic'
import { GLTFJSXInstances } from '~/models/gltfjsx.model'
import { useInstanceGeometry } from '~/hooks/useInstanceGeometry'
import { IConfiguration } from '~/models/configuration.model'
// import { useScaledTexture, useSharedTexture } from '~/hooks/useScaledTexture'

export interface IRosetteMeshesProps {
  configuration: IConfiguration
}

export default function RosetteMeshes({ configuration }: IRosetteMeshesProps) {
  const instances = useContext(GLTFJSXContext) as GLTFJSXInstances
  const { instanceGeometry, instanceGroupRef } = useInstanceGeometry(configuration)

  const soundboardTexture = useTexture('sitka-spruce.jpg')

  // // const desiredTextureWidth = 1024
  // // const desiredTextureHeight = 1024
  // if (instanceGroupRef.current) {
  //   const boundingBoxSoundboard = {
  //     max: { x: 193.84026336669922, y: 254.89999389648438, z: 56.20283603668213 },
  //     min: { x: -193.8080062866211, y: -254.89999389648438, z: 45.550336837768555 },
  //   }

  //   const boundingBox = new Box3().setFromObject(instanceGroupRef.current)

  //   soundboardTexture.repeat.set(
  //     boundingBoxSoundboard.max.x / boundingBox.max.x,
  //     boundingBoxSoundboard.max.y / boundingBox.max.y,
  //   )
  // }
  // // soundboardTexture.repeat.set(size.x / desiredTextureWidth, size.y / desiredTextureHeight) // Adjust the desiredTextureWidth and desiredTextureHeight as needed
  // soundboardTexture.repeat.set(1024, 1024) // Adjust the desiredTextureWidth and desiredTextureHeight as needed
  // soundboardTexture.needsUpdate = true // Ensure the texture is updated

  return (
    <group name={configuration.name} dispose={null}>
      {instanceGeometry.length > 0 &&
        instanceGeometry.map((child) => (
          <mesh
            key={child.uuid}
            name={child.name}
            geometry={child.geometry}

            // castShadow
            // receiveShadow
          >
            {/* {child.name === 'Body_Rosette' ||
            child.name === 'Body_Rosette_(1)' ||
            child.name === 'Body_Rosette_(3)' ? (
              <meshStandardMaterial color="black" />
            ) : ( */}
            {/* <meshStandardMaterial map={soundboardTexture} /> */}
            <meshBasicMaterial>
              <GradientTexture
                stops={[0, 0.5, 1]} // As many stops as you want
                colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
                size={1024} // Size (height) is optional, default = 1024
                width={1024} // Width of the canvas producing the texture, default = 16
                type={GradientType.Radial} // The type of the gradient, default = GradientType.Linear
                innerCircleRadius={0} // Optional, the radius of the inner circle of the gradient, default = 0
                outerCircleRadius={'auto'} // Optional, the radius of the outer circle of the gradient, default = auto
              />
            </meshBasicMaterial>
            {/* )} */}
            {/* <Helper type={BoxHelper} args={['royalblue']} /> */}
          </mesh>
        ))}
      <group ref={instanceGroupRef} scale={0}>
        <instances.BodyRosette name="Body_Rosette" />
        <instances.BodyRosette1 name="Body_Rosette_(1)" />
        <instances.BodyRosette2 name="Body_Rosette_(2)" />
        <instances.BodyRosette3 name="Body_Rosette_(3)" />
        <instances.BodyRosette4 name="Body_Rosette_(4)" />
      </group>
    </group>
  )
}
